//this is for the body
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";

function Body() {
    const [middleOfPage, setMiddleOfPage] = useState ([]);
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8uVvpJCe7OSeP3GbMWb2lWoJfpUergbMnFaSfV7O')
    .then(response => {
        setMiddleOfPage(response.data);
    })
    .catch(error => {
        console.log("the data was not returned",error);
    });
    }, []);
        return(
            <div className = "middleOfPage">
               <img src={middleOfPage.url} alt="See Explanation"></img>
            </div>
            );    
    }
export default Body;