import { AuthActionType } from './types'

const initialState = {
   isLoggedIn: false,
   user: {
      name: "",
      //    expires_at: "",
      //    jwttoken: "",
      //    // authorities: [],
   },
};

const getInitialState = () => {
   return initialState;
};

let newAuth = getInitialState();

const authreducer = (state = newAuth, action: any) => {
   switch (action.type) {
      case AuthActionType.STATUS_SUCCESS:
         const loginStatusState = {
            isLoggedIn: true,
            user: action.payload,
         };
         return loginStatusState;
      case AuthActionType.LOGIN_SUCCESS:
         const loginAuthState = {
            isLoggedIn: true,
            user: action.payload,
         };
         return loginAuthState;
      case AuthActionType.LOGOUT_SUCCESS:
         return initialState;
      case AuthActionType.REGISTER_SUCCESS:
         const newAuthState = {
            isLoggedIn: true,
            user: action.payload,
         };
         return newAuthState;
      default:
         return state;
   }
};

export default authreducer;