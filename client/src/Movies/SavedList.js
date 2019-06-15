import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </span>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
