import React from "react";

import Loading from "./common/Loading";
import CollapsableRecordList from "./common/CollapsableRecordList";

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

  if (record) {
    return (
      <div className="Record">
        <Styles />

        <h3 className="Record__name">{ record.name }</h3>

        <div className="CollapsableRecordList__container">
          <CollapsableRecordList
            name="Users"
            records={powerDrillRecord.record.users}
            index={index}
            dispatch={dispatch}
          />

          <CollapsableRecordList
            name="Releases"
            records={powerDrillRecord.record.releases}
            index={index}
            dispatch={dispatch}
          />

          <CollapsableRecordList
            name="Iterations"
            records={powerDrillRecord.linkedRecords.iterations}
            index={index}
            dispatch={dispatch}
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
