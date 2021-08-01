import React, { useState, useEffect } from "react";

import Loading from "./common/Loading";
import RecordLinks from "./common/RecordLinks";
import MixedRecordList from "./common/MixedRecordList";

const Styles = () => {
  return (
    <style>
      {`
    `}
    </style>
  );
};

const Iteration = ({ powerDrillRecord, index, dispatch }) => {
  const record = powerDrillRecord.record;

  if (record) {
    console.log('--> record');
    console.log(record);
    return (
      <div className="Record">
        <Styles />
        
        <RecordLinks cardLink={'#card'} detailsLink={'#details'} />

        <h3 className="Record__name">{ record.name }</h3>

        {/* <p dangerouslySetInnerHTML={{ __html: record.description.htmlBody }} ></p> */}

        <MixedRecordList 
          records={powerDrillRecord.linkedRecords.records}
          index={index}
          dispatch={dispatch}
        />
      </div>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Iteration;
