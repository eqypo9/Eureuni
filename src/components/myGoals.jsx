import react, { Component } from "react";
import "./myGoals.css";
import HomePage from "./HomePage";

// import SampleImg from "./img/pic_sample.png";

class SquareImg extends Component {
  constructor(props) {
    super(props);
    this.status = {};
  }
  render() {
    return (
      <div>
        <div className="GoalContainer">
          <div className="img">그림</div>
          <div className="GoalName">운동</div>
        </div>
      </div>
    );
  }
}

const BoxGrid = () => {
  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxes.push(<SquareImg />);
      }
    }
    return boxes;
  };

  return <div className="box-grid">{generateBoxes()}</div>;
};

export default function MyGoal() {
  return (
    <div>
      <HomePage />
      <BoxGrid />
    </div>
  );
}
