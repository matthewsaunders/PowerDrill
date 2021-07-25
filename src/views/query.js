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
};

export default Query;
