//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

//Variables
const name = "Tara Larsen"
const year = new Date();

//render the code
ReactDom.render(
<div>
  <p>Created by {name}.</p>

  <p>Copyright {year.getFullYear()} </p>
   </div>,
   document.getElementById("root")
);