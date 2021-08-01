import React from "react";
import RecordCard from "./RecordCard";

const Styles = () => {
  return (
    <style>
      {`
      .RecordList {

      }
      .RecordList__record {
        
      }
    .RecordList {
      list-style-type: none;
      margin: 0;
    }
    `}
    </style>
  );
};

const handleRecordClick = (dispatch, record, index) => {
  dispatch({
    type: 'addRecord',
    recordType: record.__typename?.toLowerCase(),
    id: record.id,
    index: index,
  });
};

const RecordList = ({ records, className, dispatch, index }) => {
  return(
    <>
      <Styles />

      <ul className={`RecordList ${className}`}>
        {
          records.map((record) => 
            <RecordCard
              record={record}
              handleRecordClick={() => { handleRecordClick(dispatch, record, index) }}
            />
          )
        }
      </ul>
    </>
  )
}

export default RecordList;
