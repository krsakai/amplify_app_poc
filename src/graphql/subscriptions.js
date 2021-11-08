/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateACNumber = /* GraphQL */ `
  subscription OnCreateACNumber {
    onCreateACNumber {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateACNumber = /* GraphQL */ `
  subscription OnUpdateACNumber {
    onUpdateACNumber {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteACNumber = /* GraphQL */ `
  subscription OnDeleteACNumber {
    onDeleteACNumber {
      id
      number
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCFNumber = /* GraphQL */ `
  subscription OnCreateCFNumber {
    onCreateCFNumber {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCFNumber = /* GraphQL */ `
  subscription OnUpdateCFNumber {
    onUpdateCFNumber {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCFNumber = /* GraphQL */ `
  subscription OnDeleteCFNumber {
    onDeleteCFNumber {
      id
      name
      arn
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBaseTimeSchedule = /* GraphQL */ `
  subscription OnCreateBaseTimeSchedule {
    onCreateBaseTimeSchedule {
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
export const onUpdateBaseTimeSchedule = /* GraphQL */ `
  subscription OnUpdateBaseTimeSchedule {
    onUpdateBaseTimeSchedule {
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
export const onDeleteBaseTimeSchedule = /* GraphQL */ `
  subscription OnDeleteBaseTimeSchedule {
    onDeleteBaseTimeSchedule {
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
export const onCreateTempTimeSchedule = /* GraphQL */ `
  subscription OnCreateTempTimeSchedule {
    onCreateTempTimeSchedule {
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
export const onUpdateTempTimeSchedule = /* GraphQL */ `
  subscription OnUpdateTempTimeSchedule {
    onUpdateTempTimeSchedule {
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
export const onDeleteTempTimeSchedule = /* GraphQL */ `
  subscription OnDeleteTempTimeSchedule {
    onDeleteTempTimeSchedule {
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
