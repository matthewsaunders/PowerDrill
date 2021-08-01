import React from "react";

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
    .RecordList__record {
      padding: 8px;
      margin: 8px 0px;
      border: 1px solid black;
      border-radius: 2px;
    }
    .RecordList__record:hover {
      background-color: var(--aha-blue-100);
      cursor: pointer;
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
            <li className="RecordList__record" onClick={() => handleRecordClick(dispatch, record, index)}>{record.name}</li>
          )
        }
      </ul>
    </>
  )
}

export default RecordList;
