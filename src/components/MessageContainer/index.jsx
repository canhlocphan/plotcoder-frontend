// libs
import React from "react";
// components
import Message from "../Message";
// others
import "./styles.scss";

const MessageContainer = ({ messageList }) => (
	<div className="message-container-wrapper">
		{messageList.map(({ type, message }) => (
			<Message key={Math.random()} {...{ type, message }} />
		))}
	</div>
);

export default MessageContainer;
