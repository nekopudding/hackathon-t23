import React, {useState} from "react"
import Form from "./Form"
import Main from "./Main"
import {
    Routes,
    Route
} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
    const [help,setHelp] = useState(false);
    const [map,setMap] = useState(false);
    function openhelp() {
        setHelp(true);
    }
    function openMap() {
        setMap(true);
    }
    return (
        <div>
            <Header openHelp={openhelp} openMap={openMap} />
                <Routes>
                    <Route exact path='/login' element={<Form isLogin={true}/>}></Route>
                    <Route exact path='/register' element={<Form isLogin={false}/>}></Route>
                    <Route exact path='/' element={<Main help={help} setHelp={setHelp} map={map} setMap={setMap}/>}></Route>
                </Routes>
                
            <Footer />
        </div>
    )
}