import React, { useState } from "react";

const Styles = () => {
  return (
  <style>
    {`
    .RecordLinks {
      width: 100%;
      text-align: right;
    }
    .RecordLinks__btns {

    }
    .RecordLink__btn {
      text-decoration: none;
      padding: 4px 8px;
      border: 1px solid black;
    }
    .RecordLink__btn:hover {
      text-decoration: none;
      background-color: #f7f7f7;
    }
    .RecordLink__btn--drawer {
      border-right: none;
      border-radius: 4px 0px 0px 4px;
    }
    .RecordLink__btn--details {
      border-radius: 0px 4px 4px 0px;
    }
    .RecordLink__btn--solo {
      border-radius: 4px;
    }
    `}
  </style>
  );
}

const RecordLinks = ({drawerLink, detailsLink}) => {
  return (
    <>
      <Styles />
      <div className="RecordLinks">
        <div className="RecordLinks__btns">
          { drawerLink &&
            <a
              href={drawerLink}
              className={`RecordLink__btn ${detailsLink ? 'RecordLink__btn--drawer' : 'RecordLink__btn--solo'}`}
              data-drawer-url={drawerLink}
            >
              Drawer
            </a>
          }
          { detailsLink &&
            <a
              href={detailsLink}
              className={`RecordLink__btn ${drawerLink ? 'RecordLink__btn--details' : 'RecordLink__btn--solo'}`}
              target="_blank"
            >
              Details
            </a>
          }
        </div>
      </div>
    </>
  )
};

export default RecordLinks;
