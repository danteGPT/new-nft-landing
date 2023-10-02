/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./css/App.scss";

import Header from "./components/Header";
import Main from "./components/Main";

import Web3 from "web3";
import axios from "axios";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Main />
      </div>
    </>
  );
}

export default App;
