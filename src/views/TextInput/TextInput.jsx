import React from 'react'
import Input from '../../components/Text/Input'

export default function TextInput() {
  return (
    <>
      <div>
        <h1>Text Input</h1>
        <ol>
          <li>Allows you to input text on the page</li>
          <li>and randomly  changes the font for each word</li>
          <li>and automatically formats words based on the definition of certain words (eg "bold" is bold, "italic" is italic, "green" is green, etc)</li>
          <li>and allows you to replace a word with an emoji using colon syntax, like slack</li>
        </ol>
      </div>
      <Input />
    </>  
  )
}
