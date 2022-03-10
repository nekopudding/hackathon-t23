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
    const [token, setToken] = useState();

    return (
        <div>
            <Header />
            {/* {!token && 
                <Routes>
                    <Route exact path='/register' element={<Form isLogin={false}/>}></Route>
                    <Route path='*' element={<Form isLogin={true} setToken={setToken}/>}></Route>
                </Routes>
            }
            {token && */}
                <Routes>
                    <Route exact path='/login' element={<Form isLogin={true}/>}></Route>
                    <Route exact path='/register' element={<Form isLogin={false}/>}></Route>
                    <Route exact path='/' element={<Main />}></Route>
                </Routes>
            {/* } */}
            <Footer />
        </div>
    )
}