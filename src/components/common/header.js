import React from "react";
import { MainHeader } from "../../ui-components";
import { Link, useMatch, useNavigate } from "react-router-dom";


// Inside your component

// To navigate
const HeaderComponent = () => {
  const navigate = useNavigate();
    const matchHome = useMatch("/");
    const matchAbout = useMatch("/about");
    const matchContact = useMatch("/contact");
    const matchRoomSuites = useMatch("/roomssuites");
    const matchSupport = useMatch("/support");

    
  const mainHeaderOverride = {
    title: "My App",
    logo: "/path/to/my/logo.png",
    ActiveLine:{
      display: "none",
    },
    HotelLogo: {
      src: "/assets/Hotels_Logo.jpg",
      alt: "Hotels",
    },
    ProfileImage: {
      src: "/assets/profile.jpg",
      alt: "Profile",
      onClick: () => {
        console.log("Profile clicked");
        navigate('/admin');

      },
    },
    Navs: {
      style: {
        cursor: "pointer",
      },
    },
    Home: {
      src: "/",
      as: Link,
      to: "/",
      className: matchHome ? 'active' : '',
      onClick: () => {
        console.log("Home clicked");
      },
    },
    Contact: {
      src: "/contact",
      as: Link,
      to: "/contact",
      className: matchContact ? 'active' : '',
      onClick: () => {
        console.log("Contact clicked");
      },
    },
    About: {
      src: "/about",
      as: Link,
      to: "/about",
      className: matchAbout ? 'active' : '',
      onClick: () => {
        console.log("About clicked");
      },
    },
    Room_Suites:{
      src: "/roomssuites",
      as: Link,
      to: "/roomssuites",
      className: matchRoomSuites ? 'active' : '',
      onClick: () => {
        console.log("Room & Suites");
      },
    },
    Support:{
      src: "/support",
      as: Link,
      to: "/support",
      className: matchSupport ? 'active' : '',
      onClick: () => {
        console.log("Support");
      },
    }
  }; // Define the variable userProfileOverride
  return <MainHeader overrides={mainHeaderOverride} />;
};

export default HeaderComponent;
