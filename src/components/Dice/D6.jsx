import { useState } from 'react'
// MVP
// "roll" button
// element displaying value
export default function D6() {
    const [value, setValue] = useState(0);

    console.log('value', value);
  return (
    <div>
        <button onClick={() => setValue(Math.ceil(6*(Math.random())))}>Roll d6</button>
        <span>{value}</span>
    </div>
  )
}
