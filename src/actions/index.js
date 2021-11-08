import axios from "axios";
import { API, graphqlOperation } from "aws-amplify";
import * as Q from '../graphql/queries';
import * as M from '../graphql/mutations';
import * as S from '../graphql/subscriptions';

export const FETCH_BASE_TIME_SCHEDULES = 'FETCH_BASE_TIME_SCHEDULES';
export const FETCH_TEMP_TIME_SCHEDULES = 'FETCH_TEMP_TIME_SCHEDULES';
export const FETCH_AC_NUMBERS = 'FETCH_AC_NUMBERS';
export const FETCH_CF_NUMBERS = 'FETCH_CF_NUMBERS';

export const CREATE_BASE_TIME_SCHEDULE = 'CREATE_BASE_TIME_SCHEDULE';
export const CREATE_TEMP_TIME_SCHEDULE = 'CREATE_TEMP_TIME_SCHEDULE';
export const CREATE_AC_NUMBER = 'CREATE_AC_NUMBER';
export const CREATE_CF_NUMBER = 'CREATE_CF_NUMBER';

export const UPDATE_BASE_TIME_SCHEDULE = 'UPDATE_BASE_TIME_SCHEDULE';
export const UPDATE_TEMP_TIME_SCHEDULE = 'UPDATE_TEMP_TIME_SCHEDULE';
export const UPDATE_AC_NUMBER = 'UPDATE_AC_NUMBER';
export const UPDATE_CF_NUMBER = 'UPDATE_CF_NUMBER';

export const DELETE_BASE_TIME_SCHEDULE = 'DELETE_BASE_TIME_SCHEDULE';
export const DELETE_TEMP_TIME_SCHEDULE = 'DELETE_TEMP_TIME_SCHEDULE';
export const DELETE_AC_NUMBER = 'DELETE_AC_NUMBER';
export const DELETE_CF_NUMBER = 'DELETE_CF_NUMBER';

export const ON_CREATE_BASE_TIME_SCHEDULE = 'ON_CREATE_BASE_TIME_SCHEDULE';
export const ON_UPDATE_BASE_TIME_SCHEDULE = 'ON_UPDATE_BASE_TIME_SCHEDULE';
export const ON_DELETE_BASE_TIME_SCHEDULE = 'ON_DELETE_BASE_TIME_SCHEDULE';

export const ON_CREATE_TEMP_TIME_SCHEDULE = 'ON_CREATE_TEMP_TIME_SCHEDULE';
export const ON_UPDATE_TEMP_TIME_SCHEDULE = 'ON_UPDATE_TEMP_TIME_SCHEDULE';
export const ON_DELETE_TEMP_TIME_SCHEDULE = 'ON_DELETE_TEMP_TIME_SCHEDULE';

export const ON_CREATE_AC_NUMBER = 'ON_CREATE_AC_NUMBER';
export const ON_UPDATE_AC_NUMBER = 'ON_UPDATE_AC_NUMBER';
export const ON_DELETE_AC_NUMBER = 'ON_DELETE_AC_NUMBER';

export const ON_CREATE_CF_NUMBER = 'ON_CREATE_CF_NUMBER';
export const ON_UPDATE_CF_NUMBER = 'ON_UPDATE_CF_NUMBER';
export const ON_DELETE_CF_NUMBER = 'ON_DELETE_CF_NUMBER';

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUERYSTRING = "?token=token123"

// export const getEvent = id => async dispatch => {
//     const response = await API.graphql(graphqlOperation(listBaseTimeSchedules))
//     // const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
//     // console.log(response)
//     dispatch({ type: READ_EVENT, response })
// }


// MARK: - Query: List

export const fetchBaseTimeSchedules = () => async dispatch => {
    try {
        const response = await API.graphql(graphqlOperation(Q.listBaseTimeSchedules))
        dispatch({ type: FETCH_BASE_TIME_SCHEDULES, response })
    } catch(error) {
        dispatch({ type: FETCH_BASE_TIME_SCHEDULES, error })
    }
}

export const fetchTempTimeSchedules = () => async dispatch => {
    const response = await API.graphql(graphqlOperation(Q.listTempTimeSchedules))
    dispatch({ type: FETCH_TEMP_TIME_SCHEDULES, response })
}

export const fetchACNumbers = () => async dispatch => {
    const response = await API.graphql(graphqlOperation(Q.listACNumbers))
    dispatch({ type: FETCH_AC_NUMBERS, response })
}

export const fetchCFNumbers = () => async dispatch => {
    const response = await API.graphql(graphqlOperation(Q.listCFNumbers))
    dispatch({ type: FETCH_CF_NUMBERS, response })
}

// MARK: - Mutation: Create

export const createBaseTimeSchedule = values => async dispatch => {
    console.log(values)
    const response = await API.graphql(graphqlOperation(M.createBaseTimeSchedule, {input: values}))
    dispatch({ type: CREATE_BASE_TIME_SCHEDULE, response })
}

export const createTempTimeSchedule = values => async dispatch => {
    const response = await API.graphql(graphqlOperation(M.createTempTimeSchedule, {input: values}))
    dispatch({ type: CREATE_TEMP_TIME_SCHEDULE, response })
}

export const createACNumber = values => async dispatch => {
    const response = await API.graphql(graphqlOperation(M.createACNumber, {input: values}))
    dispatch({ type: CREATE_AC_NUMBER, response })
}

export const createCFNumber = values => async dispatch => {
    try {
        const response = await API.graphql(graphqlOperation(M.createCFNumber, {input: values}))
        dispatch({ type: CREATE_CF_NUMBER, response })
    } catch(error) {
        dispatch({ type: CREATE_CF_NUMBER, error })
    }
}

// MARK: - Mutation: Update

export const updateBaseTimeSchedule = values => async dispatch => {
    const response = await API.graphql(graphqlOperation(M.updateBaseTimeSchedule, {input: values}))
    dispatch({ type: UPDATE_BASE_TIME_SCHEDULE, response })
}

export const updateTempTimeSchedule = values => async dispatch => {
    const response = await API.graphql(graphqlOperation(M.updateTempTimeSchedule, {input: values}))
    dispatch({ type: UPDATE_TEMP_TIME_SCHEDULE, response })
}

export const updateACNumber = values => async dispatch => {
    const response = await API.graphql(graphqlOperation(M.updateACNumber, {input: values}))
    dispatch({ type: UPDATE_AC_NUMBER, response })
}

export const updateCFNumber = values => async dispatch => {
    const response = await API.graphql(graphqlOperation(M.updateCFNumber, {input: values}))
    dispatch({ type: UPDATE_CF_NUMBER, response })
}

// MARK: - Mutation: Delete

export const deleteBaseTimeSchedule = id => async dispatch => {
    await API.graphql(graphqlOperation(M.deleteBaseTimeSchedule, {input: {id: id}}))
    dispatch({ type: DELETE_BASE_TIME_SCHEDULE, id })
}

export const deleteTempTimeSchedule = id => async dispatch => {
    await API.graphql(graphqlOperation(M.deleteTempTimeSchedule, {input: {id: id}}))
    dispatch({ type: DELETE_TEMP_TIME_SCHEDULE, id })
}

export const deleteACNumber = id => async dispatch => {
    await API.graphql(graphqlOperation(M.deleteACNumber, {input: {id: id}}))
    dispatch({ type: DELETE_AC_NUMBER, id })
}

export const deleteCFNumber = id => async dispatch => {
    await API.graphql(graphqlOperation(M.deleteCFNumber, {input: {id: id}}))
    dispatch({ type: DELETE_CF_NUMBER, id })
}

// MARK: - Subscription

export const onCreateBaseTimeSchedule = () => async dispatch => {
    try {
        const subscription = await API.graphql(graphqlOperation(S.onCreateBaseTimeSchedule)).subscribe({
            next: (eventData) => {
              const response = eventData.value.data.onCreateBaseTimeSchedule;
              dispatch({ type: ON_CREATE_BASE_TIME_SCHEDULE, response });
            }
          });
          return () => subscription.unsubscribe();
    } catch(error) {
        dispatch({ type: ON_CREATE_BASE_TIME_SCHEDULE, error })
    }
}


// export const putEvent = values => async dispatch => {
//     const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
//     dispatch({ type: UPDATE_EVENT, response })
// }

// export const deleteEvent = id => async dispatch => {
//     await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
//     dispatch({ type: DELETE_EVENT, id })
// }