import axios from "axios";
import { AuthActionType } from './types'

const RegisterAuthAction = (userState: any) => {
   return async (dispatch: any) => {
      try {
         const { data } = await axios.post("register", userState);
         dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
         // if (myHandler) myHandler();
      } catch (error: any) {
         if (error.response) {
            dispatch({
               type: AuthActionType.REGISTER_FAIL,
               payload: error.response.data.message,
            });
            // setErrorHandler(error.response.data.message);
         } else {
            // setErrorHandler(error.message);
         }
      }
   };
};

const LoginStatusAction = () => {
   return async (dispatch: any) => {
      try {
         const data = await axios.get("auth");
         dispatch({ type: AuthActionType.STATUS_SUCCESS, payload: data.data });
         // if (myHandler) myHandler();
      } catch (error: any) {
         if (error.response) {
            dispatch({
               type: AuthActionType.STATUS_FAIL,
               payload: error.response.data.message,
            });
            // setErrorHandler(error.response.data.message);
         } else {
            // setErrorHandler(error.message);
         }
      }
   };
}

const LoginAuthAction = (loginState: any) => {
   return async (dispatch: any) => {
      try {
         const data = await axios.post("/auth/login", loginState);
         dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data.data });
         // if (myHandler) myHandler();
      } catch (error: any) {
         if (error.response) {
            dispatch({
               type: AuthActionType.LOGIN_FAIL,
               payload: error.response.data.message,
            });
            // setErrorHandler(error.response.data.message);
         } else {
            // setErrorHandler(error.message);
         }
      }
   };
};

const LogOutAuthAction = () => {
   return async (dispatch: any) => {
      try {
         await axios.post("/auth/logout");
         dispatch({
            type: AuthActionType.LOGOUT_SUCCESS,
            payload: "",
         });
      } catch (error: any) {
         if (error.response) {
            dispatch({
               type: AuthActionType.LOGOUT_FAIL,
               payload: error.message,
            });
         }
      }
   };
};

export {
   RegisterAuthAction,
   LogOutAuthAction,
   LoginAuthAction,
   LoginStatusAction
};
