// // import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
// // import axios from "axios";
// // import { BASE_URL } from "../../config";
// // import { signInSuccess, signInFailure, signInStart } from "../store/authSlice";

// // const useApiCall = (
// //   endpoint,
// //   method,
// //   startAction,
// //   successAction,
// //   failureAction,
// //   data = {}
// // ) => {
// //   const dispatch = useDispatch();

// //   const makeApiCall = async () => {
// //     try {
// //       dispatch(startAction(signInStart()));
// //       const res = await axios[method](`${BASE_URL}` / endpoint, data);
// //       dispatch(successAction(signInSuccess(res)));
// //     } catch (error) {
// //       dispatch(failureAction(signInFailure()));
// //       console.log(`Error while ${method}ing ${endpoint}`, error);
// //     }
// //   };

// //   return makeApiCall;
// // };

// // export default useApiCall;

// import axios from "axios";
// import { BASE_URL } from "../../config";
// import { signInSuccess, signInFailure, signInStart } from "../store/authSlice";
// import { useDispatch } from "react-redux";

// const useApiCall = (
//   endpoint,
//   method,
//   startAction,
//   successAction,
//   failureAction,
//   data = {}
// ) => {
//   const makeApiCall = async () => {
//     // ... rest of the makeApiCall function logic (unchanged)
//     try {
//       useDispatch(startAction(signInStart()));
//       const res = await axios[method](`${BASE_URL}` / endpoint, data);
//       useDispatch(successAction(signInSuccess(res)));
//     } catch (error) {
//       useDispatch(failureAction(signInFailure()));
//       console.log(`Error while ${method}ing ${endpoint}`, error);
//     }
//   };

//   return makeApiCall;
// };

// export default useApiCall;
