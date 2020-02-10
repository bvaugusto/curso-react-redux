import "./App.css";
import React from "react";

import Logo from "../components/template/logo/Logo";
import Nav from "../components/template/nav/Nav";
import Home from "../components/home/Home";
import Footer from "../components/template/footer/Footer";

export default props =>
    <>
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </>