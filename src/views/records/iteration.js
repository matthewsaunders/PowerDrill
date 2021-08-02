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

const detailsUrl = (iterationId) => `/develop/iterations/${iterationId}`;
const drawerUrl = (iterationId) => `${detailsUrl(iterationId)}?format=drawer&show_back=false`;

const monthNames =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateToShortString = (date) => `${monthNames[date.getMonth()]} ${date.getDate()}`;

const iterationDateRange = (start, duration) => {
  let startDate = new Date(start);
  let endDate = new Date(start);
  endDate.setDate(endDate.getDate() + duration);

  return `${dateToShortString(startDate)} - ${dateToShortString(endDate)}`;
}

const Iteration = ({ powerDrillRecord, index, dispatch }) => {
  const record = powerDrillRecord.record;

  if (record) {
    return (
      <div className="Record">
        <Styles />
        
        <RecordLinks detailsLink={detailsUrl(record.id)} drawerLink={detailsUrl(record.id)} />

        <h3 className="Record__name">{ record.name }</h3>
        <p className="Record__date">{ iterationDateRange(record.startDate, record.duration) }</p>

        <div className="Record__section">
          <h3 className="Record__sectionHeading">Description</h3>
          <div dangerouslySetInnerHTML={{ __html: record.description.htmlBody }}></div>
        </div>

        <div className="Record__section">
          <MixedRecordList 
            records={powerDrillRecord.linkedRecords.records}
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

export default Iteration;
