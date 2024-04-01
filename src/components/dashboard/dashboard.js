/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import "./dashboard.css";
import { Background, Bar2Collection, SectionTitle } from "../../ui-components";
import SearchComponent from "../common/searchComponent";
import { questionsContext } from "../../App";
import LoadingIndicator from "../common/loading";
import { Link } from "react-router-dom";

const DashboardComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  const childCollectionOverrides = {
    searchBtnBox: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        console.log("Button clicked");
      },
    },
    closeBar: {
      display: "none",
    },
  };

  const bgOverride = {
    Background1422588: {
      src: "/assets/background.jpg",
      alt: "Background",
    },
  };

  const [showBot, setShowBot] = useState(false);
  const { questions, postQuery, setLoader } = useContext(questionsContext);
  // const { questions, postQuery, setLoader, setQuestions } = useContext(questionsContext)

  const showChatBot = async () => {
    setShowBot(!showBot);
  };

  const [frmstate, setFormState] = useState("");

  const submitQuery = async (event) => {
    event.preventDefault();

    if (frmstate.trim().length < 1) {
      alert("Please enter prompt!");
      return;
    } else {
      const postData = {
        user_input: frmstate, // frmdata.target.txtquery.value,
      };
      await postQuery(postData, frmstate);
    }
  };

  const toDataURL = async (url) => {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
  };

  const download = async (e, path) => {
    e.preventDefault();
    // debugger;
    // path = path + "?test=123";
    // path = "data:image/png;base64," + path;
    const a = document.createElement("a");
    a.href = await toDataURL(path);
    a.crossorigin = "anonymous";
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyElementText = async (event, messagetoCopy) => {
    event.preventDefault();
    navigator.clipboard.writeText(messagetoCopy);
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }
  , [showMessage]);

  return (
    <div className="dashboard">
      <div className="bgImage">
        <Background overrides={bgOverride} />
        {showBot && (
          <div className="miniChatBox">
            <div className="chatBox">
              <div className="chatBoxHeader">
                <div className="chatBoxTitle">
                  <div className="icon">
                    <img src="assets/chatbot-icon 1.png" alt="logo" />
                  </div>
                  <div className="label">
                    <h1>Assistant</h1>
                    <h2>Online</h2>
                  </div>
                </div>
                <div className="chatBoxActions">
                  <Link className="btnicon btnexpand" to="/support" />
                  <button
                    className="btnicon btncollapse"
                    onClick={showChatBot}
                  ></button>
                </div>
              </div>
              {setLoader && <LoadingIndicator />}

              <div className="chatBoxBody">
                <div className="chatBoxBodyMessage">
                  <h1>Hi I'm, your personal assistant. How may I help you?</h1>
                  <div className="time">12:02 PM</div>
                </div>

                {questions?.map((item, index) => (
                  <div className="chatrows" key={index}>
                    <div className="chatRowto">
                      <div className="chat-msg">
                        {item.user_input ? item.user_input : frmstate}
                        <div className="time">12:02 PM</div>
                      </div>
                    </div>

                    {item?.responseData && (
                      <div className="chatRowfrom">
                        <div className="responseTitle">
                          Here is response for: "
                          {item.user_input ? item.user_input : frmstate}"
                        </div>
                        <div className="chat-msg">
                          {item?.responseData?.["text data"]}
                          <div className="actionIcons">
                            <a href="#" onClick={(e) => {e.preventDefault(); }}>
                              <img src="assets/edit.png" alt="Edit" />
                            </a>
                            <span className="saperator"></span>
                            <a href="#" onClick={(e) => {e.preventDefault(); }}>
                              <img
                                src="assets/copy.png"
                                alt="Copy"
                                onClick={(e) =>
                                  copyElementText(
                                    e,
                                    item?.responseData?.["text data"]
                                  )
                                }
                              />
                            </a>
                            {showMessage && <p className="copiedMsg">Content Copied to Clipboard!</p>}

                          </div>

                          <div className="chatImageBox">

                            {item?.responseData?.["images_content_list"]?.map((item,index)=>(

                              <div className="chatimage" key={index}>
                                  <a href="#" onClick={(e) => {e.preventDefault(); }}>
                                    <img
                                      src="./assets/download.png"
                                      onClick={(e) => download( e, item ) }
                                      alt="Download"
                                    />
                                  </a>
                                <img src={item} alt="" />
                              </div>
                            ))}
                          </div>
                          <div className="time">12:05 PM</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="chatBoxFooter">
                <div className="chatBoxInput">
                  <input
                    type="text"
                    placeholder="Type a message"
                    onChange={(e) => setFormState(e.target.value)}
                  />
                  <div className="spacer"></div>
                  <button type="submit" onClick={submitQuery}></button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="chatIconBox">
          <div className="hoverlabel">Come chat with us!</div>
          <button className="btnchat" onClick={showChatBot}></button>
        </div>
      </div>
      <SearchComponent />
      <div className="pageTitle">
        <SectionTitle title="Hotels" />
      </div>
      <div className="bars">
        <Bar2Collection
          isPaginated={false}
          overrideItems={({ item, index }) => ({
            overrides: childCollectionOverrides,
          })}
        />
      </div>
    </div>
  );
};

export default DashboardComponent;
