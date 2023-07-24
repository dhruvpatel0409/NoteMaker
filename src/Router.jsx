import React from 'react';
import About from './About';
import Contact from './Contact';
import {Route,Routes,NavLink} from 'react-router-dom';
const Router=()=>{
    const Name=()=>{
        return <h1>This is My Name Page.</h1>
    }
    return(<>
        <NavLink to='/'>About Page</NavLink>
        <NavLink to='/contact'>Contact Page</NavLink>
        <NavLink to='/contact/name'>Name Page</NavLink>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/contact/name' element={<Name/>}/>
        </Routes>

        {/* <About/>
        <Contact/> */}
    </>);
}
export default Router;