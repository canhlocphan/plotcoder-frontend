// libs
import React from "react";
// others
import { SendOutlined } from "@ant-design/icons";
import "./styles.scss";

const MessageInput = () => (
	<div className="message-input-wrapper">
		<div className="message-input-wrapper-inner">
			<input placeholder="Please enter your message" />
			<div className="message-input-button-wrapper">
				<SendOutlined className="message-input-button"/>
			</div>
		</div>
	</div>
);

export default MessageInput;
