import React from 'react'
import D6 from '../../components/Dice/D6';
import DiceBag from '../../components/Dice/diceBag';

export default function Dice() {
  return (
    <>
      <div>
        <h1>D&D Dice Roller</h1>
        <ol>
          <li>randomly rolls a die and returns the value</li>
          <li>and lets you select a dice to roll</li>
          <li>and lets you add additional D&D dice and returns each value and the total value</li>
          <li>and logs the last 10 die/dice and each value and total value</li>
        </ol>
      </div>
      {/* <D6 /> */}
      <DiceBag />
    </>  
  )
}
