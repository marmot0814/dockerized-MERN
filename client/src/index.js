import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import GlobalProvider from './contexts/global';

import RouteView from './RouteView'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <RouteView />
      </BrowserRouter>
    </GlobalProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
