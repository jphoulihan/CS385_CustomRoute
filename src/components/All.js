import React, { Component } from "react";

class All extends Component {
  
  constructor(props){
    super(props)
    this.state = { 
      pickNmix: [], 
      len:[]
    };

    this.pickBeginner = this.pickBeginner.bind(this);
  }
  
  getID(idToFind) {
    return function (bodyObject) {
      return bodyObject.id === idToFind;
    };
  }
  
  pickBeginner(bodyID) {
    let foundBodObj = this.props.mapObjectAll.beginner.filter(
      this.getID(bodyID));
      this.setState({pickNmix: this.state.pickNmix.concat(foundBodObj)});
    }
    
    pickIntermediate(bodyID) {
      let foundBodObj = this.props.mapObjectAll.intermediate.filter(
        this.getID(bodyID));
        this.setState({pickNmix: this.state.pickNmix.concat(foundBodObj)});
      }
      
      pickAdvanced(bodyID) {
        let foundBodObj = this.props.mapObjectAll.advanced.filter(
          this.getID(bodyID));
          this.setState({pickNmix: this.state.pickNmix.concat(foundBodObj)});
        }
        
render() {
  const all = this.props.mapObjectAll;
    return (
      <div>
        {all.beginner.map((person) => (
          <div className="card text-center">
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
                <button onClick={() => this.pickBeginner(person.id)} type="button" class="btn btn-primary btn-block">Select</button>
            </div>
          </div>
        ))}
        {all.intermediate.map((person) => (
          <div className="card text-center">
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
                <button onClick={() => this.pickIntermediate(person.id)} type="button" class="btn btn-primary btn-block">Select</button>
              </div>
          </div>
        ))}
        {all.advanced.map((person) => (
          <div className="card text-center">
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
                <button onClick={() => this.pickAdvanced(person.id)} type="button" class="btn btn-primary btn-block">Select</button>
            </div>
          </div>
        ))}
        <Custom 
        routine = {this.state.pickNmix} 
        />
      </div>
    );
  }
}

//***************************Beginner Mapping Content Component****************************//
class Custom extends Component {
  render() {
    //this const declaration connects this Beginner class to the App class. It is the way to pass the//
    //apiDataBeginner state to call the map function on it from within this component//
    const customRoutine = this.props.routine;

    return (
      <div>
      {customRoutine.map((person) => (
        <div className="card text-center">
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
              {/* <button onClick={() => this.pickAdvanced(person.id)} type="button" class="btn btn-primary btn-block">Select</button> */}
          </div>
        </div>
      ))}
      </div>
    );
  }
}
//**************End of Checkout Component**********************//

export{All, Custom};