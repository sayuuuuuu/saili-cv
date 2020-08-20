import React, { Component } from "react";
import Profile from "./profile";
import Skills from "./skills";
import Education from "./education";
import Achievement from "./achievement"

export default class MyCv extends Component {
    render() {
        return (
            <div className="App">
                <b><p> SAILI KHAIRNAR </p></b>
                



            <Profile/>  
            <Skills/>
            <Education/>
            <Achievement/>
            
            </div>
        )
    }
}