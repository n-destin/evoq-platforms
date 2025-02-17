import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import Landing from "./Landing";

function App(props){    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Landing/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;