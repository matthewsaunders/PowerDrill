import React from "react";

import PowerDrill from "./Powerdrill";

aha.on("powerdrill", ({ fields, onUnmounted }, { identifier, settings }) => {
  const accountId = aha.account.id;
  const projectId = aha.project.id;

  const savedState = {
    records: [
      {
        type: 'project',
        id: projectId,
        record: null,
      },
    ],
  };

  return (
    <PowerDrill initConfig={savedState}/>
  );
});
