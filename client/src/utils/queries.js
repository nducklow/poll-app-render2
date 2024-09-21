import { gql } from '@apollo/client';

export const QUERY_QUESTION = gql`
query Question {
  questions {
    _id
    name
    choices {
      _id
      name
      responses
    }
  }
}
`;