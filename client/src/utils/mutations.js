import { gql } from '@apollo/client';

export const UPDATE_RESPONSES = gql`
mutation Choice($id: String!) {
  updateResponses (_id: $id) {
    _id
    name
    responses
  }
}`