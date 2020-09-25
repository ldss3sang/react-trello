import React, { Component } from "react";
import PropTypes from "prop-types";
// Icons
import { IoMdAdd as AddIcon } from "react-icons/io";
// Components
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import CardEditor from "./CardEditor";
import Menu from "./Menu";
import Form from "./Form";

/*
 * TODO: Create the CardsList component
 *
 * Requirements:
 * - Must be named CardsList
 * - Must be a class component
 * - Should render a <div> element as the container for the card
 * - Should render the tags list at the top of the card content
 * - Should render the card number and description below the tags
 *
 * Tips:
 * - You can use the 'card' CSS class for styling
 *
 */
class CardsList extends Component {
  constructor(props) {
    super(props);

    // CardsList state
    this.state = {
      creatingNewCard: false,
      editCardId: null,
      editCardText: "",
      editCardTags: [],
    };

    this.cardRefs = {};

    // TODO: Define all the card actions here
    this.actions = [
      [
        {
          title: "Add Card...",
          onClick: () => {
            this.props.onToggleMenu(this.props.id);
            this.setState({ creatingNewCard: true });
          }, // TODO // done
        },
        {
          title: "Copy List...",
          onClick: () => this.props.onCopyList(this.props.id), // TODO //done
        },
      ],
      [
        {
          title: "Move All Cards in This List...",
          onClick: () => this.props.onMoveAllCards(this.props.id), // TODO // done
        },
        {
          title: "Archive All Cards in This List...",
          onClick: () => this.props.onRemoveAllCards(this.props.id), // TODO // done
        },
      ],
      [
        {
          title: "Archive This List",
          onClick: () => this.props.onRemoveList(this.props.id), // TODO // done
        },
      ],
    ];

    // TODO: Bind your class methods here
    // ...
    this.handleAddNewCard = this.handleAddNewCard.bind(this); // done
    this.handleCancelNewCard = this.handleCancelNewCard.bind(this); // done
    this.handleCreateNewCard = this.handleCreateNewCard.bind(this); // done
    this.handleEditCard = this.handleEditCard.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleCopyCard = this.handleCopyCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleArchiveCard = this.handleArchiveCard.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }

  // TODO: implement the handleAddNewCard method to add a new card to the list.
  // Tips:
  // - Call the `this.props.onAddCard` function to add a new card
  // - Use the `this.setState` method to update the state in order to close the card creation form
  handleAddNewCard(cardText = "") {
    if (cardText) {
      this.props.onAddCard(this.props.id, cardText);
    }
    this.handleCancelNewCard();
  }

  // TODO: implement the handleCancelNewCard method.
  // Tips:
  // - Use the `this.setState` method to update the state in order to close the card creation form
  handleCancelNewCard() {
    this.setState({ creatingNewCard: false });
  }

  // TODO: implement the handleCreateNewCard method.
  // Tips:
  // - Use the `this.setState` method to update the state in order to open the card creation form
  handleCreateNewCard() {
    this.setState({ creatingNewCard: true });
  }

  // TODO: implement the handleEditCard method.
  // Tips:
  // - Use the `this.setState` method to update the text and tags values of the editing from
  handleEditCard(id, text, tags) {
    this.setState({
      editCardId: id,
      editCardText: text,
      editCardTags: tags,
    });
  }

  // TODO: implement the handleCancelEdit method.
  // Tips:
  // - Use the `this.setState` method to reset and close the editing form
  handleCancelEdit() {
    this.setState({
      editCardId: null,
      editCardText: "",
      editCardTags: [],
    });
  }

  // TODO: implement the handleCopyCard method.
  // Tips:
  // - Call the `this.props.onCopyCard` function to clone a card
  // - Do not forget to reset and close the editing form
  handleCopyCard() {
    this.props.onCopyCard(this.props.id, this.state.editCardId);
    this.handleCancelEdit();
  }

  // TODO: implement the handleArchiveCard method.
  // Tips:
  // - Call the `this.props.onRemoveCard` function to remove a card form the list
  // - Do not forget to reset and close the editing form
  handleArchiveCard() {
    this.props.onRemoveCard(this.props.id, this.state.editCardId);
    this.handleCancelEdit();
  }

  // TODO: implement the handleSaveCard method.
  // Tips:
  // - Call the `this.props.onEditCard` function to save changes on the card
  // - Do not forget to reset and close the editing form
  handleSaveCard(text) {
    this.props.onEditCard(this.state.editCardId, text);
    this.handleCancelEdit();
  }

  // TODO: implement the handleRemoveTag method.
  // Tips:
  // - Call the `this.props.onRemoveTag` function to remove a tag from a card
  handleRemoveTag(tagId) {
    this.props.onRemoveTag(this.state.editCardId, tagId);
  }

  // TODO: implement the handleAddTag method.
  // Tips:
  // - Call the `this.props.onAddTag` function to add a tag to a card
  handleAddTag(text) {
    if (text) {
      this.props.onAddTag(this.state.editCardId, text);
    }
  }

  // TODO: implement the renderHeader method to render the list header UI.
  // Tips:
  // - Should render a h3 tag for the list title
  // - Should render a Menu component
  // - Should render the number of cards in the list
  //
  // [BONUS]:
  // - Add a drag handle to the list header so that user can grab the list and drag it around
  // (using the dragHandleProps)
  renderHeader() {
    const { title, cards } = this.props;
    return (
      <div className="cards-list-header">
        <div className="cards-list-title">
          {/* render the list title */}
          <h3>{title}</h3>
          {/* render the Menu component */}
          <Menu
            isOpen={this.props.isMenuOpen}
            onClick={() => this.props.onToggleMenu(this.props.id)}
            actions={this.actions}
          />
        </div>
        {/* render the number of cards in this list */}
        <p>{cards.length} cards</p>
      </div>
    );
  }

  // TODO: implement the renderCards method to render the cards.
  // Tips:
  // - Iterate through this.props.cards to render each Card
  //
  // [BONUS]:
  // - Wrap the cards inside the <Droppable> component
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
  // - Add the droppableId prop to it (should be the list ID)
  // - Add the direction prop to it (should be 'vertical')
  // - Add the type prop to it (should be 'card')
  // - Add the children function that returns your cards and bind everything together
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md#children-function
  renderCards() {
    return (
      <div className="cards">
        {
          /* render the cards */
          this.props.cards.map(({ id, number, description, tags }, index) => (
            <li
              key={id}
              onClick={() => this.handleEditCard(id, description, tags)}
              ref={(node) => {
                if (node) {
                  this.cardRefs[id] = node;
                }
              }}
            >
              <Card
                id={id}
                number={number}
                description={description}
                tags={tags}
              />
            </li>
          ))
        }
      </div>
    );
  }

  // TODO: implement the renderFooter method to render the list footer UI.
  // Tips:
  // - Should render either a Form component to create a new card
  // or a button to trigger the card creation mode (creatingNewCard)
  renderFooter() {
    return this.state.creatingNewCard ? (
      <Form
        type="card"
        placeholder="Enter a title for this card..."
        buttonText="Add Card"
        onClickSubmit={this.handleAddNewCard}
        onClickCancel={this.handleCancelNewCard}
      />
    ) : (
      <button
        className="add-button add-card-button"
        onClick={this.handleCreateNewCard}
      >
        <AddIcon />
        <p>Add a new card</p>
      </button>
    );
  }

  // TODO: render the CardsList UI.
  //
  // [BONUS]:
  // - Wrap the cards list inside the <Draggable> component
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md
  // - Add the draggableId prop to it (should be the list ID)
  // - Add the index prop to it (should be the list index)
  // - Add the children function that returns your cards list component and bind everything together
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#children-function-render-props--function-as-child
  render() {
    return (
      <div className="cards-list">
        {/* render list header */}
        {this.renderHeader()}
        {/* render cards */}
        {this.renderCards()}
        {/* render list footer */}
        {this.renderFooter()}
        {/* render card editor */}
        {this.state.editCardId && (
          <CardEditor
            initialValue={this.state.editCardText}
            tags={this.state.editCardTags}
            position={{
              top: this.cardRefs[this.state.editCardId].getBoundingClientRect()
                .top,
              left: this.cardRefs[this.state.editCardId].getBoundingClientRect()
                .left,
            }}
            onSaveCard={this.handleSaveCard}
            onRemoveTag={this.handleRemoveTag}
            onAddTag={this.handleAddTag}
            onCopyCard={this.handleCopyCard}
            onArchiveCard={this.handleArchiveCard}
            onClickOutside={() => this.handleCancelEdit()}
          />
        )}
      </div>
    );
  }
}

CardsList.defaultProps = {
  cards: null,
  isMenuOpen: false,
  onToggleMenu: () => null,
  onAddCard: () => null,
  onRemoveCard: () => null,
  onRemoveList: () => null,
  onRemoveAllCards: () => null,
  onCopyList: () => null,
  onMoveAllCards: () => null,
  onCopyCard: () => null,
  onEditCard: () => null,
  onRemoveTag: () => null,
  onAddTag: () => null,
};

CardsList.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  isMenuOpen: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onRemoveList: PropTypes.func,
  onRemoveAllCards: PropTypes.func,
  onCopyList: PropTypes.func,
  onMoveAllCards: PropTypes.func,
  onCopyCard: PropTypes.func,
  onEditCard: PropTypes.func,
  onRemoveTag: PropTypes.func,
  onAddTag: PropTypes.func,
};

export default CardsList;
