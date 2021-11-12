import React from 'react';
import Entry from './Entry'
import {entryList} from '../data'

function Entries() 
{
    let entriesList = entryList



    return (
    <div style={EntriesContainerStyle}>
        {entriesList.map((entry, i) => (
            <Entry title={entry.title}
                   date={entry.date}
                   content={entry.content}
                   image={entry.image}
                   key={i}
            >
            </Entry>
        ))}
    </div>)
}

export default Entries

let pageWidth = window.innerWidth
const EntriesContainerStyle = {
    //display: 
    marginLeft: pageWidth > 600 ? "28vh" : "16vh",
    marginRight: pageWidth > 600 ? "8vh" : "3vh",
    paddingTop: "20vh",
    //border: "1px red solid",
    //backgroundColor: "#e0e0e0"
}