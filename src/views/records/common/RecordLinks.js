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
    .RecordLink__btn--card {
      border-right: none;
      border-radius: 4px 0px 0px 4px;
    }
    .RecordLink__btn--details {
      border-radius: 0px 4px 4px 0px;
    }
    `}
  </style>
  );
}

const RecordLinks = ({cardLink, detailsLink}) => {
  return (
    <>
      <Styles />
      <div className="RecordLinks">
        <div className="RecordLinks__btns">
          <a href="#" className="RecordLink__btn RecordLink__btn--card">Card</a>
          <a href="#" className="RecordLink__btn RecordLink__btn--details">Details</a>
        </div>
      </div>
    </>
  )
};

export default RecordLinks;
