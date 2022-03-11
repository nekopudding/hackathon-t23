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
    const [dialog,setDialog] = useState(false);
    function openDialog() {
        console.log("opening dialog");
        setDialog(true);
    }
    return (
        <div>
            <Header openDialog={openDialog}/>
                <Routes>
                    <Route exact path='/login' element={<Form isLogin={true}/>}></Route>
                    <Route exact path='/register' element={<Form isLogin={false}/>}></Route>
                    <Route exact path='/' element={<Main dialog={dialog} setDialog={setDialog}/>}></Route>
                </Routes>
                
            <Footer />
        </div>
    )
}