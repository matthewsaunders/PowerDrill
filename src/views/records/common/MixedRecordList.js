import React, { useState } from "react";

import RecordList from "./RecordList";

const Styles = () => {
  return (
    <style>
      {`
    `}
    </style>
  );
};

const MixedRecordList = ({records, index, dispatch}) => {
  return(
    <>
      <Styles />

      <div className="MixedRecordList">
        <h4 className="MixedRecordList__header">Records</h4>
        
        <RecordList
          records={records}
          index={index}
          dispatch={dispatch}
        />
      </div>
    </>
  );
};

export default MixedRecordList;
