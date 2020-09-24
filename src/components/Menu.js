import React from "react";
import PropTypes from "prop-types";
// Icons
import { IoIosMore as MenuIcon } from "react-icons/io";
// Components
import Popover from "./Popover";

/*
 * TODO: Create the Menu component
 *
 * Requirements:
 * - Must be named Menu
 * - Must be a function component
 * - Should render a <div> element as the container for the menu content
 * - Should render an icon the user can click to open/close the menu
 * - Should render the lists of actions inside a Popover component if the menu is open
 * - The Popover component should be mounted only if the menu is open
 * - Each list of actions should be separated by an horizontal line (use a <hr> element)
 *
 * Tips:
 * - You can use the 'menu' CSS class for styling
 *
 */
const Menu = (props) => (
  <div className="menu">
    {/* render the menu icon */}
    <MenuIcon onClick={props.onClick} />
    {/* render the lists of actions */}
    {props.isOpen && (
      <Popover title="List Actions" onClickOutside={props.onClick}>
        {props.actions.map((action, actionsIndex) => (
          <div key={actionsIndex}>
            <ul className="menu-actions">
              {action.map(({ title, onClick }, actionIndex) => (
                <li className="menu-action" key={actionIndex} onClick={onClick}>
                  <p>{title}</p>
                </li>
              ))}
            </ul>
            <hr className="divider" />
          </div>
        ))}
      </Popover>
    )}
  </div>
);

Menu.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        title: PropTypes.string.isRequired,
      })
    )
  ),
};

export default Menu;
