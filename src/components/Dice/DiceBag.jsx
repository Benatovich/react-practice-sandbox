import { useState } from 'react'

export default function DiceBag() {
    const [value, setValue] = useState(1); // result of individual die roll
    const [total, setTotal] = useState(1); // total value of dice rolled
    const [sides, setSides] = useState(6); // what kind of dice are being rolled
    const [current, setCurrent] = useState([]); // array of currently selected dice to be rolled
    // work on 3: roll multiple dice and add up the values

    function handleAddDie() {
        setCurrent([...current, `D${sides}`])
    }
    console.log('current', current);

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

        <button style={{ margin: 5 }} onClick={handleAddDie}>Add D{sides}</button>
        <button style={{ margin: 5 }} onClick={() => setCurrent([])}>Clear Selected Dice</button>
        {/* <span style={{ margin: 10 }}>Number of dice: {multiplier}</span>
        <button style={{ margin: 5 }} onClick={() => setMultiplier(multiplier + 1)}>Add dice</button> */}

        <hr />
        <span style={{ margin: 5 }}>Selected dice: {current}</span>
        <button onClick={() => setValue(Math.ceil(sides*(Math.random())))}>Roll Selected Dice</button>
        <span style={{ margin: 10 }}>{value}</span>
    </div>
  )
}
