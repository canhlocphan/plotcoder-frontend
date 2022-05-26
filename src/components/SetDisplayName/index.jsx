// libs
import React from "react";
// others
import "./styles.scss";

const SetDisplayName = ({ displayName }) => (
  <div className="set-displayname-wrapper">
    {displayName && (
      <div className="set-displayname">
        {`You has set your name to ${displayName}`}
      </div>
    )}
  </div>
);

export default SetDisplayName;
