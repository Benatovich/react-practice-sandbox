import React from 'react'

export default function Input() {
    let [text, ]
    const handleSubmit = () => {

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Input: 
                <input type='text' />
            </label>
            <button type='submit' value='Submit'>Submit</button>
        </form>
        <div>

        </div>
    </>
  )
}
