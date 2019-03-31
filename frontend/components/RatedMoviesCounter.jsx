import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const AnimationStyles = styled.span`
  position: fixed;
  right: 100px;
  .count {
    display: block;
    position: relative;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
    transition: transform 0.4s;
  }
  .count-exit {
    top: 2%;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: rotateX(0.5turn);
    transition: transform 0.4s;
  }
`;

const Dot = styled.div`
  background: #514863;
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2rem;
  width: 3rem;
  min-height: 3rem; /* Keep it as circle after the effect */
  font-weight: 100;
`;

const RatedMoviesCounter = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition className="count" classNames="count" key={count} timeout={400}>
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

RatedMoviesCounter.propTypes = {
  count: PropTypes.number.isRequired
};

export default RatedMoviesCounter;
