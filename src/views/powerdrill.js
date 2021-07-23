import React, { useEffect, useReducer } from "react";

import Record from "./record";
import Query from "./query";

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
      min-height: 500px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: scroll;
      border: 1px solid red;
    }
    .PowerDrill__row > div:first-child {
      margin-left: 8px;
    }
    .PowerDrill__column {
      border: 1px solid black;
      border-radius: 2px;
      background-color: white;
      min-height: 100%;
      height: 100%;
      min-width: 500px;
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
      const iteration = await aha.models.Iteration.select('id', 'name', 'status').find(powerDrillRecord.id);
      const features = await aha.models.Feature.select('id', 'name').where({ projectId: aha.project.id, iterationId: powerDrillRecord.id }).all();

      // response = await aha.graphQuery(Query.iteration(powerDrillRecord.id));
      // const iteration = new aha.models.I(response.feature);

      return {
        record: iteration,
        linkedRecords: {
          features: features,
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
