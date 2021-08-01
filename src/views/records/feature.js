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
    console.log('--> record');
    console.log(record);
    return (
      <div className="Record">
        <Styles />

        <h3 className="Record__name">{ record.name }</h3>

        <CollapsableRecordList
          name="Requirements"
          records={record.requirements}
          index={index}
          dispatch={dispatch}
          opened={true}
        />
      </div>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Feature;
