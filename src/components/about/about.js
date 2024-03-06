import React, { useEffect, useState } from "react";
import "./about.css";
import { Background, SectionTitle } from "../../ui-components";
import SearchComponent from "../common/searchComponent";
import BarComponent from "../common/bar";

const AboutComponent = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
    const script = document.createElement('script');

    script.src = 'https://dtn7rvxwwlhud.cloudfront.net/amazon-connect-chat-interface-client.js';
    script.async = true;
    script.id = 'fea31660-3e9c-443e-a053-900b13a0db78';

    document.head.appendChild(script);

    window.amazon_connect = window.amazon_connect || function() {
      (window.amazon_connect.ac = window.amazon_connect.ac || []).push(arguments);
    };

    window.amazon_connect('styles', { iconType: 'CHAT', openChat: { color: '#ffffff', backgroundColor: '#123456' }, closeChat: { color: '#ffffff', backgroundColor: '#123456'} });
    window.amazon_connect('snippetId', 'QVFJREFIakZhMVo2ZGZmSXpGSnpJS2lYakthYVBxMmJIU0ZPbnhET3AyalJDV1F3UWdFWkJXMklROFJBTExSRmxhRkRsQy8xQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNc1VHdmo5NGQ4R2JScXFoNUFnRVFnQ3RyUTVhSGhid2FnUjhiM2ExMHJGam4venFsR3dsV0s3Q0JtZGRSSDVnY1pHc0FLT2p3WVJndkNjYWI6Okt2NjBjQkx2RldOWUI2TkF6Rlo2amN5MlNjOG9BRjRZQUdXVGNmU0psbkNCQnhraW1jbVBLQzB1amtvRVFVNVd2NWJ6TkVEQi9McU1ENENTTXliVHZtSk9EYVFMekNEZkpPRkt6NDBOWGZ4QXc5Ulg0bVRlY1MrT0dpMnFQNmRSSVJmU1kwV2JidEd6L2dHb3NvbHhMdmMrQnZiRFlXUT0=');
    window.amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);

    return () => {
      document.head.removeChild(script);
    }

  }

// eslint-disable-next-line no-lone-blocks, no-unreachable
{
  /* <script type="text/javascript">
  (function(w, d, x, id){
    s=d.createElement('script');
    s.src='https://dtn7rvxwwlhud.cloudfront.net/amazon-connect-chat-interface-client.js';
    s.async=1;
    s.id=id;
    d.getElementsByTagName('head')[0].appendChild(s);
    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
  })(window, document, 'amazon_connect', 'fea31660-3e9c-443e-a053-900b13a0db78');
  amazon_connect('styles', { iconType: 'CHAT', openChat: { color: '#ffffff', backgroundColor: '#123456' }, closeChat: { color: '#ffffff', backgroundColor: '#123456'} });
  amazon_connect('snippetId', 'QVFJREFIakZhMVo2ZGZmSXpGSnpJS2lYakthYVBxMmJIU0ZPbnhET3AyalJDV1F3UWdFWkJXMklROFJBTExSRmxhRkRsQy8xQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNc1VHdmo5NGQ4R2JScXFoNUFnRVFnQ3RyUTVhSGhid2FnUjhiM2ExMHJGam4venFsR3dsV0s3Q0JtZGRSSDVnY1pHc0FLT2p3WVJndkNjYWI6Okt2NjBjQkx2RldOWUI2TkF6Rlo2amN5MlNjOG9BRjRZQUdXVGNmU0psbkNCQnhraW1jbVBLQzB1amtvRVFVNVd2NWJ6TkVEQi9McU1ENENTTXliVHZtSk9EYVFMekNEZkpPRkt6NDBOWGZ4QXc5Ulg0bVRlY1MrT0dpMnFQNmRSSVJmU1kwV2JidEd6L2dHb3NvbHhMdmMrQnZiRFlXUT0=');
  amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
</script> */
}
  }, [buttonClicked]);

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
        <h1 className="aboutTitle">About</h1>
        <button  onClick={() => setButtonClicked(true)} type="button" className="bbtn">Load Chat</button>
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

export default AboutComponent;
