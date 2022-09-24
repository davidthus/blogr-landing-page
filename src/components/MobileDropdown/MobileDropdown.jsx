import React from "react";
import { ReactComponent as Arrow } from "../../images/icon-arrow-dark.svg";
import {
  ArrowWrapper,
  DropdownHeading,
  DropdownLinks,
  Link,
  Mobiledropdown
} from "./MobileDropdown.style";

function MobileDropdown({ dropdown, dispatch, state, id }) {
  function toggleClick(e) {
    dispatch({ type: id });
  }

  return (
    <Mobiledropdown>
      <DropdownHeading onClick={() => toggleClick()}>
        {dropdown.title}{" "}
        {state[`nav${id}open`] ? (
          <ArrowWrapper open={true}>
            <Arrow />
          </ArrowWrapper>
        ) : (
          <ArrowWrapper>
            <Arrow />
          </ArrowWrapper>
        )}
      </DropdownHeading>

      {state[`nav${id}open`] && (
        <DropdownLinks>
          {dropdown.links.map((link, index) => {
            return <Link key={index}>{link}</Link>;
          })}
        </DropdownLinks>
      )}
    </Mobiledropdown>
  );
}

export default MobileDropdown;
