import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { AuthProvider } from './Context/auth'

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
)
