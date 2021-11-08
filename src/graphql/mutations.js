/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createACNumber = /* GraphQL */ `
  mutation CreateACNumber(
    $input: CreateACNumberInput!
    $condition: ModelACNumberConditionInput
  ) {
    createACNumber(input: $input, condition: $condition) {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const updateACNumber = /* GraphQL */ `
  mutation UpdateACNumber(
    $input: UpdateACNumberInput!
    $condition: ModelACNumberConditionInput
  ) {
    updateACNumber(input: $input, condition: $condition) {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const deleteACNumber = /* GraphQL */ `
  mutation DeleteACNumber(
    $input: DeleteACNumberInput!
    $condition: ModelACNumberConditionInput
  ) {
    deleteACNumber(input: $input, condition: $condition) {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const createCFNumber = /* GraphQL */ `
  mutation CreateCFNumber(
    $input: CreateCFNumberInput!
    $condition: ModelCFNumberConditionInput
  ) {
    createCFNumber(input: $input, condition: $condition) {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const updateCFNumber = /* GraphQL */ `
  mutation UpdateCFNumber(
    $input: UpdateCFNumberInput!
    $condition: ModelCFNumberConditionInput
  ) {
    updateCFNumber(input: $input, condition: $condition) {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const deleteCFNumber = /* GraphQL */ `
  mutation DeleteCFNumber(
    $input: DeleteCFNumberInput!
    $condition: ModelCFNumberConditionInput
  ) {
    deleteCFNumber(input: $input, condition: $condition) {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const createBaseTimeSchedule = /* GraphQL */ `
  mutation CreateBaseTimeSchedule(
    $input: CreateBaseTimeScheduleInput!
    $condition: ModelBaseTimeScheduleConditionInput
  ) {
    createBaseTimeSchedule(input: $input, condition: $condition) {
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
export const updateBaseTimeSchedule = /* GraphQL */ `
  mutation UpdateBaseTimeSchedule(
    $input: UpdateBaseTimeScheduleInput!
    $condition: ModelBaseTimeScheduleConditionInput
  ) {
    updateBaseTimeSchedule(input: $input, condition: $condition) {
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
export const deleteBaseTimeSchedule = /* GraphQL */ `
  mutation DeleteBaseTimeSchedule(
    $input: DeleteBaseTimeScheduleInput!
    $condition: ModelBaseTimeScheduleConditionInput
  ) {
    deleteBaseTimeSchedule(input: $input, condition: $condition) {
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
export const createTempTimeSchedule = /* GraphQL */ `
  mutation CreateTempTimeSchedule(
    $input: CreateTempTimeScheduleInput!
    $condition: ModelTempTimeScheduleConditionInput
  ) {
    createTempTimeSchedule(input: $input, condition: $condition) {
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
export const updateTempTimeSchedule = /* GraphQL */ `
  mutation UpdateTempTimeSchedule(
    $input: UpdateTempTimeScheduleInput!
    $condition: ModelTempTimeScheduleConditionInput
  ) {
    updateTempTimeSchedule(input: $input, condition: $condition) {
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
export const deleteTempTimeSchedule = /* GraphQL */ `
  mutation DeleteTempTimeSchedule(
    $input: DeleteTempTimeScheduleInput!
    $condition: ModelTempTimeScheduleConditionInput
  ) {
    deleteTempTimeSchedule(input: $input, condition: $condition) {
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
