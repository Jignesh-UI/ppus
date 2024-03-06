import "./App.css";
import { createContext, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import AboutComponent from "./components/about/about";
import DashboardComponent from "./components/dashboard/dashboard";
import ContactComponent from "./components/contact/contact";
import RoomSuitesComponent from "./components/rooms/rooms";
import SupportComponent from "./components/support/support";
import CurrentOffersComponent from "./components/admin/CurrentOffers/CurrentOffers";
import AdministratorComponent from "./components/admin/admin";

export const questionsContext = createContext(null);
function App() {
  const url = "https://c3m55nvptzvatggbpchneehi3y0yzedt.lambda-url.us-west-2.on.aws/";
  const [questions, setQuestions] = useState([]);
  const [setLoader, setLoaderState] = useState(false);

  const postQuery = async (postdata, frmstate) => {
    try {
      setQuestions([
        ...questions,
        {
          user_input: frmstate,
        },
      ]);
      setLoaderState(true);

      const response = await axios.post(url, postdata);

      setQuestions([
        ...questions,
        {
          user_input: frmstate,
          responseData: response.data,
        },
      ]);

      setLoaderState(false);
    } catch (error) {
      console.log(error);
      setLoaderState(false);
    }
  };


  return (
    <questionsContext.Provider
      value={{ questions, postQuery, setLoader, setQuestions }}
    >
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/roomssuites" element={<RoomSuitesComponent />} />
        <Route path="/support" element={<SupportComponent />} />
        <Route path="/admin" element={<AdministratorComponent />} />
        <Route path="/currentOffers" element={<CurrentOffersComponent />} />
      </Routes>
    </questionsContext.Provider>
  );
}

export default App;
