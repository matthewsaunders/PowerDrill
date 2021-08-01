import React, { useState, useEffect } from "react";

import Loading from "./common/Loading";

const Styles = () => {
  return (
    <style>
      {`
    `}
    </style>
  );
};

const Feature = ({ powerDrillRecord, index, dispatch }) => {
  const record = powerDrillRecord.record;

  const handleRequirementClick = (requirementId) => {
    dispatch({
      type: 'addRecord',
      recordType: 'requirement',
      id: requirementId,
      index: index,
    });
  }

  if (record) {
    return (
      <div className="Record">
        <Styles />
        <h3 className="Record__name">{ record.name }</h3>
        <p>{ record.id }</p>

        <p>Requirements</p>
        <ul>
          {
            record.requirements.map((requirement) => 
              <li onClick={() => handleRequirementClick(requirement.id)}>{requirement.name}</li>
            )
          }
        </ul>
      </div>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Feature;
