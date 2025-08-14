
import { Routes, Route, useLocation } from "react-router";

import Menu from "./components/Menu/Menu";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Project2 from "./pages/Project2/Project2";


import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

    function ScrollToTop() {
        const {pathname} = useLocation();

        useEffect(() =>{
            setTimeout(() => {
                window.scrollTo(0,0);
            },1400);
        },[pathname]);

        return null;
    }

    function App () {
        const location = useLocation();

        return(
            <>
            <ScrollToTop />
            <Menu />
            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/work" element={<Work />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/RejuvMD" element={<Project />} />
                    <Route path="/KLVEstudio" element={<Project2 />} />
                </Routes>
               
            </AnimatePresence>
            
            </> 
        )
    }

    export default App;