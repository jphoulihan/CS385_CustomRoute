import React, { Component } from "react";

class Custom extends Component {
  render() {
    //this const declaration connects this Beginner class to the App class. It is the way to pass the//
    //apiDataBeginner state to call the map function on it from within this component//
    const mapCustom = this.props.mapObjectCustom;

    return (
      <div className="card-group">
        {mapCustom.map((person, index) => (
          <div className="card text-center">
            <div class="card">
              <div className="card-body">
                <img
                  className="card-img-top"
                  alt="yogapic"
                  src={person.imgURL}
                  key={index}
                />
                <br />
                <br />
                <h3 className="card-title">{person.body_part}</h3>
                <h5 className="car-title">{person.position}</h5>
                <p className="card-text">{person.description}</p>

                <audio controls autoplay>
                  <source src={person.audio} />
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Custom;
