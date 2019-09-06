import {createReducer, on} from '@ngrx/store';
import *  as TeeTime from './actions';

export const initState = {
  items: [],
  error: null,
  loading: false,
  item: null
};

export default function TeeTimeReducer(state = initState, action) {
  switch (action.type) {
    case TeeTime.actions.GET_TEE_TIME: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case TeeTime.actions.GET_TEE_TIME_SUCCESS: {
      console.log('action GET_TEE_TIME_SUCCESS', action)
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    }

    case TeeTime.actions.GET_TEE_TIME_DETAIL: {
      console.log('action GET_TEE_TIME_DETAIL', action)
      return {
        ...state,
        item: state.items.find(i => i.id === action.payload.id)
      };
    }
    default: {
      return state;
    }
  }
}
