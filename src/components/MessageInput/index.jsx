// libs
import React, { useEffect, useState } from "react";
// others
import { SendOutlined } from "@ant-design/icons";
import "./styles.scss";

const MessageInput = ({ messageList, setMessageList }) => {
	const [value, setValue] = useState("");
	const [result, setResult] = useState("");
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const text = value.trim();
		if (text !== "") {
			const list = messageList;
			const newList = [{ message: text, type: 1 }, ...list];
			console.log(newList);
			setMessageList(newList);
			setValue("");
			setResult("plot.show(a,b,c)");
		}
	};
	
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	
	useEffect(() => {
		if (result !== "") {
			const list = messageList;
			const newList = [{ type: 2, message: result }, ...list];
			setMessageList(newList);
			setResult("");
		}
	}, [result, setResult, messageList, setMessageList]);
	
	return (
		<div className="message-input-wrapper">
			<form className="message-input-wrapper-inner" onSubmit={handleSubmit}>
				<input
					placeholder="Please enter your message"
					value={value}
					onSubmit={handleSubmit}
					onChange={handleChange}
				/>
				<div className="message-input-button-wrapper" onClick={handleSubmit}>
					<SendOutlined className="message-input-button" />
				</div>
			</form>
		</div>
	);
};

export default MessageInput;
