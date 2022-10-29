import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
        completed
        id
        title
    }
  }
`;

export const UPDATE_USERS = gql`
  mutation updateUsers($id: Int!, $completed: Boolean) {
    update_users_by_pk(_set: {completed: $completed}, pk_columns: {id: $id}) {
      id
      title
      completed
    }
  }
`

export const DELETE_USERS = gql`
  mutation deleteUsers($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
      title
      completed
    }
  }
`

export const INSERT_USERS = gql`
  mutation insertUsers($title: String = "", $completed: Boolean = false) {
    insert_users_one(object: {title: $title, completed: $completed}) {
      id
      title
      completed
    }
  }
`

export const SUBSCRIBE_USERS = gql`
  subscription MySubscription {
    users {
      completed
      id
      title
    }
  }
`