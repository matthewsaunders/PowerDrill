import color from 'https://cdn.skypack.dev/color';
import React from "react";

const Styles = () => {
  return (
    <style>
      {`
    `}
    </style>
  );
};

const RecordCard = ({ record, handleRecordClick }) => {
  console.log('RecordCard record');
  console.log(record);

  let roadmapsStatusColor = null;
  let developStatusColor = null;

  const hasRoadmapsStatus = record.workflowStatus;
  const hasDevelopStatus = record.teamWorkflowStatus;

  if(hasRoadmapsStatus) {
    roadmapsStatusColor = color(record.workflowStatus.color).hex();
    console.log('roadmapsStatusColor');
    console.log(`${record.workflowStatus.name} - ${roadmapsStatusColor}`);
  }

  if(hasDevelopStatus) {
    developStatusColor = color(record.teamWorkflowStatus.color).hex();
    console.log('developStatusColor');
    console.log(`${record.teamWorkflowStatus.name} - ${developStatusColor}`);
  }

  return (
    <li
      className="RecordList__record"
      onClick={() => handleRecordClick()}
    >
      <div>{record.name}</div>

      { hasRoadmapsStatus && 
        <div style={{backgroundColor: roadmapsStatusColor}}>
          {record.workflowStatus.name}
        </div>
      }
      { hasDevelopStatus && 
        <div style={{backgroundColor: developStatusColor}}>
          {record.teamWorkflowStatus.name}
        </div>
      }
    </li>
  );
}

export default RecordCard;
