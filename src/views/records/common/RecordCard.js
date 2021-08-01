import React from "react";
import RecordStatus from "./RecordStatus";

const Styles = () => {
  return (
    <style>
      {`
      .RecordCard {
        padding: 8px;
        margin: 8px 0px;
        border: 1px solid black;
        border-radius: 2px;
      }
      .RecordCard:hover {
        background-color: var(--aha-blue-100);
        cursor: pointer;
      }
      .RecordCard__row {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .RecordCard > .RecordCard__row:not(:first-of-type) {
        margin-top: 4px;
      }
      .RecordCard__cell {
      }
      .RecordCard__referenceNum {
        color: #9999a3;
        flex-grow: 1;
      }
      .RecordCard__status {
      }
    `}
    </style>
  );
};

const RecordCard = ({ record, handleRecordClick }) => {
  console.log('RecordCard record');
  console.log(record);

  const hasRoadmapStatus = record.workflowStatus;
  const hasDevelopStatus = record.teamWorkflowStatus;
  const hasStatus = (hasRoadmapStatus || hasDevelopStatus);

  return (
    <>
      <Styles />
      <li
        className="RecordCard"
        onClick={() => handleRecordClick()}
      >
        { record.referenceNum && hasStatus &&
          <div className="RecordCard__row">
            { record.referenceNum &&
              <div className="RecordCard__cell RecordCard__referenceNum">
                {record.referenceNum}
              </div>
            }

            { hasStatus &&
              <div className="RecordCard__cell RecordCard__status">
                <RecordStatus
                  roadmapStatus={record.workflowStatus}
                  developmentStatus={record.teamWorkflowStatus}
                />
              </div>
            }
          </div>
        }
        <div className="RecordCard__row">
          <div className="RecordCard__cell">
            {record.name}
          </div>
        </div>
      </li>
    </>
  );
}

export default RecordCard;
