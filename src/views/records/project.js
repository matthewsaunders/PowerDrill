import React, { useState, useEffect } from "react";

import Loading from "./loading";

const Styles = () => {
  return (
    <style>
      {`
    `}
    </style>
  );
};

const typeToggleClass = (shouldShow) => {
  return shouldShow ? 'LinkedRecord__typeToggle--opened' : 'LinkedRecord__typeToggle--closed';
}

const displayLinkedRecord = (shouldDisplay) => {
  return shouldDisplay ? '' : 'LinkedRecord__recordsList--hidden';
}

const Project = ({ powerDrillRecord, index, dispatch }) => {
  const record = powerDrillRecord.record;

  const [showUsers, setShowUsers] = useState(false);
  const [showReleases, setShowReleases] = useState(false);
  const [showIterations, setShowIterations] = useState(false);

  const handleIterationClick = (iterationId) => {
    dispatch({
      type: 'addRecord',
      recordType: 'iteration',
      id: iterationId,
      index: index,
    });
  }

  console.log('--> project');
  console.log(powerDrillRecord.record);

  if (record) {
    return (
      <div className="Record">
        <Styles />

        <h3 className="Record__name">{ record.name }</h3>

        <div className="LinkedRecords">
          <div className="LinkedRecord">
            <div className="LinkedRecord__type">
              <div 
                className="LinkedRecord__typeToggleContainer"
                onClick={() => { setShowUsers(showUsers => !showUsers) }}
              >
                <div className={`LinkedRecord__typeToggle ${typeToggleClass(showUsers)}`} />
              </div>
              <h4>Users ({powerDrillRecord.linkedRecords.iterations.length})</h4>
            </div>

            <ul className={`LinkedRecord__recordsList ${displayLinkedRecord(showUsers)}`}>
              {/* {
                powerDrillRecord.linkedRecords.iterations.map((iteration) => 
                  <li className="LinkedRecord__record" onClick={() => handleIterationClick(iteration.id)}>{iteration.name}</li>
                )
              } */}
            </ul>
          </div>

          <div className="LinkedRecord">
            <div className="LinkedRecord__type">
              <div 
                className="LinkedRecord__typeToggleContainer"
                onClick={() => { setShowReleases(showReleases => !showReleases) }}
              >
                <div className={`LinkedRecord__typeToggle ${typeToggleClass(showReleases)}`} />
              </div>
              <h4>Releases ({powerDrillRecord.linkedRecords.iterations.length})</h4>
            </div>

            <ul className={`LinkedRecord__recordsList ${displayLinkedRecord(showReleases)}`}>
              {/* {
                powerDrillRecord.linkedRecords.iterations.map((iteration) => 
                  <li className="LinkedRecord__record" onClick={() => handleIterationClick(iteration.id)}>{iteration.name}</li>
                )
              } */}
            </ul>
          </div>

          <div className="LinkedRecord">
            <div className="LinkedRecord__type">
              <div 
                className="LinkedRecord__typeToggleContainer"
                onClick={() => { setShowIterations(showIterations => !showIterations) }}
              >
                <div className={`LinkedRecord__typeToggle ${typeToggleClass(showIterations)}`} />
              </div>
              <h4>Iterations ({powerDrillRecord.linkedRecords.iterations.length})</h4>
            </div>

            <ul className={`LinkedRecord__recordsList ${displayLinkedRecord(showIterations)}`}>
              {
                powerDrillRecord.linkedRecords.iterations.map((iteration) => 
                  <li className="LinkedRecord__record" onClick={() => handleIterationClick(iteration.id)}>{iteration.name}</li>
                )
              }
            </ul>
          </div>


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
