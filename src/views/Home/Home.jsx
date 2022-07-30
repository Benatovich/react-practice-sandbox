import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>
        <h1>Projects:</h1>
        <ol>
          <li>
            <Link to='/dice'>
                D&D Dice Roller
            </Link>
          </li>
          
          <li>
            <Link to='/clock'>
                Clock
            </Link>
          </li>
          
          <li>
            <Link to='/quote'>
                Quote
            </Link>
          </li>
          
          <li>
            <Link to='/text-input'>
                Text Input
            </Link>
          </li>
          
          <li>
            <Link to='/color-changer'>
                Color Changer
            </Link>
          </li>
          
          <li>
            <Link to='/grid'>
                Grid
            </Link>
          </li>
          
          <li>
            <Link to='/modal'>
                Modal
            </Link>
          </li>
          
          <li>
            <Link to='/window'>
                Window
            </Link>
          </li>
          
        </ol>
      </div>
    </>    )
}
