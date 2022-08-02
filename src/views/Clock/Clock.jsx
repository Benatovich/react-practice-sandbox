import React from 'react'
import Clock from '../../components/Clock/Clock'

export default function ClockPage() {
  return (
    <>
      <div>
        <h1>Clock</h1>
        <ol>
          <li>displays a realtime clock</li>
          <li>and lets you select a timezone</li>
          <li>and displays a second timezone on the other half of the world (12 hours time difference)</li>
          <li>and displays the name of a country in each of the timezones</li>
        </ol>
      </div>
      <Clock />
    </>  
  )
}
