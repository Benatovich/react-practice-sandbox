import { useState } from 'react'

export default function DiceBag() {
    const [value, setValue] = useState(1); // total value of dice rolled
    const [sides, setSides] = useState(6); // what kind of dice are being rolled
    const [multiplier, setMultiplier] = useState(1); // number of dice rolled simultaneously
    // work on 3: roll multiple dice and add up the values

    console.log('value', value);
  return (
    <div>
        <h3>Dice Selector:</h3>

        <button style={{ margin: 5 }} onClick={() => setSides(2)}>coin</button>
        <button style={{ margin: 5 }} onClick={() => setSides(4)}>D4</button>
        <button style={{ margin: 5 }} onClick={() => setSides(6)}>D6</button>
        <button style={{ margin: 5 }} onClick={() => setSides(8)}>D8</button>
        <button style={{ margin: 5 }} onClick={() => setSides(10)}>D10</button>
        <button style={{ margin: 5 }} onClick={() => setSides(12)}>D12</button>
        <button style={{ margin: 5 }} onClick={() => setSides(20)}>D20</button>
        <button style={{ margin: 5 }} onClick={() => setSides(100)}>D100</button>

        <hr />

        <button style={{ margin: 5 }} onClick={() => setMultiplier(multiplier - 1)}>Reduce dice</button>
        <span style={{ margin: 10 }}>Number of dice: {multiplier}</span>
        <button style={{ margin: 5 }} onClick={() => setMultiplier(multiplier + 1)}>Add dice</button>

        <hr />
        
        <button onClick={() => setValue(multiplier*Math.ceil(sides*(Math.random())))}>Roll {multiplier}D{sides}</button>
        <span style={{ margin: 10 }}>{value}</span>
    </div>
  )
}
