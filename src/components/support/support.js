/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useContext, useState, useEffect } from "react";
import "./support.css";
import { Background } from "../../ui-components";
import { questionsContext } from "../../App";
import LoadingIndicator from "../common/loading";

const SupportComponent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const bgOverride = {
    Background1422588: {
      src: "/assets/background.jpg",
      alt: "Background",
    },
  };

  // const url = "https://c3m55nvptzvatggbpchneehi3y0yzedt.lambda-url.us-west-2.on.aws/";
  const [frmstate, setFormState] = useState("");
  // const [setLoader, setLoaderState] = useState(false);

  const { questions, postQuery, setLoader } = useContext(questionsContext);
  // const { questions, postQuery, setLoader, setQuestions } = useContext(questionsContext)

  // const [questions, setQuestions] = useState([]);

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


  const toDataURL = async (url) => {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
  };

  const download = async (e, path) => {
    e.preventDefault();
    // debugger;
    // path = path + "?test=123";
    const a = document.createElement("a");
    a.href = await toDataURL(path);
    a.crossorigin = "anonymous";
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="dashboard">
      <div className="bgImage">
        {/* <h1 className="aboutTitle">Support</h1> */}
        <Background overrides={bgOverride} />

        <div className="chatbot bigchatbot">
          <div className="boatHeaderTitle">
            <div className="headerBox">
              <img src="./assets/boatIconWhite.png" alt="" />
              <div>
                <span>Assistant</span>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="botWrapper">
            <div className="chatbot-container">
              <div className="chatbot-title">
                <span>
                  Hi I'm, your personal assistant. How may I help you?
                  <span className="time">12:31 PM</span>
                </span>
              </div>

              {setLoader && <LoadingIndicator />}
              <div className="chatbot-body">
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
                        <div className="chat-msg">
                          <div className="actionIcons">
                            <a  href="#" onClick={(e) => {e.preventDefault(); }} >
                              <img src="./assets/edit.png" alt="Edit" />
                            </a>
                            <span className="saperator"></span>
                            <a  href="#" onClick={(e) => {e.preventDefault(); }}>
                              <img
                                src="./assets/copy.png"
                                onClick={(e) =>
                                  copyElementText(
                                    e,
                                    item?.responseData?.["text data"]
                                  )
                                }
                                alt="Copy"
                              />
                            </a>
                            {showMessage && <p className="copiedMsg">Content Copied to Clipboard!</p>}
                          </div>
                          {item?.responseData?.["text data"]}

                          <div className="chatimage">
                            <a  href="#" onClick={(e) => {e.preventDefault(); }}>
                              <img
                                src="./assets/download.png"
                                onClick={(e) =>
                                  download(
                                    e,
                                    item?.responseData?.["images_content_list"]
                                  )
                                }
                                alt="Download"
                              />
                            </a>

                            <img
                              src={item?.responseData?.["images_content_list"]}
                              alt=""
                            />
                          </div>
                          <div className="time">12:05 PM</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="chatbot-footer">
                <form onSubmit={submitQuery}>
                  <input
                    className="inputtxt"
                    name="txtquery"
                    type="text"
                    placeholder="Type your query..."
                    onChange={(e) => setFormState(e.target.value)}
                  />
                  <div className="spacer"></div>
                  <button
                    className="btnsubmit"
                    type="submit"
                    disabled={!frmstate.trim().length}
                  ></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportComponent;
