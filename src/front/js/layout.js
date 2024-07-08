import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";



import { Home } from "./pages/home";
import { Profile } from "./pages/Profile";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import { CardSet, Shop } from "./pages/CardSet";
import { Space } from "./pages/space";
import { Character } from "./pages/character";
import { Ground } from "./pages/ground";
import { Battle } from "./pages/battle";
import { Mission } from "./pages/mission"

import { Signup } from "./pages/signup";
import { SignIn } from "./pages/signin";

import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Profile />} path="/Profile" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<CardSet />} path="/CardSet" />
                        <Route element={<Space />} path="/space" />
                        <Route element={<Character />} path="/character" />
                        <Route element={<Ground />} path="/ground" />
                        <Route element={<Battle />} path="/battle" />
                        <Route element={<Mission />} path="/mission"/>
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<SignIn />} path="/signin" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);