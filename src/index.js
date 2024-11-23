//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App122';
//import reportWebVitals from './reportWebVitals';
//import Dashboard from './Dashboard';
//import Navbar from './Navbar';
//import FeedbackSubmitted from './FeedbackSubmitted';
//import SlotBooked from './SlotBooked';
//import Feedback from './Feedback';
//import SelectionProcess from './SelectionProcess';
//import MyhackathonSelectionProcess from './MyhackathonSelectionProcess';
//import MyplacementSelectionProcess from './MyplacementSelectionProcess';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App/>
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


// This code only wokrs for cards component  
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App2 from './App2';

ReactDOM.render(
  <Router>
    <App2/>
  </Router>,
  document.getElementById('root')
);