import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css"

const Button = ({text}) =>{
  return (
  <button>
    {text}
  </button>)

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <article style={{display: 'flex',color:'#fff'}}>
      <header>
        <img src="https://unavatar.io/midudev" alt="avatar midudev" />
        <div>
          <strong>Miguel Angel Durán</strong>
          <span>@midudev</span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  </React.Fragment>
)
