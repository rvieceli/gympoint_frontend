import produce from 'immer';

import { SIGN_IN_SUCCESS } from '../auth/actions';

const INITIAL_STATE = {
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.user = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      default:
    }
  });
}
