import React from "react";
import Card from "./components/Card";

function APP(){
    return <div>
        <h1 className="heading"> Todo App</h1>
        <Card  heading1 = {<a href="#"> this is button </a>}/>
        <Card heading1="work two"  description= "i have to do this very fastly8" />
        <Card heading1="work three"  description= "i have to do this very fastest5" />
        <Card heading1="work Four"  description= "i have to do this very fastong2" />
    </div>
}

export default APP;