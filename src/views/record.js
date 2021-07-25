import React, { useState, useEffect } from "react";

import Column from "./column";
import Project from "./records/project";
import Iteration from "./records/iteration";
import Feature from "./records/feature";

const Styles = () => {
  return (
    <style>
      {`
    .Record__header {
      background-color: white;
      width: 100%;
      height: 40px;
      padding: 0.2rem 0rem;
      text-align: center;
      display: flex;
      align-items: center;
    }
    .Record__title {
      font-size: 16px;
      line-height: 30px;
      font-weight: 500;
      text-transform: uppercase;
      flex-grow: 1;
      margin: 0;
    }
    .Record__close {
      display: inline;
      margin-right: 15px;
    }
    .Record__close:hover {
      cursor: pointer;
    }
    .Record__content {
      padding: 20px 16px;
      background-color: white;
    }
    .Record__name {
      font-size: 24px;
      font-weight: 300;
      line-height: 30px;
    }
    .Record__actions {
      width: 100%;
      text-align: right;
    }
    .Record__viewBtn {
      text-decoration: none;
      padding: 4px 8px;
      border: 1px solid black;
    }
    .Record__viewBtn:hover {
      text-decoration: none;
      background-color: #f7f7f7;
    }
    .Record__viewBtn--card {
      border-right: none;
      border-radius: 4px 0px 0px 4px;
    }
    .Record__viewBtn--details {
      border-radius: 0px 4px 4px 0px;
    }
    `}
    </style>
  );
};

const renderRecord = (powerDrillRecord, index, dispatch) => {
  switch (powerDrillRecord.type) {
    case 'project':
      return <Project powerDrillRecord={powerDrillRecord} index={index} dispatch={dispatch} />
    case 'iteration':
      return <Iteration powerDrillRecord={powerDrillRecord} index={index} dispatch={dispatch} />
    case 'feature':
      return <Feature powerDrillRecord={powerDrillRecord} index={index} dispatch={dispatch} />
    case 'requirement':
      return <p>req</p>
      // return <Requirement powerDrillRecord={powerDrillRecord} index={index} dispatch={dispatch} />
    default:
      return <p>Whoops</p>
  }
}

// // Colors
// &--strategic-imperative {
//   background-color: var(--aha-teal-600);
// }
// &--initiative {
//   background-color: var(--aha-pink-600);
// }
// &--release {
//   background-color: var(--theme-secondary-text);
// }
// &--epic {
//   background-color: var(--aha-purple-300);
// }
// &--feature {
//   background-color: var(--aha-blue-500);
// }
// &--requirement {
//   background-color: var(--aha-orange-700);
// }
// &--idea {
//   background-color: var(--aha-green-700);
// }
// &--feedback-campaign {
//   background-color: var(--aha-red-700);
// }
// &--idea-session {
//   background-color: var(--aha-yellow-800);
// }
const recordHeaderColor = (recordType) => {
  switch (recordType) {
    // case 'project':
    //   return '';
    // case 'iteration':
    //   return '';
    case 'feature':
      return '#0073cf'; // --aha-blue-500
    case 'requirement':
      return '#de7f03'; // --aha-orange-700
    default:
      return '#e1e1e1'; // --aha-gray-400
  }
}

const handleClose = (dispatch, index) => {
  dispatch({
    type: 'removeRecord',
    index: index,
  });
}

const renderCloseBtn = (dispatch, index) => {
  if(index > 0) {
    return <button className="Record__close" onClick={() => { handleClose(dispatch, index) }}>X</button>;
  } else {
    return null;
  }
}

const Record = ({ powerDrillRecord, index, dispatch }) => {
  return (
    <Column>
      <Styles />

      <div className="Record__header" style={{backgroundColor: recordHeaderColor(powerDrillRecord.type)}}>
        <h2 className="Record__title">{powerDrillRecord.type}</h2>
        {renderCloseBtn(dispatch, index)}
      </div>

      <div className="Record__content">
        {renderRecord(powerDrillRecord, index, dispatch)}
      </div>
    </Column>
  );
};

export default Record;
