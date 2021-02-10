import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";



import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { theme } from "../theme.js";
import { MainPage } from './pages/MainPage/MainPage.jsx';
import { EmailsPage } from './pages/EmailsPage/EmailsPage.jsx';



export const App = () => {




    return (
        <Router history={window.history}>
            <ThemeProvider theme={theme}>
                <Route path="/emails"><EmailsPage /></Route>
                <Route exact path="/" ><MainPage /></Route>
            </ThemeProvider>
        </Router>

    )
}

const container = document.getElementById("container");
ReactDOM.render(<App />, container);