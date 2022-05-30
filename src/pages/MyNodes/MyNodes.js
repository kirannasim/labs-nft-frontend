import React from "react";
import Topbar from "../../components/Topbar";
import Banner from "../../components/MyNodes/Banner";
import NodeCards from "../../components/MyNodes/NodeCards";
import GameCard from "../../components/MyNodes/GameCard";
import TransactionHistory from "../../components/MyNodes/TransactionHistory";
import Footer from "../../components/Footer";
import "../../assets/scss/mynodes/mynodes.scss";

const MyNodes = () => {
  return (
    <div className="full-container">
      <Topbar loginStatus={true} />
      <Banner />
      <NodeCards />
      <GameCard />
      <TransactionHistory />
      <Footer />
    </div>
  );
};

export default MyNodes;
