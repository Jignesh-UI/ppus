/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCurrentOffersModel = /* GraphQL */ `
  query GetCurrentOffersModel($id: ID!) {
    getCurrentOffersModel(id: $id) {
      id
      title
      description
      imagepath
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCurrentOffersModels = /* GraphQL */ `
  query ListCurrentOffersModels(
    $filter: ModelCurrentOffersModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurrentOffersModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        imagepath
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCurrentOffersModels = /* GraphQL */ `
  query SyncCurrentOffersModels(
    $filter: ModelCurrentOffersModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCurrentOffersModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        imagepath
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
