import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Title } from "@mui/icons-material";
import CardItem from "./Components/CardItem";
import data from "./Components/Data";
import Sample from "./Components/Sample";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/pages/Contact";
import Outdoorsigns from "./Components/pages/Outdoorsigns";
import IndoorMain from "./Components/Indoor/IndoorMain";
import ChannelMain from "./Components/Channel/ChannelMain";
import SignMain from "./Components/SignBox/SignMain";
import DecalsMain from "./Components/Decals/DecalsMain";
import SignRepairMain from "./Components/SignRepair/SignRepairMain";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/outdoor" element={<Outdoorsigns />} />
        <Route path="/decals" element={<DecalsMain />} />
        <Route path="/channel" element={<ChannelMain />} />
        <Route path="/indoor" element={<IndoorMain />} />
        <Route path="/signbox" element={<SignMain />} />
        <Route path="/repair" element={<SignRepairMain />} />
      </Routes>

      {/* <Sample /> */}
      {/* <Main /> */}

      <Footer />
    </div>
  );
};

export default App;
