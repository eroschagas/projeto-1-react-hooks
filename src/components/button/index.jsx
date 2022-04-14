import P from "prop-types";
import "./styles.css";
import React from "react";

export const Button = ({ text, onLoadMorePosts, disabled }) => (
  <button className="button" onClick={onLoadMorePosts} disabled={disabled}>
    {text}
  </button>
);
Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onLoadMorePosts: P.func.isRequired,
  disabled: P.bool,
};
