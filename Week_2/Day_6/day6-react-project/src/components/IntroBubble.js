import React from 'react'
import './IntroBubble.css'

export default function IntroBubble(props) {
  return (
    <div className='intro-bubble text-center m-4 py-3'>
        <h1>{props.name}'s Introduction</h1>
        <h4>Name: {props.name}</h4>
        <h4>Age: {props.age}</h4>
        <h4>School: {props.school}</h4>
        <h4>Major: {props.major}</h4>
    </div>
  )
}
