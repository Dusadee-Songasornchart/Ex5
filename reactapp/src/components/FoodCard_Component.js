import React, { Component } from "react";
import "./Style.css";
import Button_Vote from "./Button_Vote";
export default class FoodCard_Component extends Component {
  state = {
    check: 0,
  };
  Check_click = (check_vote) => {
    let counter_new;
    const { check: count } = this.state;
    if (check_vote === "Vote" && count < 10) {
      counter_new = count + 1;
    } else if (check_vote === "Unvote" && count > 0) {
      counter_new = count - 1;
    } else {
      return;
    }
    this.setState({ check: counter_new });
  };
  render() {
    const { check: amount } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="foodInfo">
            <h2>{this.props.food_type}</h2>
            <h3>{this.props.food}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae ligula scelerisque sapien tristique blandit ut nec nisl.
              Curabitur malesuada ut quam vitae semper. Duis sed purus nulla.
              Proin nec mattis est. Donec nec eleifend orci, eget dignissim
              eros. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed varius non velit id interdum.
              quis ullamcorper purus.
            </p>
          </div>
          <div>
            <img className="Img" src={this.props.food_img} />
          </div>
        </div>
        <Button_Vote amount={amount} parentCallbcak={this.Check_click} />
      </div>
    );
  }
}
