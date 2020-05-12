// import {
//     SET_EVENTSCREAMS,
//     LOADING_EVENTDATA,
//     LIKE_EVENTSCREAM,
//     UNLIKE_EVENTSCREAM,
//     DELETE_EVENTSCREAM,
//     SET_ERRORS,
//     POST_EVENTSCREAM,
//     CLEAR_ERRORS,
//     LOADING_UI,
//     SET_EVENTSCREAM,
//     STOP_LOADING_UI,
//     SUBMIT_EVENTCOMMENT
//   } from '../types';
//   import axios from 'axios';
  
//   // Get all eventscreams
//   export const getEV Eventscreams = () => (dispatch) => {
//     dispatch({ type: LOADING_DATA });
//     axios
//       .get('/eventscreams')
//       .then((res) => {
//         dispatch({
//           type: SET_EVENTSCREAMS,
//           payload: res.data
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: SET_EVENTSCREAMS,
//           payload: []
//         });
//       });
//   };
//   export const getEventscream = (eventscreamId) => (dispatch) => {
//     dispatch({ type: LOADING_UI });
//     axios
//       .get(`/eventscream/${eventscreamId}`)
//       .then((res) => {
//         dispatch({
//           type: SET_EVENTSCREAM,
//           payload: res.data
//         });
//         dispatch({ type: STOP_LOADING_UI });
//       })
//       .catch((err) => console.log(err));
//   };
//   // Post an eventscream
//   export const postEventscream = (newEventscream) => (dispatch) => {
//     dispatch({ type: LOADING_UI });
//     axios
//       .post('/scream', newEventscream)
//       .then((res) => {
//         dispatch({
//           type: POST_EVENTSCREAM,
//           payload: res.data
//         });
//         dispatch(clearErrors());
//       })
//       .catch((err) => {
//         dispatch({
//           type: SET_ERRORS,
//           payload: err.response.data
//         });
//       });
//   };
//   // attend a eventscream
//   export const attendEventscream = (eventscreamId) => (dispatch) => {
//     axios
//       .get(`/eventscream/${eventscreamId}/like`)
//       .then((res) => {
//         dispatch({
//           type: ATTEND_SCREAM,
//           payload: res.data
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   // Submit a comment
//   export const submitEventcomment = (eventscreamId, commentEventdata) => (dispatch) => {
//     axios
//       .post(`/eventscream/${eventscreamId}/comment`, commentEventdata)
//       .then((res) => {
//         dispatch({
//           type: SUBMIT_EVENTCOMMENT,
//           payload: res.data
//         });
//         dispatch(clearErrors());
//       })
//       .catch((err) => {
//         dispatch({
//           type: SET_ERRORS,
//           payload: err.response.eventdata
//         });
//       });
//   };
//   export const deleteEventscream = (eventscreamId) => (dispatch) => {
//     axios
//       .delete(`/eventscream/${eventscreamId}`)
//       .then(() => {
//         dispatch({ type: DELETE_SCREAM, payload: eventscreamId });
//       })
//       .catch((err) => console.log(err));
//   };
  
//   export const getUserData = (userHandle) => (dispatch) => {
//     dispatch({ type: LOADING_DATA });
//     axios
//       .get(`/user/${userHandle}`)
//       .then((res) => {
//         dispatch({
//           type: SET_EVENTSCREAMS,
//           payload: res.eventdata.screams
//         });
//       })
//       .catch(() => {
//         dispatch({
//           type: SET_EVENTSCREAMS,
//           payload: null
//         });
//       });
//   };
  
//   export const clearErrors = () => (dispatch) => {
//     dispatch({ type: CLEAR_ERRORS });
//   };