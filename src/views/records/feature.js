import React from "react";
import Loading from "./common/Loading";
import CollapsableRecordList from "./common/CollapsableRecordList";
import RecordLinks from "./common/RecordLinks";

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

  if (record) {
    console.log('--> record');
    console.log(record);
    return (
      <div className="Record">
        <Styles />

        <RecordLinks detailsLink={record.path} drawerLink={record.path} />

        <h3 className="Record__name">{ record.name }</h3>

        <div className="Record__section">
          <h3 className="Record__sectionHeading">Description</h3>
          <div dangerouslySetInnerHTML={{ __html: record.description.htmlBody }}></div>
        </div>

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
