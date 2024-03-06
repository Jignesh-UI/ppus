import React from "react";
import { Background, SectionTitle } from "../../ui-components";
import SearchComponent from "../common/searchComponent";
import BarComponent from "../common/bar";

const ContactComponent = () => {

  const cardJson = [
    {
      image: "/assets/card1.jpg",
      title: "Our Top Destinations",
      description:
        "Discover our top destinations, where each locale is a chapter in an unforgettable travel story. From iconic landmarks to hidden gems, let your journey with us redefine the art of exploration.",
      btnText: "Discover More",
    },
    {
      image: "/assets/card2.jpg",
      title: "DINE IN STYLE",
      description:
        "Immerse yourself in a dining experience where culinary meets artistic refined ambiance. Every meal becomes a symphony flavors, creating memories that linger long after the last bite.",
      btnText: "Discover More",
    },
    {
      image: "/assets/card3.jpg",
      title: "our wedding venues",
      description:
        "Celebrate your love in our enchanting wedding venues. With timeless elegance, our spaces set the stage for unforgettable celebrations, where dreams become cherished!",
      btnText: "Discover More",
    },
  ];

  const bgOverride = {
    Background1422588: {
      src: "/assets/background.jpg",
      alt: "Background",
    },
  };


  return (
    <div className="dashboard">
      <div className="bgImage">
        <h1 className="aboutTitle">Contact</h1>
        <Background overrides={bgOverride} />
      </div>
      <SearchComponent />
      <div className="pageTitle">
        <SectionTitle title="Hotels" />
      </div>
      <div className="bars">
        {cardJson.map((card, index) => {
          return <BarComponent key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default ContactComponent;
