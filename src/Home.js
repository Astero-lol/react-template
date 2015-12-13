import React from "react";
import HomeApp from "./blocks/home/App";

var el = document.getElementsByClassName("home__wrapper");

if (el.length == 1)
    React.render(<HomeApp />, el[0]);
