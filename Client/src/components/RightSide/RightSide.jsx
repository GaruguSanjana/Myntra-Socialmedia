// components/RightSide/RightSide.jsx
import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import MynCoin from "../MyntraCoin/MynCoin";

const RightSide = ({ postShareTrigger }) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <MynCoin postShareTrigger={postShareTrigger} />
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
