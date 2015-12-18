import React from "react";
import HomeApp from "./blocks/home/App";

var el = document.getElementsByClassName("page");

if (el.length == 1)
    React.render(<HomeApp />, el[0]);
