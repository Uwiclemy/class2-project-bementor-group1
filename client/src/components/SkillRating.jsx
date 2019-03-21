import React, { Component } from "react";
class Rating extends Component {
  render() {
    const rating = this.props.rate;

    const max = 5;

    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span class="rating" />);
    }

    for (let i = stars.length; i < max; i++) {
      stars.push(<span class="rating_empty" />);
    }

    return <span>{stars}</span>;
  }
}

export default Rating;
