import React, { Component } from "react";
class Beginner extends Component {
  render() {
    // const customItems = this.props.customItems;
    //this const declaration connects this Beginner class to the App class. It is the way to pass the//
    //apiDataBeginner state to call the map function on it from within this component//
    const mapBeginner = this.props.mapObjectBeginner;
    const onPick = this.props.pickBeginner;
    const lessBeg = this.props.begOff;

    return (
      <div className="card-group">
        {mapBeginner.map((person) => (
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
                  onClick={() => onPick(person.id)}
                  type="button"
                  class="btn btn-primary btn-lg btn-block"
                >
                  {this.lessBeg ? "Add" : "Added"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Beginner;
//**************End of Beginner Component**********************//
