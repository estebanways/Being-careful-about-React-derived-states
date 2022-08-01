import React from 'react'
import { FirstComponent } from './FirstComponent'

export const SecondComponent = () => {
  return (
    <div>
      <h1>My Second Component</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 1</li>
      </ul>
      <p>
        Reusing FirstComponent inside SecondComponent:
      </p>
      <FirstComponent />
    </div>
  )
}

/* 
 * VS code Extension shortcout: rafc
 * Functions without export default must be
 * imported with import { ComponentFunction } 'path';
 */