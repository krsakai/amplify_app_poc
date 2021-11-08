import { 
  FETCH_BASE_TIME_SCHEDULES,
  FETCH_TEMP_TIME_SCHEDULES,
  FETCH_AC_NUMBERS,
  FETCH_CF_NUMBERS,
  CREATE_BASE_TIME_SCHEDULE,
  CREATE_TEMP_TIME_SCHEDULE,
  CREATE_AC_NUMBER,
  CREATE_CF_NUMBER,
  UPDATE_BASE_TIME_SCHEDULE,
  UPDATE_TEMP_TIME_SCHEDULE,
  UPDATE_AC_NUMBER,
  UPDATE_CF_NUMBER,
  DELETE_BASE_TIME_SCHEDULE,
  DELETE_TEMP_TIME_SCHEDULE,
  DELETE_AC_NUMBER,
  DELETE_CF_NUMBER
} from "../actions";
import _ from "lodash";

const events = (events = {}, action) => {
  switch (action.type) {
      // const data = action.response.data;
      // console.log(_.mapKeys(action.response.data, 'id'))
      // return { ...events, [data.id]: data };

    case FETCH_BASE_TIME_SCHEDULES:
      return action.response.data.listBaseTimeSchedules.items;
    case FETCH_TEMP_TIME_SCHEDULES:
      return action.response.data.listTempTimeSchedules.items;
    case FETCH_AC_NUMBERS:
      return action.response.data.listACNumbers.items.sort((a, b) => a.id - b.id);
    case FETCH_CF_NUMBERS:
      return action.response.data.listCFNumbers.items.sort((a, b) => a.id - b.id);

    case CREATE_BASE_TIME_SCHEDULE:
      return action.response.data.createBaseTimeSchedule;
    case CREATE_TEMP_TIME_SCHEDULE:
      return action.response.data.createTempTimeSchedule;
    case CREATE_AC_NUMBER:
      return action.response.data.createACNumber;
    case CREATE_CF_NUMBER:
      return action.response.data.createCFNumber;

    case UPDATE_BASE_TIME_SCHEDULE:
      return action.response.data.updateBaseTimeSchedule;
    case UPDATE_TEMP_TIME_SCHEDULE:
      return action.response.data.updateTempTimeSchedule;
    case UPDATE_AC_NUMBER:
      return action.response.data.updateACNumber;
    case UPDATE_CF_NUMBER:
      return action.response.data.updateCFNumber;

    case DELETE_BASE_TIME_SCHEDULE:
      return action.response.data.deleteBaseTimeSchedule;
    case DELETE_TEMP_TIME_SCHEDULE:
      return action.response.data.deleteTempTimeSchedule;
    case DELETE_AC_NUMBER:
      return action.response.data.deleteACNumber;
    case DELETE_CF_NUMBER:
      return action.response.data.deleteCFNumber;

    // case DELETE_EVENT:
    //   // console.log(action.id)
    //   delete events[action.id];
    //   return { ...events };
    default:
      return events;
  }
}

export default events