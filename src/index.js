import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
// import { BrowserRouter } from "react-router-dom"
import { Router } from "react-router-dom"
import "./i18n"
import { Provider } from "react-redux"

import store from "./store/index"
import history from "../src/history"
// import cors from 'cors'
// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:5000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

const app = (
  <Provider store={store}>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
