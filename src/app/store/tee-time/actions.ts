import {Action} from '@ngrx/store';

export enum actions  {
  GET_TEE_TIME = 'GET_TEE_TIME',
  GET_TEE_TIME_SUCCESS = 'GET_TEE_TIME_SUCCESS',
  GET_TEE_TIME_DETAIL = 'GET_TEE_TIME_DETAIL'
};


export class GetTeeTime implements Action {
  readonly type = actions.GET_TEE_TIME;
}

export class GetTeeTimeSuccess implements Action {
  readonly type = actions.GET_TEE_TIME_SUCCESS;

  constructor(public payload: { data: any }) {
  }
}


export class GetTeeTimeDetail implements Action {
  readonly type = actions.GET_TEE_TIME_SUCCESS;

  constructor(public payload: { id: any }) {
  }
}

export type ActionsTeeTime = GetTeeTime | GetTeeTimeSuccess | GetTeeTimeDetail;
