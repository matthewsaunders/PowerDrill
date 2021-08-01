import color from 'https://cdn.skypack.dev/color';
import React from "react";

const borderRadius = '4px';

const Styles = () => {
  return (
    <style>
      {`
      .RecordStatus {
        display: flex;
        flex-direction: row;
      }
      .RecordStatus__status {
        padding: 2px 6px;
      }
      .RecordStatus__roadmap {
        border-top-left-radius: ${borderRadius};
        border-bottom-left-radius: ${borderRadius};
      }
      .RecordStatus__roadmapTriangle {
        width:0px;
        height:0px;
        border: 10px solid;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        margin-right: -16px;
      }
      .RecordStatus__development {
        border-top-right-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};
        margin-left: -8px;
      }
      .RecordStatus__developmentTriangle {
        width:0px;
        height:0px;
        border: 10px solid;
        border-left-color: transparent;
      }
    `}
    </style>
  );
};

const RecordStatus = ({roadmapStatus, developmentStatus}) => {
  const roadmapStatusColor = color(roadmapStatus.color);
  const developmentStatusColor = color(developmentStatus.color);

  return(
    <>
      <Styles />
      <div className="RecordStatus">
        { roadmapStatus &&
          <>
            <div
              className="RecordStatus__status RecordStatus__roadmap"
              style={{backgroundColor: roadmapStatusColor.hex()}}
            >
              {roadmapStatus.name}
            </div>
            <div 
              className="RecordStatus__roadmapTriangle"
              style={{ borderLeftColor: roadmapStatusColor.hex()}}
            />
          </>
        }
        { developmentStatus &&
          <>
            <div 
              className="RecordStatus__developmentTriangle"
              style={{ borderColor: developmentStatusColor.hex(), borderLeftColor: 'transparent'}}
            />
            <div
              className="RecordStatus__status RecordStatus__development"
              style={{backgroundColor: developmentStatusColor.hex()}}
            >
              {developmentStatus.name}
            </div>
          </>
        }
      </div>
    </>
  )
}

export default RecordStatus;
