
import { Routes, Route, useLocation } from "react-router";

import Menu from "./components/Menu/Menu";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";

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
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/work" element={<Work />}></Route>
                    <Route path="/RejuvMD" element={<Project />} />
                </Routes>
            </AnimatePresence>
            </> 
        )
    }

    export default App;