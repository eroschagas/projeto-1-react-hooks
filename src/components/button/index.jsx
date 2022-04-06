import "./styles.css";

import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { text, onLoadMorePosts, disabled } = this.props;

    return (
      <button className="button" onClick={onLoadMorePosts} disabled={disabled}>
        {text}
      </button>
    );
  }
}
