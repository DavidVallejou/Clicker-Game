import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends:friends,
    currentScore: 0,
    topScore: 0,
    clickedImage: [],
    status: "Click to start"
  };

  handlePicked = id => {
    var that = this
    const friendArray = this.state.clickedImage;
    console.log("***", this.state.clickedImage);
    console.log("###", friendArray.includes(id));

    if (friendArray.includes(id)) {
      if (this.state.currentScore>this.state.topScore) {
        this.setState({
          topScore: this.state.currentScore
        })
      }
      this.setState ({
        status: "Wrong!",
      })
      document.querySelector("#status").classList.add("red-text")
      setTimeout(function () {
        document.querySelector("#status").classList.remove("red-text")
        that.setState({
          
          currentScore: 0,
          clickedImage: [],
          status:"Click card to begin!"
        })
      }, 500)

    
    }
    else {
       this.state.clickedImage.push(id)
       this.setState({
         currentScore:this.state.currentScore + 1,
         status: "You are correct!"
       });
       document.querySelector("#status").classList.add("green-text")
      setTimeout(function () {
        document.querySelector("#status").classList.remove("green-text")
      }, 500)
    }
    this.endGame();
    this.shuffle(friends);
  }

  endGame() {
//to check if the current score is greater than the topScore
    if(this.state.currentScore > 12) {
      let score = this.state.currentScore
      this.setState({
        topScore: score,
        currentScore: 0,
        clickedImage: [],
        status:"Click card to begin!"
      })
    }
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar
        currentScore = {this.state.currentScore}
        topScore = {this.state.topScore}
        status = {this.state.status}
        />
        
      
      
      <Wrapper>
        <Title>Marvel Click Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickedImage={this.clickedImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
