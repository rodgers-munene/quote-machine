import React from 'react';
import './hero.css';
import { FaTwitter,  FaTumblr, FaQuoteLeft  } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Hero = () => {
  const [quoteInfo, setquoteInfo] = useState({});
  const [color, setColor] = useState("#800000");
  const [randomQuote, setRandomQuote] = useState({});
  



  useEffect(() => {
    getQuote()
    randomColors();
  }, [])

  async function getQuote(){
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setquoteInfo(data)

    let randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex])
  }

const colors = ['#800000', '#808000', '#7fff00', '#00008b', '#dc143c', '#000080', '#f08080']
const randomColors = () =>{
  var randomColorIndex = colors[Math.floor(Math.random() * colors.length)];
  setColor(randomColorIndex)

 }


  const btnFun = () =>{
    getQuote();
    randomColors();
  }

  return (
    <div className="main-div" style={{backgroundColor: color}}>
        <div id='quote-box'>
            <p id='text' style={{color: color}}><FaQuoteLeft  className='quote'/>{randomQuote.text}</p>
            <p id='author' style={{color: color}}> -{randomQuote.author}</p>
            <button id='new-quote' onClick={btnFun} style={{backgroundColor: color}}>New quote</button>
            <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22An%20unexamined%20life%20is%20not%20worth%20living.%22%20Socrates" + randomQuote.text} id='tweet-quote'target='_blank'><FaTwitter className='fa-icon one' style={{backgroundColor: color}}/> </a>
            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Socrates&content=An%20unexamined%20life%20is%20not%20worth%20living.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" + randomQuote.text} ><FaTumblr className='fa-icon two' style={{backgroundColor: color}}/> </a>
            
        </div>
    </div>
  )
}

export default Hero  