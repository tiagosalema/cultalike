import React from "react";
import styled from "styled-components";
import Linking from "./common/Linking";

const StyledHeader = styled.div`
  background-color: #3365c0;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

  > * {
    &:first-child {
      margin-left: 20px;
    }
    margin-right: 30px;
    color: #eee;
  }
`;

const Header = () => (
  <StyledHeader>
    <Linking to="/" title="Home" />
    <Linking to="/users" title="Users" />
    <Linking to="/movies" title="Movies" />
    <Linking to="/myReviews" title="My Reviews" />
  </StyledHeader>
);

export default Header;
