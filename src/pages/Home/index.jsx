// libs
import React, { useState } from "react";
// components
import MessageContainer from "../../components/MessageContainer";
import SetDisplayName from "../../components/SetDisplayName";
import MessageInput from "../../components/MessageInput";
import DisplaynameModal from "../../components/DisplayNameModal";
// others
import "./styles.scss";

const Home = () => {
  const [messageList, setMessageList] = useState([]);
  const [displayName, setDisplayName] = useState("");

  return (
    <div className="home-wrapper">
      <MessageContainer {...{ displayName, messageList }} />
      <SetDisplayName displayName={displayName} />
      <MessageInput {...{ messageList, setMessageList }} />
      <DisplaynameModal {...{ setDisplayName }} />
    </div>
  );
};

export default Home;
