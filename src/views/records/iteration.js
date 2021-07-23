import React, { useState, useEffect } from "react";

import Loading from "./loading";

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

  const handleFeatureClick = (featureId) => {
    dispatch({
      type: 'addRecord',
      recordType: 'feature',
      id: featureId,
      index: index,
      data: {
        iterationId: record.id,
      }
    });
  }

  if (record) {
    console.log('--> record');
    console.log(record);
    return (
      <div className="Record">
        <Styles />
        <div className="Record__actions">
          <div className="Record__viewBtns">
            <a href="#" className="Record__viewBtn Record__viewBtn--card">Card</a>
            <a href="#" className="Record__viewBtn Record__viewBtn--details">Details</a>
          </div>
        </div>

        <h3 className="Record__name">{ record.name }</h3>
        <p>{record.id}</p>

        <div className="LinkedRecords">
          <h4 className="LinkedRecords__type">Features</h4>
          <ul>
            {
              powerDrillRecord.linkedRecords.features.map((feature) => 
              <li className="LinkedRecords__record" onClick={() => handleFeatureClick(feature.id)}>{feature.name}</li>
            )
            }
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Iteration;
