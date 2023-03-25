import { gql } from "@apollo/client";

export const GET_WORKSPACE_BY_NAME = gql`
  query ($name: String!) {
    getWorkspaceByName(name: $name) {
      id
      name
    }
  }
`;

export const GET_WORKSPACE_DATA = gql`
  query ($id: ID!) {
    getWorkspaceById(id: $id) {
      sumup {
        project
        team
      }
      project {
        name
        team {
          info {
            username
            avatar
          }
        }
      }
    }
  }
`;
