import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  Dropdown,
  DropdownHeading,
  DropdownLinks,
  Link,
} from "./DropDown.style";

function DropDown({ dropdown }) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown>
      <DropdownHeading onClick={() => setOpen((prev) => !prev)}>
        {dropdown.title} {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </DropdownHeading>

      {open && (
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
