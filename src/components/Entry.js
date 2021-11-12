import React from 'react';

function Entry(props) 
{
    return (
    <div style={EntryContainerStyle}>
        <h1 style={H1Style}>{props.title}</h1>
        <div style={DateStyle}>
            {props.date.toString()}
        </div>
        <div style={ContentContainer}>
            <img src={props.image} 
                 alt="no img"
                 style={ContentImage}
                 ></img>
            <div style={TextStyle}>
                {props.content}
                <br></br>
                <div style={ReadMoreStyle}>Leer más...</div>
            </div>
        </div>
        
    </div>)
}

export default Entry

const H1Style = {
    marginBottom: "10px"
}
const EntryContainerStyle = {
    padding: "3vh",
    fontFamily: "Helvetica",
    marginBottom: "10vh",
    backgroundColor: "#f0f0f0"
}
const DateStyle = {
    fontStyle: "italic",
    fontSize: "80%",
    color: "#999999"
}
const TextStyle = {
    marginLeft: "20px",
    fontSize: "110%"
}
const ContentContainer = {
    marginTop: "2vh",
    display: "flex",
    height: "30vh"
}
const ContentImage = {
    width: "30vh",
    height: "30vh",
    //overflow: "hidden",
    objectFit: "cover"
}
const ReadMoreStyle = {
    marginTop: "5px",
    cursor: "pointer",
    color: "skyblue"
}