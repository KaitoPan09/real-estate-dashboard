// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx';
import Dashboard from './dashboard/index.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Dashboard />
      </ThemeProvider>
    {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
