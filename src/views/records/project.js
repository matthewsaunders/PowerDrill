import React from "react";

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

  const handleRecordClick = (recordType) => {
    return (recordId) => {
      dispatch({
        type: 'addRecord',
        recordType: recordType,
        id: recordId,
        index: index,
      });
    };
  }

  if (record) {
    return (
      <div className="Record">
        <Styles />

        <h3 className="Record__name">{ record.name }</h3>

        <div className="LinkedRecords__container">
          <LinkedRecords
            name="Users"
            records={powerDrillRecord.record.users}
            handleRecordClick={handleRecordClick("user")}
          />

          <LinkedRecords
            name="Releases"
            records={powerDrillRecord.record.releases}
            handleRecordClick={handleRecordClick("release")}
          />

          <LinkedRecords
            name="Iterations"
            records={powerDrillRecord.linkedRecords.iterations}
            handleRecordClick={handleRecordClick("iteration")}
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
