// libs
import React, { useState } from "react";
import { Modal } from "antd";
// others
import "./styles.scss";

const DisplaynameModal = ({ setDisplayName }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = value.trim();
    setDisplayName(text);
    setIsModalVisible(false);
  };

  const handleOk = () => {
    handleSubmit();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Modal
      centered
      closable={false}
      maskClosable={false}
      visible={isModalVisible}
      onOk={handleOk}
      okText="Accept"
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <form className="displayname-input-wrapper" onSubmit={handleSubmit}>
        <input
          placeholder="Please enter your username"
          className="displayname-input"
          value={value}
          maxLength={32}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </form>
    </Modal>
  );
};

export default DisplaynameModal;
