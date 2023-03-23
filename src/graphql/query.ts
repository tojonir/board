import { gql } from "@apollo/client";

export const GET_WORKSPACE_BY_NAME = gql`
  query ($name: String!) {
    getWorkspaceByName(name: $name) {
      id
      name
    }
  }
`;
