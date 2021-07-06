import React, { Component } from "react";
import "./Profile.css";
import Button from "./Button.jsx";
import Links from "./Links.jsx";

class Profile extends Component {
  render() {
    const data = {
      name: "Habibul Islam",
      bio: "Student of class 12, wating for autopass and dream to be a doctor or CSE engineer",
      skills: ["Web design", "javascript", "ReactJs"],
      link: ["http://facebook.com/habibul.islam.1082", "http://github.com/habibulislam6862"],
    };


    return (
      <div className="profile">
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <h2>Skills: </h2>
        {data.skills.map( (el)=> <Button>{el}</Button>)}
        <h2>Social Links:</h2>
        {data.link.map( (el) => <Links link={el}>{el === data.link[0] ? 'Facebook' : 'Github'}</Links> )}
      </div>
    );
  }
}

export default Profile;
