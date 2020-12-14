import React, { Component } from "react";

class Intermediate extends Component {
  render() {
    const mapIntermediate = this.props.mapObjectIntermediate;
    const onPick = this.props.pickIntermediate;

    return (
      <div className="card-group">
        {mapIntermediate.map((person) => (
          <div className="card text-center">
            <div class="card">
              <div className="card-body">
                <img
                  className="card-img-top"
                  alt="yogapic"
                  src={person.imgURL}
                  key={person.id}
                />

                <h3 className="card-title">{person.body_part}</h3>
                <h5 className="car-title">{person.position}</h5>
                <p className="card-text">{person.description}</p>

                <audio controls autoplay>
                  <source src={person.audio} />
                </audio>
                <button
                  onClick={() => onPick(person.id)}
                  type="button"
                  class="btn btn-primary btn-lg btn-block"
                >
                  Add to Routine
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Intermediate;
