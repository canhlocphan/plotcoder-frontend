// libs
import React from "react";
import moment from "moment";
// others
import "./styles.scss";

const Message = ({ type, message, name }) => (
	<div
		className={
			type === 1 ? "message-box-wrapper" : "message-respone-box-wrapper"
		}
	>
		<div className="message-wrapper">
			<div className="message-user-display-name-wrapper">
				<div className="message-user-display-name">
					{type === 1 ? "PlotCoder" : "Phan Cảnh Lộc"}
				</div>
			</div>
			<div className="message-wrapper-inner">
				<div className="message">{message}</div>
			</div>
			<div className="time-wrapper">
				<div className="time">{moment().format("lll")}</div>
			</div>
		</div>
	</div>
);

export default Message;
