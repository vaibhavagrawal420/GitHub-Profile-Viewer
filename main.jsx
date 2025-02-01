import React, {useCallback, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
// import './App.css';
import App from './App.jsx'
import { func } from "joi";
import Body from "./Body.jsx";
function Githubprofile(){
    function Header(){
        return(
            <>
            <div id="heading">
                <h1>Github Profile Viewer</h1>
            </div>
            </>
        )
    }
    return(
        <>
        <Header></Header>
        <Body></Body>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Githubprofile/>)