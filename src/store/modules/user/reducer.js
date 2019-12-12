import produce from 'immer';

import { SIGN_IN_SUCCESS } from '../auth/actions';

const INITIAL_STATE = {
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    default:
      return state;
  }
}
