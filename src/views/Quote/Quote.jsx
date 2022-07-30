import React from 'react'

export default function Quote() {
  return (
    <>
      <div>
        <h1>Quote</h1>
        <ol>
          <li>displays an inspirational quote</li>
          <li>that is randomly fetched from an API when you press a button</li>
          <li>and rotates through the font on some timer</li>
          <li>and has the quote read back to you using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Speech_synthesis">this API</a></li>
        </ol>
      </div>
    </>  
  )
}
