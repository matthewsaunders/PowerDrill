import React, { useState, useEffect } from "react";

import Loading from "./loading";
import LinkedRecords from "./common/linkedRecords";

const Styles = () => {
  return (
    <style>
      {`
    `}
    </style>
  );
};

const Project = ({ powerDrillRecord, index, dispatch }) => {
  const record = powerDrillRecord.record;

  const [showUsers, setShowUsers] = useState(false);
  const [showReleases, setShowReleases] = useState(false);
  const [showIterations, setShowIterations] = useState(false);

  const handleIterationClick = (iterationId) => {
    dispatch({
      type: 'addRecord',
      recordType: 'iteration',
      id: iterationId,
      index: index,
    });
  }

  console.log('--> project');
  console.log(powerDrillRecord.record);

  if (record) {
    return (
      <div className="Record">
        <Styles />

        <h3 className="Record__name">{ record.name }</h3>

        <div className="LinkedRecords__container">
          <LinkedRecords
            name="Users"
            records={powerDrillRecord.linkedRecords.iterations}
            handleRecordClick={handleIterationClick}
          />

          <LinkedRecords
            name="Releases"
            records={powerDrillRecord.linkedRecords.iterations}
            handleRecordClick={handleIterationClick}
          />

          <LinkedRecords
            name="Iterations"
            records={powerDrillRecord.linkedRecords.iterations}
            handleRecordClick={handleIterationClick}
          />

        </div>
        
      </div>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Project;
