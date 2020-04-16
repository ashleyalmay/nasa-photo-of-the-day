//This is for the header
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";

function Header() {
    const [topOfPage, setTopOfPage] = useState ([]);
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        setTopOfPage(response.data);
    })
    .catch(error => {
        console.log("the data was not returned",error);
    });
    }, []);
        return(
            <div className = "topOfPage">
               <h1>{topOfPage.title}</h1>
               <h2>By: {topOfPage.copyright}</h2>
               <h3>Date: {topOfPage.date}</h3>

            </div>
            );    
    }
export default Header;