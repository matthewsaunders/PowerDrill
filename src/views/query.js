const Query = {
  project: (projectId) => {
    return `
    {
      project(id: ${projectId}) {
        id
        name
        releases {
          id
          name
          path
          referenceNum
        }
        users {
          id
          name
        }
      }
    }
    `;
  },
  projectIterations: (projectId) => {
    return `
    {
      iterations(filters: { projectId: ${projectId} }) {
        nodes {
          id
          name
          status
          description {
            htmlBody
          }
        }
      }
    }
    `;
  },
  iteration: (iterationId) => {
    return `
    {
      iteration(id: ${iterationId}) {
        id
        name
        startDate
        duration
        status
        description {
          htmlBody
        }
        records {
          ... on Feature {
            id
            name
            path
            assignedToUser {
              avatarUrl
            }
            referenceNum
            teamWorkflowStatus {
              color
              name
            }
            workflowStatus {
              name
              color
            }
          }
          ... on Epic {
            id
            name
            assignedToUser {
              avatarUrl
            }
            path
            referenceNum
            teamWorkflowStatus {
              color
              name
            }
            workflowStatus {
              color
              name
            }
          }
          ... on Requirement {
            id
            name
            assignedToUser {
              avatarUrl
            }
            path
            referenceNum
            teamWorkflowStatus {
              color
              name
            }
            workflowStatus {
              color
              name
            }
          }
        }
      }
    }
    `;
  },
  feature: (featureId) => {
    return `
    {
      feature(id: ${featureId}) {
        id
        name
        path
        referenceNum
        description {
          htmlBody
        }
        workflowStatus {
          color
          name
        }
        teamWorkflowStatus {
          color
          name
        }
        assignedToUser {
          id
          name
          avatarUrl(size: SIZE_16)
        }
        tags {
          color
          name
        }
        requirements {
          id
          name
          path
          referenceNum
          teamWorkflowStatus {
            color
            name
          }
          workflowStatus {
            color
            name
          }
          assignedToUser {
            avatarUrl
          }
        }
      }
    }
    `;
  },
  requirement: (requirementId) => {
    return `
    {
      requirement(id: ${requirementId}) {
        assignedToUser {
          avatarUrl
          name
        }
        description {
          htmlBody
        }
        id
        name
        path
        referenceNum
        tasks {
          id
          name
          path
          status
        }
        teamWorkflowStatus {
          color
          name
        }
        workflowStatus {
          color
          name
        }
      }
    }
    `;
  },
};

export default Query;
