import React, { useState } from 'react'

export default function QuoteGenerator() {
    const [quote, setQuote] = useState('Fear is the mind-killer');
    const [speaker, setSpeaker] = useState('Muad\'Dib');

    async function handleClick() {
        const url = 'https://futuramaquoteapi.herokuapp.com/randomquote';
        const response = await fetch(url);
        const json = await response.json();

        console.log('json', json.quote)

        setQuote(json.quote);
        setSpeaker(json.name);
    }
    
  return (
    <>
        <button onClick={handleClick}>fetch quote</button>
        <div style={{ margin: 10 }}>"{quote}"</div>
        <div style={{ margin: 10 }}>- {speaker}</div>
    </>
  )
}
