// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
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
import Inspiration from "./components/inspiration";

function App() {
  return (
    <div className="App">
      {/*<Header className="container-fluid"/>*/}
        <HeroSection className="container-fluid"/>
        <WelcomeDPS className="container-fluid"/>
        <WhyDPS className="container-fluid"/>
        <YamunaNagarSection className="container-fluid"/>
        <Inspiration className="container-fluid"/>
        <SchoolHighlight className="container-fluid"/>
        <RohitSharma className="container-fluid"/>
        <BeyondClassroom className="container-fluid"/>
        <NewsEvent className="container-fluid"/>
        <ParentSays className="container-fluid"/>
        <ContactDetails className="container-fluid"/>
      {/* Add other sections as needed */}
    </div>
  );
}

export default App;
