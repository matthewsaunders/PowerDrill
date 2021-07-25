import React, { useState } from "react";

const Styles = () => {
  return (
    <style>
    {`
    .LinkedRecords {
      margin: 12px 0px;
    }
    .LinkedRecords__type {
      display: flex;
      align-items: center;
    }
    .LinkedRecords__type > h4 {
      padding: 0;
      margin: 0;
      margin-left: 8px;
    }
    .LinkedRecords__typeToggleContainer {
      width: 10px;
    }
    .LinkedRecords__typeToggleContainer:hover {
      cursor: pointer;
    }
    .LinkedRecords__typeToggle {
      width: 0;
      height: 0;
    }
    .LinkedRecords__typeToggle--closed {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid black;
    }
    .LinkedRecords__typeToggle--opened {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid black;
    }
    .LinkedRecords__recordsList {
      list-style-type: none;
      margin: 0;
    }
    .LinkedRecords__recordsList--hidden {
      display: none;
    }
    .LinkedRecords__record {
      padding: 8px;
      margin: 8px 0px;
      border: 1px solid black;
      border-radius: 2px;
    }
    .LinkedRecords__record:hover {
      background-color: var(--aha-blue-100);
      cursor: pointer;
    }
    `}
    </style>
  )
}

const typeToggleClass = (shouldDisplayList) => {
  return shouldDisplayList ? 'LinkedRecords__typeToggle--opened' : 'LinkedRecords__typeToggle--closed';
}

const displayLinkedRecord = (shouldDisplay) => {
  return shouldDisplay ? '' : 'LinkedRecords__recordsList--hidden';
}

const LinkedRecords = ({name, records, handleRecordClick}) => {
  const [displayRecords, setDisplayRecords] = useState(false);

  console.log(`displayRecords: ${displayRecords}`);

  return (
    <>
      <Styles />
      <div className="LinkedRecords">
        <div className="LinkedRecords__type">
          <div 
            className="LinkedRecords__typeToggleContainer"
            onClick={() => { setDisplayRecords(displayRecords => !displayRecords) }}
          >
            <div className={`LinkedRecords__typeToggle ${typeToggleClass(displayRecords)}`} />
          </div>
          <h4>{name} ({records.length})</h4>
        </div>

        <ul className={`LinkedRecords__recordsList ${displayLinkedRecord(displayRecords)}`}>
          {
            records.map((record) => 
              <li className="LinkedRecords__record" onClick={() => handleRecordClick(record.id)}>{record.name}</li>
            )
          }
        </ul>
      </div>
    </>
  );
}

export default LinkedRecords;
