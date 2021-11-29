import { AuthActionType } from './types'

const authError = {
  message: "",
};

const autherrorreducer = (state = authError, action: any) => {
  switch (action.type) {
    case AuthActionType.LOGIN_FAIL:
      return { message: action.payload };
    case AuthActionType.LOGOUT_FAIL:
      return { message: action.payload };
    case AuthActionType.REGISTER_FAIL:
      return { message: action.payload };
    default:
      return state;
  }
};

export default autherrorreducer;
