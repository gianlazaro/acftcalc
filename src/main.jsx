import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Calculator from "./components/Calculator";

const GlobalStyle = createGlobalStyle`
#root {
  // COLORS
  --primary-color: #5F2FEA;
  --secondary-color: #B0ACE0;
  --text-color: #E9E9E9;
  
  margin: 0 auto;
  padding: 20px;
  
}

* {
  box-sizing: border-box;
  
}
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: sans-serif;
}

body {
  background: #191919;
}

a {
  color: var(--secondary-color)
}

input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background-color: transparent;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #222;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 32px;
  width: 64px;
  border-radius: 14px;
  background: var(--primary-color);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -12.6px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #222;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #222;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: var(--primary-color);
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #222;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #222;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: var(--primary-color);
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #222;
}
input[type=range]:focus::-ms-fill-upper {
  background: #222;
}

input[type="radio"] {
    appearance: none;
    display: none;
}

input[type="radio"]:checked + label {
  transition: all 0.2s ease-in;
  background-color: var(--primary-color);
}

`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Calculator />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
