import React, { Component } from "react";
import "./counter.css";
import { connect } from "react-redux";

import { mapDispachToProps } from "./actions";

class Couter extends Component {
  render() {
      const { onAgeUp,onAgeDown }=this.props
    console.log(this.props.history);
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={()=>onAgeUp(1)}>Age UP</button>
        <button onClick={()=>onAgeDown(1)}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.counter.age
  };
};


export default connect(
  mapStateToProps,
  mapDispachToProps
)(Couter);
