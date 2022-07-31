import { useState } from 'react'

export default function DiceBag() {
    const [value, setValue] = useState(1);
    const [sides, setSides] = useState(6);

    console.log('value', value);
  return (
    <div>
        <h3>Dice Selector:</h3>
        <button onClick={() => setSides(2)}>coin</button>
        <button onClick={() => setSides(4)}>D4</button>
        <button onClick={() => setSides(6)}>D6</button>
        <button onClick={() => setSides(8)}>D8</button>
        <button onClick={() => setSides(10)}>D10</button>
        <button onClick={() => setSides(12)}>D12</button>
        <button onClick={() => setSides(20)}>D20</button>
        <button onClick={() => setSides(100)}>D100</button>
        <hr />
        <button onClick={() => setValue(Math.ceil(sides*(Math.random())))}>Roll D{sides}</button>
        <span>{value}</span>
    </div>
  )
}
