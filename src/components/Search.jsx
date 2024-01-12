import React from "react";
import HomePage from "./HomePage";
import { Component } from "react";
import { styled } from "styled-components";

const UserSearchBarDiv = styled.div`
  width: 50%;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: 500px;
`;

const UserSearchInput = styled.input`
  cursor: pointer;
  height: 100%;
  width: 80%;
  border-radius: 10px;
  padding-left: 10px;
`;

const ButtonContainer = styled.button`
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  padding: 12.5px 15px;
`;

const Box_Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-right: 200px;
`;

const Box = styled.div`
  border: 1px solid #000;
  padding: 20px;
  text-align: center;
  margin: 10px 0px 0px 350px;
`;

class SampleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ButtonContainer onClick={this.props.onClick}>
        {this.props.text}
      </ButtonContainer>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  SearchName = (e) => {
    console.log("찾아땅!");
    //여기서 API날리면 됨
  };
  render() {
    return (
      <UserSearchBarDiv>
        <UserSearchInput type="text" placeholder="search group" />
        <SampleButton text={"search"} onClick={this.SearchName} />
      </UserSearchBarDiv>
    );
  }
}

const BoxGrid = () => {
  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxes.push(<Box>Room</Box>);
      }
    }
    return boxes;
  };

  return <Box_Grid>{generateBoxes()}</Box_Grid>;
};

export default function SearchPage() {
  return (
    <div>
      <HomePage />
      <SearchBar />
      <BoxGrid />
    </div>
  );
}
