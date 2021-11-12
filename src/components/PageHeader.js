import React from 'react';
import avatar from '../images/pixi.png'

function PageHeader() 
{
    return (
    <div style={Headerstyle}>
        <div style={AvatarContainerStyle}>
            <img src={avatar} alt={avatar} style={AvatarStyle}></img>
        </div>
        <div style={TitleContainerStyle}>
            <div style={TitleStyle}>Tati's Blog</div>
        </div>
    </div>)
}

export default PageHeader



const Headerstyle = {
    backgroundColor: "#4c2d85",
    color: "#ffffff",
    padding: "10px",
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
    position: "fixed",
    width: "100%"
}

const AvatarContainerStyle = {
    marginLeft: "5vw"
}
const AvatarStyle = {
    width: "7vw",
    borderRadius: "50%",
    overflow: "hidden"
}

const TitleContainerStyle = {
    marginLeft: "5vw",
    display: "flex",
    alignItems: "center"
}
const TitleStyle = {
    display: "inline-block",
    fontSize: "5vw",
    fontFamily: "Helvetica"
}