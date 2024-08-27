// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection';
import WhyDPS from './components/whyDPS';
import BeyondClassroom from './components/beyondClassroom';
import './App.css';
import ContactDetails from "./components/contactDetails";
import ParentSays from "./components/parentSays";
import NewsEvent from "./components/newsEvent";
import RohitSharma from "./components/rohitSharma";
import SchoolHighlight  from "./components/schoolHighlight";
import YamunaNagarSection from "./components/yamunaNagarSection";
import WelcomeDPS from "./components/welcomeDPS";
import DpsCardPage from "./components/DpsCardPage";
import HighlightSecssion from './components/HighlightSecssion';

function App() {
  return (
    <div className="App">
        <HeroSection className="container-fluid"/>
         <WelcomeDPS className="container-fluid"/>
        <WhyDPS className="container-fluid"/>
        <YamunaNagarSection className="container-fluid"/>
        <DpsCardPage className="container-fluid"/>
       <SchoolHighlight className="container-fluid"/>
       <HighlightSecssion className="container-fluid"/>
        <RohitSharma className="container-fluid"/>
        <BeyondClassroom className="container-fluid"/>
        <NewsEvent className="container-fluid"/>
        <ParentSays className="container-fluid"/>
        <ContactDetails className="container-fluid"/>
    </div>
  );
}

export default App;
