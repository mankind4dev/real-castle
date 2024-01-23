import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/create-listing" element={<CreateListing />} />
          <Route exact path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
