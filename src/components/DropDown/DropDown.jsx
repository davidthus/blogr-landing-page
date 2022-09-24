import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  Dropdown,
  DropdownHeading,
  DropdownLinks,
  Link,
} from "./DropDown.style";

function DropDown({ dropdown, dispatch, state, id }) {
  function toggleClick(e) {
    dispatch({ type: id });
  }

  return (
    <Dropdown>
      <DropdownHeading onClick={() => toggleClick()}>
        {dropdown.title}{" "}
        {state[`nav${id}open`] ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </DropdownHeading>

      {state[`nav${id}open`] && (
        <DropdownLinks>
          {dropdown.links.map((link, index) => {
            return <Link key={index}>{link}</Link>;
          })}
        </DropdownLinks>
      )}
    </Dropdown>
  );
}

export default DropDown;
