//This is for the footer
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";

function Footer() {
    const [bottomOfPage, setBottomOfPage] = useState ([]);
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        setBottomOfPage(response.data);
    })
    .catch(error => {
        console.log("the data was not returned",error);
    });
    }, []);
        return(
            <div className = "bottomOfPage">
               <p>{bottomOfPage.explanation}</p>
               
            </div>
            );    
    }
export default Footer;
