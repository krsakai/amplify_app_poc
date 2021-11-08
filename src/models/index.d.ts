import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ACNumberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CFNumberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BaseTimeScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TempTimeScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ACNumber {
  readonly id: string;
  readonly number: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ACNumber, ACNumberMetaData>);
  static copyOf(source: ACNumber, mutator: (draft: MutableModel<ACNumber, ACNumberMetaData>) => MutableModel<ACNumber, ACNumberMetaData> | void): ACNumber;
}

export declare class CFNumber {
  readonly id: string;
  readonly name: string;
  readonly arn: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CFNumber, CFNumberMetaData>);
  static copyOf(source: CFNumber, mutator: (draft: MutableModel<CFNumber, CFNumberMetaData>) => MutableModel<CFNumber, CFNumberMetaData> | void): CFNumber;
}

export declare class BaseTimeSchedule {
  readonly id: string;
  readonly acId: string;
  readonly acNumber?: ACNumber;
  readonly dayOfWeek: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly cfId: string;
  readonly cfNumber?: CFNumber;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BaseTimeSchedule, BaseTimeScheduleMetaData>);
  static copyOf(source: BaseTimeSchedule, mutator: (draft: MutableModel<BaseTimeSchedule, BaseTimeScheduleMetaData>) => MutableModel<BaseTimeSchedule, BaseTimeScheduleMetaData> | void): BaseTimeSchedule;
}

export declare class TempTimeSchedule {
  readonly id: string;
  readonly acId: string;
  readonly acNumber?: ACNumber;
  readonly name: string;
  readonly startDate: string;
  readonly startTime: string;
  readonly endDate?: string;
  readonly endTime?: string;
  readonly cfId: string;
  readonly cfNumber?: CFNumber;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TempTimeSchedule, TempTimeScheduleMetaData>);
  static copyOf(source: TempTimeSchedule, mutator: (draft: MutableModel<TempTimeSchedule, TempTimeScheduleMetaData>) => MutableModel<TempTimeSchedule, TempTimeScheduleMetaData> | void): TempTimeSchedule;
}