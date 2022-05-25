// libs
import React, { useState } from "react";
// components
import MessageContainer from "../../components/MessageContainer";
import SetDisplayName from "../../components/SetDisplayName";
import MessageInput from "../../components/MessageInput";
// others
import "./styles.scss";

const Home = () => {
	const [messageList, setMessageList] = useState([]);

	return (
		<div className="home-wrapper">
			<MessageContainer messageList={messageList} />
			<SetDisplayName />
			<MessageInput {...{ messageList, setMessageList }} />
		</div>
	);
};

export default Home;
