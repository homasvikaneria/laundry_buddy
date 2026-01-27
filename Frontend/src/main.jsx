// // Frontend/src/main.jsx
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import { OrderProvider } from './Component/User/SubmitOrder/OrderContext'
// import App from './App'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <OrderProvider>
//       <App />
//     </OrderProvider>
//   </BrowserRouter>
// )

// Frontend/src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import { OrderProvider } from './Component/User/SubmitOrder/OrderContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* <--- THIS IS THE FIRST ROUTER */}
    <OrderProvider>
       <App /> {/* App.jsx contained the SECOND Router, causing the crash */}
    </OrderProvider>
  </BrowserRouter>,
)