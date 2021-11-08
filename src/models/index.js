// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { ACNumber, CFNumber, BaseTimeSchedule, TempTimeSchedule } = initSchema(schema);

export {
  ACNumber,
  CFNumber,
  BaseTimeSchedule,
  TempTimeSchedule
};