import React, { useState } from "react";
import styled from "styled-components";
import cytaty from "../quotes";
import {MdFormatQuote} from 'react-icons/md';
import { COLORS } from "../colors";

const Wrapper = styled.div`
  width: 500px;
  max-hight: 90vw;
  border: 1px solid black;
  background-color: grey;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
`

const IconWrapper = styled.div`
    font-size: 48px;
    float: left;
    margin-top: -5px;
`

const TextWrapper = styled.div`
    margin: 20px 30px 30px 30px;
    font-size: 32px;
`
const Author = styled.div`
    align-self: flex-end;
    margin: 10px 30px 10px 0;
    font-size: 18px;
    font-style: italic;
`
const Button = styled.button`
    align-self:flex-end;
    font-size: 1rem;
    text-align: center;
    margin: 15px 30px 20px 0 ;
    background-color: ${COLORS.color2};
}
button:hover {
        background-color: ${COLORS.color1};
}
`

const QuoteCard = (/* { quote, author, newQbtn } */) => {

    const [index, setIndex] = useState(4);
    const {quote, author} = cytaty[index];

    const randomQuote = () => {
        let randomNumber =  Math.floor(Math.random() * cytaty.length);
        console.log(randomNumber, index);
        //jeżeli losowy numer jest taki sam jak index, zwiększa o 1, żeby wyświetlik kolejny a nie ten sam
        if(randomNumber === index)
        {
            randomNumber = index + 1;
            console.log("W ifie", randomNumber, index);
        }
        setIndex(randomNumber);
    };

    /* function clickHandler() {
        console.log('clicked!')
    } */
    return (
        <Wrapper>
            <TextWrapper>
                <IconWrapper>
                    <MdFormatQuote />
                </IconWrapper>
                <p>{quote}</p>   
            </TextWrapper>
            <Author>
                <p>- {author}</p>
            </Author>
            <Button>
                <button type="button" onClick={randomQuote}>New quote</button>                
            </Button>
        </Wrapper>
    );
};

export default QuoteCard;
