//This is for the footer
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";
import  styled from 'styled-components';

const NewP = styled.p`
color: white;
width: 100%;

`;



function Footer() {
    const [bottomOfPage, setBottomOfPage] = useState ([]);
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8uVvpJCe7OSeP3GbMWb2lWoJfpUergbMnFaSfV7O')
    .then(response => {
        setBottomOfPage(response.data);
    })
    .catch(error => {
        console.log("the data was not returned",error);
    });
    }, []);
        return(
            <div className = "bottomOfPage">
               <NewP><strong>Explanation:</strong>  {bottomOfPage.explanation}</NewP> 
            </div>
            );    
    }
export default Footer;
