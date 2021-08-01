import React, { useEffect, useReducer } from "react";

import Record from "./Record";
import Query from "./Query";

const Styles = () => {
  return (
    <style>
      {`
    .title {
      margin: 8px;
      text-align: center;
      font-size: 20px;
      line-height: 30px;
    }

    .PowerDrill {
    }
    .PowerDrill__row {
      width: 100%;
      height: 80vh;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: stretch;
      overflow-x: scroll;
    }
    .PowerDrill__row > div:first-child {
      margin-left: 8px;
    }
    .PowerDrill__row > div:last-child {
      margin-right: 8px;
    }
    .PowerDrill__row > div:not(:first-child) {
      border-left: none;
    }
    .PowerDrill__column {
      border: 2px solid black;
      background-color: white;
      min-width: 550px;
      overflow-y: scroll;
    }

    button {
      cursor: pointer;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      text-decoration: none;
      border: 1px solid black;
      border-radius: 4px;
      color: black;
      background-color: white;
      margin: 8px;
      padding: 2px 8px;
    }
    `}
    </style>
  );
};

function init(initConfig) {
  return {
    records: initConfig.records || [],
  };
}

function reducer(state, action) {
  console.log(`action: ${action.type}`);
  console.log(action);

  switch (action.type) {
    case 'recordFetched':
      const oldRecord = state.records[action.index];
      const newRecord = {
        ...oldRecord,
        record: action.record,
        linkedRecords: action.linkedRecords,
      };
      state.records[action.index] = newRecord;
      return { ...state };
    case 'addRecord':
      state.records.length = action.index + 1;
      state.records.push({
        type: action.recordType,
        id: action.id,
        data: action.data,
        record: null,
      });
      return { ...state };
    case 'removeRecord':
      state.records.length = action.index;
      return { ...state };
    default:
      throw new Error();
  }
}

const fetchRecord = async (powerDrillRecord) => {
  let response;

  console.log(`fetchRecord - ${powerDrillRecord.type} - ${powerDrillRecord.id}`);
  switch (powerDrillRecord.type) {
    case 'project':
      response = await aha.graphQuery(Query.project(powerDrillRecord.id));
      const project = response.project;

      response = await aha.graphQuery(Query.projectIterations(powerDrillRecord.id));
      const iterations = response.iterations.nodes;

      return {
        record: project,
        linkedRecords: {
          iterations: iterations,
        },
      }
    case 'iteration':
      response = await aha.graphQuery(Query.iteration(powerDrillRecord.id));
      const iteration = response.iteration;

      return {
        record: iteration,
        linkedRecords: {
          records: iteration.records,
        },
      };
    case 'feature':
      response = await aha.graphQuery(Query.feature(powerDrillRecord.id));
      const feature = response.feature;

      return {
        record: feature,
      };
    requirement:
      return {};
    default:
      throw new Error();
  }
}

const PowerDrill = ({ initConfig }) => {
  const [state, dispatch] = useReducer(reducer, initConfig, init);

  useEffect(() => {
    state.records.forEach(async (powerDrillRecord, index) => {
      // console.log(`index: ${index} - fetching: ${!powerDrillRecord.record} - ${powerDrillRecord.type}`)
      if (!powerDrillRecord.record) {
        const fetchedRecord = await fetchRecord(powerDrillRecord);
    
        dispatch({
          type: 'recordFetched',
          index: index,
          ...fetchedRecord,
        });
      }
    });
  });

  return (
    <div class="PowerDrill">
      <Styles />

      <div className='title'>PowerDrill</div>

      <div class="PowerDrill__row">
        {state.records.map((record, index) =>
          <Record powerDrillRecord={record} index={index} dispatch={dispatch}/>
        )}
      </div>
    </div>
  );
}

export default PowerDrill;
