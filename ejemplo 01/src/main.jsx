import React from 'react';
import ReactDOM from 'react-dom';


const appDomElement = document.getElementById("app")

const root = ReactDOM.createRoot(appDomElement)



const button = React.createElement("button",{"data-id":123}, "button 1")
const button2 = React.createElement("button",{"data-id":456}, "button 2")
const button3 = React.createElement("button",{"data-id":789}, "button 3")

const div = React.createElement("div",null, [button,button2,button3])

root.render(div)