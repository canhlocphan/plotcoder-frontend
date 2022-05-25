// libs
import React, { useState } from "react";
// components
import MessageContainer from "../../components/MessageContainer";
import MessageInput from "../../components/MessageInput";
// others
import "./styles.scss";

const Home = () => {
	const [messageList, setMessageList] = useState([]);

	return (
		<div className="home-wrapper">
			<MessageContainer messageList={messageList} />
			<MessageInput {...{ messageList, setMessageList }} />
		</div>
	);
};

export default Home;
