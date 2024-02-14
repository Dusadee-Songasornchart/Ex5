import React, { Component } from "react";
import "./Style.css";

export default class Button_Vote extends Component {

    C_click = (check_vote) => {
      this.props.parentCallback(check_vote);
    };
    render() {
      function Check_Max (c){
        if (c>=10){
          alert("You can't vote anymore");
        }
      }
      function Check_Min (c){
        if (c<=0){
          alert("You can't unvote anymore");
        }
      }
      return (
        <div className="vote">
          <div className="row">
            <button className="btn" onClick={()=>{this.C_click("Vote");Check_Max(this.props.amount) }}>Click to Vote</button>
            <div className="showbtn">{this.props.amount==0?"MIN":this.props.amount==10?"MAX":this.props.amount}</div>
            <button className="btn" onClick={()=>{this.C_click("Unvote");Check_Min(this.props.amount)}}>Click to Unvote</button>
          </div>
        </div>
      );
    }
  }