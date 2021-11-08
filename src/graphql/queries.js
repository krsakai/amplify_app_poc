/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getACNumber = /* GraphQL */ `
  query GetACNumber($id: ID!) {
    getACNumber(id: $id) {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const listACNumbers = /* GraphQL */ `
  query ListACNumbers(
    $filter: ModelACNumberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listACNumbers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCFNumber = /* GraphQL */ `
  query GetCFNumber($id: ID!) {
    getCFNumber(id: $id) {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const listCFNumbers = /* GraphQL */ `
  query ListCFNumbers(
    $filter: ModelCFNumberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCFNumbers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        arn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBaseTimeSchedule = /* GraphQL */ `
  query GetBaseTimeSchedule($id: ID!) {
    getBaseTimeSchedule(id: $id) {
      id
      acId
      acNumber {
        id
        number
        createdAt
        updatedAt
      }
      dayOfWeek
      startTime
      endTime
      cfId
      cfNumber {
        id
        name
        arn
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBaseTimeSchedules = /* GraphQL */ `
  query ListBaseTimeSchedules(
    $filter: ModelBaseTimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseTimeSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        acId
        dayOfWeek
        startTime
        endTime
        cfId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTempTimeSchedule = /* GraphQL */ `
  query GetTempTimeSchedule($id: ID!) {
    getTempTimeSchedule(id: $id) {
      id
      acId
      acNumber {
        id
        number
        createdAt
        updatedAt
      }
      name
      startDate
      startTime
      endDate
      endTime
      cfId
      cfNumber {
        id
        name
        arn
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTempTimeSchedules = /* GraphQL */ `
  query ListTempTimeSchedules(
    $filter: ModelTempTimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTempTimeSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        acId
        name
        startDate
        startTime
        endDate
        endTime
        cfId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const baseTimeScheduleByAcId = /* GraphQL */ `
  query BaseTimeScheduleByAcId(
    $acId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBaseTimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseTimeScheduleByAcId(
      acId: $acId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        acId
        dayOfWeek
        startTime
        endTime
        cfId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tempTimeScheduleByAcId = /* GraphQL */ `
  query TempTimeScheduleByAcId(
    $acId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTempTimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tempTimeScheduleByAcId(
      acId: $acId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        acId
        name
        startDate
        startTime
        endDate
        endTime
        cfId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
