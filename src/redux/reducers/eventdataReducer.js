// import {
//     SET_EVENTSCREAMS,
//     LIKE_EVENTSCREAM,
//     UNLIKE_EVENTSCREAM,
//     LOADING_EVENTDATA,
//     DELETE_EVENTSCREAM,
//     POST_EVENTSCREAM,
//     SET_EVENTSCREAM,
//     SUBMIT_EVENTCOMMENT
//   } from '../types';
  
//   const initialState = {
//     eventscreams: [],
//     eventscream: {},
//     loading: false
//   };
  
//   export default function(state = initialState, action) {
//     switch (action.type) {
//       case LOADING_EVENTDATA:
//         return {
//           ...state,
//           loading: true
//         };
//       case SET_EVENTSCREAMS:
//         return {
//           ...state,
//           eventscreams: action.payload,
//           loading: false
//         };
//       case SET_EVENTSCREAM:
//         return {
//           ...state,
//           eventscream: action.payload
//         };
//       case LIKE_EVENTSCREAM:
//       case UNLIKE_EVENTSCREAM:
//         let index = state.eventscreams.findIndex(
//           (eventscream) => eventscream.eventscreamId === action.payload.eventscreamId
//         );
//         state.eventscreams[index] = action.payload;
//         if (state.eventscream.eventscreamId === action.payload.eventscreamId) {
//           state.eventscream = action.payload;
//         }
//         return {
//           ...state
//         };
//       case DELETE_EVENTSCREAM:
//         index = state.eventscreams.findIndex(
//           (eventscream) => eventscream.eventscreamId === action.payload
//         );
//         state.eventscreams.splice(index, 1);
//         return {
//           ...state
//         };
//       case POST_EVENTSCREAM:
//         return {
//           ...state,
//           eventscreams: [action.payload, ...state.eventscreams]
//         };
//       case SUBMIT_EVENTCOMMENT:
//         return {
//           ...state,
//           eventscream: {
//             ...state.eventscream,
//             comments: [action.payload, ...state.eventscream.comments]
//           }
//         };
//       default:
//         return state;
//     }
//   }