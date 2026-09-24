import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank_baby'
    },
    children: 'click me to visit google'
}

function MyCustomReact(){  //pascal case
return(
  <div>
      <h1>    Custom React App from scratch
</h1>
  </div>
)
}

const AnotherElement = (
  <a href="http://google.com" target='_blank_baby'>
    visit google
  </a>
)

const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank_baby"},
  'click to visit gooooogle'
)


createRoot(document.getElementById('root')).render(
 
  areactElement

)
