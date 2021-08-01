import React, { useState } from "react";

import RecordList from "./RecordList";

const Styles = () => {
  return (
    <style>
    {`
    .CollapsableRecordList {
      margin: 12px 0px;
    }
    .CollapsableRecordList__type {
      display: flex;
      align-items: center;
    }
    .CollapsableRecordList__type > h4 {
      padding: 0;
      margin: 0;
      margin-left: 8px;
    }
    .CollapsableRecordList__typeToggleContainer {
      width: 10px;
      height: 10px;
    }
    .CollapsableRecordList__typeToggleContainer:hover {
      cursor: pointer;
    }
    .CollapsableRecordList__typeToggle {
      width: 0;
      height: 0;
    }
    .CollapsableRecordList__typeToggle--closed {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid black;
    }
    .CollapsableRecordList__typeToggle--opened {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid black;
    }
    .CollapsableRecordList__recordsList--hidden {
      display: none;
    }
    `}
    </style>
  )
}

const typeToggleClass = (shouldDisplayList) => {
  return shouldDisplayList ? 'CollapsableRecordList__typeToggle--opened' : 'CollapsableRecordList__typeToggle--closed';
}

const displayLinkedRecord = (shouldDisplay) => {
  return shouldDisplay ? '' : 'CollapsableRecordList__recordsList--hidden';
}

const CollapsableRecordList = ({name, records, dispatch, index}) => {
  const [displayRecords, setDisplayRecords] = useState(false);

  return (
    <>
      <Styles />
      <div className="CollapsableRecordList">
        <div className="CollapsableRecordList__type">
          <div 
            className="CollapsableRecordList__typeToggleContainer"
            onClick={() => { setDisplayRecords(displayRecords => !displayRecords) }}
          >
            <div className={`CollapsableRecordList__typeToggle ${typeToggleClass(displayRecords)}`} />
          </div>
          <h4>{name} ({records.length})</h4>
        </div>

        <RecordList
          records={records}
          className={`CollapsableRecordList__recordsList ${displayLinkedRecord(displayRecords)}`}
          index={index}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}

export default CollapsableRecordList;
