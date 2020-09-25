import React, { Component } from "react";
import PropTypes from "prop-types";
// Icons
import {
  IoMdCopy as CopyIcon,
  IoMdArchive as ArchiveIcon,
  IoMdCreate as EditIcon,
  IoMdClose as RemoveIcon,
} from "react-icons/io";
// Components
import Button from "./Button";
import Form from "./Form";
import Popover from "./Popover";

/*
 * TODO: Create the CardEditor component
 *
 * Requirements:
 * - Must be named CardEditor
 * - Must be a class component
 * - Should render a Form component to edit the card description (that contain a textarea and a submit button)
 * - Should render a list of buttons for all editing actions (edit labels, copy, archive)
 * - Should render a Popover component for displaying the label editing form:
 *    - Should render the list of tags
 *    - Should render an icon next to each tag to let the user remove each tag individually
 *    - Should render a Form component to add a new tag (that contain an input and a submit button)
 *
 * Tips:
 * - You can use the 'editor-modal' and 'editor-actions' CSS classes for styling
 *
 */
class CardEditor extends Component {
  constructor(props) {
    super(props);

    this.editorRef = React.createRef();

    // TODO: Define your state properties here
    this.state = {
      isLabelEditOpen: false,
      closeOnlyLabel: false,
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(event) {
    if (this.editorRef.current.contains(event.target)) {
      return;
    }
    if (!this.state.closeOnlyLabel) {
      this.props.onClickOutside();
    } else {
      this.setState({
        closeOnlyLabel: false,
      });
    }
  }

  // TODO: render the CardEditor UI.
  render() {
    return (
      <div className="editor-modal" onClick={this.handleOutsideClick}>
        <div
          ref={this.editorRef}
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: `${this.props?.position?.top ?? 0}px`,
            left: `${this.props?.position?.left ?? 0}px`,
          }}
        >
          <div>
            {/* render editor form */}
            <Form
              type="editor"
              initialValue={this.props.initialValue}
              buttonText="Save"
              onClickSubmit={this.props.onSaveCard}
            />
          </div>
          <ul className="editor-actions">
            {/* render editor actions */}
            <li className="editor-action">
              <Button
                text="Edit Labels"
                icon={<EditIcon />}
                variant="editor"
                onClick={() => this.setState({ isLabelEditOpen: true })}
              />
            </li>
            <li className="editor-action">
              <Button
                text="Copy"
                icon={<CopyIcon />}
                variant="editor"
                onClick={this.props.onCopyCard}
              />
            </li>
            <li className="editor-action">
              <Button
                text="Archive"
                icon={<ArchiveIcon />}
                variant="editor"
                onClick={this.props.onArchiveCard}
              />
            </li>
            {/* render tags editing form */}
            {this.state.isLabelEditOpen && (
              <Popover
                title="Labels"
                onClickOutside={() =>
                  this.setState({
                    isLabelEditOpen: false,
                    closeOnlyLabel: true,
                  })
                }
                offset={{ top: -119 }}
              >
                <div>
                  <ul className="labels">
                    {this.props.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="label"
                        onClick={() => this.props.onRemoveTag(index)}
                      >
                        <RemoveIcon />
                        <p>{tag}</p>
                      </li>
                    ))}
                  </ul>
                  <h4 className="new-label-title">Add a new label</h4>
                  <Form
                    type="labels"
                    placeholder="Enter a name for this label..."
                    buttonText="Add"
                    onClickSubmit={this.props.onAddTag}
                  />
                </div>
              </Popover>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

CardEditor.defaultProps = {
  initialValue: "",
  tags: [],
  position: null,
  onSaveCard: () => null,
  onRemoveTag: () => null,
  onAddTag: () => null,
  onCopyCard: () => null,
  onArchiveCard: () => null,
  onClickOutside: () => null,
};

CardEditor.propTypes = {
  initialValue: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  position: PropTypes.exact({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  onSaveCard: PropTypes.func,
  onRemoveTag: PropTypes.func,
  onAddTag: PropTypes.func,
  onCopyCard: PropTypes.func,
  onArchiveCard: PropTypes.func,
  onClickOutside: PropTypes.func,
};

export default CardEditor;
