import React from "react";
import Sidebar from "./sections/Sidebar";
import Header from "./sections/Header";
import Welcome from "./sections/Welcome";
import LineChart from "./components/Dashboard/LineChart";
import Overview from "./sections/Overview";
import BarChart from "./components/Dashboard/BarChart";
import CardExp from "./components/Cards/CardExp";
import PaymentHis from "./components/Cards/PayHistory.js";

function App() {
  return (
    <>
      <div style={style.main_container_div}>
        <div style={style.inner_main_container_sidebar}>
          <Sidebar />
        </div>

        <div className="container">
          <Header />
          <Welcome />
          <Overview />
          <div style={style.flex__wrap} className="class_flex_justify">
        
              <LineChart />
     
              <CardExp />
           
          </div>
          <div style={style.flex__wrap} className="class_flex_justify">
            <PaymentHis />

            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  main_container_div: {
    display: "flex",
    background: "#F6F9FC",
    height: "100vh",
    overflow: "hidden",
  },

  inner_main_content: {
    height: "100%",
  },

  flex__wrap: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    marginBottom: "10px",
    // alignItems: "stretch",
  },
};

export default App;
