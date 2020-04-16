//This is for the header
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";
import  styled from 'styled-components';

const WrapperDiv = styled.div`
color: white
`;
const NewH2 = styled.h2`

`;

function Header() {
    const [topOfPage, setTopOfPage] = useState ([]);
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8uVvpJCe7OSeP3GbMWb2lWoJfpUergbMnFaSfV7O')
    .then(response => {
        setTopOfPage(response.data);
    })
    .catch(error => {
        console.log("the data was not returned",error);
    });
    }, []);
        return(
            <WrapperDiv>
               <h1>{topOfPage.title}</h1>
               <NewH2>By: {topOfPage.copyright}</NewH2>
               <h3>Date: {topOfPage.date}</h3>
            </WrapperDiv>
            );    
    }
export default Header;