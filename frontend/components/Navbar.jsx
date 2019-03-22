import React from "react";
import styled from "styled-components";

import Linking from "./common/Linking";
import User from "./User";
import Signout from "./Signout";
import "./Navbar.scss";

const StyledHeader = styled.div`
  background-color: #3365c0;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
  > * {
    &:first-child {
      margin-left: 20px;
    }
    margin-right: 30px;
    color: #eee;
    background-color: inherit;
  }
`;

const Navbar = () => (
  <User>
    {({ data: { me } }) => {
      return (
        <StyledHeader>
          <Linking to="/" title="Home" />
          <Linking to="/users" title="Users" />
          <Linking to="/movies" title="Movies" />
          {!me && <Linking to="/signin" title="Signin" />}
          {me && (
            <>
              <Linking to="/myReviews" title="My Reviews" />
              <span sytle={{ flex: 4 }}>{me.name}</span>
              <Signout />
            </>
          )}
        </StyledHeader>
      );
    }}
  </User>
);

export default Navbar;
