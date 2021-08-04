import React from "react";

const UndefinedRecord = ({ recordType }) => {
  return (
    <div style={{ width: "100%", fontSize: "14px" }}>
      <p>
        Well this is embarassing...
      </p>

      <p style={{ textAlign: "center" }}>
        <img src="https://i.giphy.com/Rk994IKv7lo0HgYJte.gif" width="300" style={{ textAlign: "center", marginBottom: "2em" }} />
      </p>

      <p>
        The <b>{ recordType }</b> record is not defined yet in PowerDrill.  You can either:
      </p>

      <ul>
        <li>Make a pull request to <a href="https://github.com/msaun008/PowerDrill" target="_blank">masun008/PowerDrill</a></li>
        <li>Send a message to the <a href="mailto:msaunders@aha.io">extension maintainer</a> and ask nicely</li>
      </ul>
    </div>
  );
}

export default UndefinedRecord;
