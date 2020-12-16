import React, { Component } from "react";

class Advanced extends Component {
  render() {
    //this const declaration connects this Beginner class to the App class. It is the way to pass the//
    //apiDataBeginner state to call the map function on it from within this component//
    const mapAdvanced = this.props.mapObjectAdvanced;
    const onPick = this.props.pickAdvanced;
    const childCheckButton = this.props.childCheckButton;

    return (
      <div className="card-group">
        {mapAdvanced.map((person) => (
          <div className="card text-center">
            <div class="card">
              <div className="card-body">
                <img
                  className="card-img-top"
                  alt="yogapic"
                  src={person.imgURL}
                  key={person.id}
                />
                <br />
                <br />
                <h3 className="card-title">{person.body_part}</h3>
                <h5 className="car-title">{person.position}</h5>
                <p className="card-text">{person.description}</p>

                <audio controls autoplay>
                  <source src={person.audio} />
                </audio>
                <button
                  disabled={childCheckButton(person.id) && true}
                  onClick={() => onPick(person.id)}
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  {childCheckButton(person.id) ? "Stretch Added" : "Add"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Advanced;
