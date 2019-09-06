import {createSelector} from '@ngrx/store';


export interface TeeTime {
  title: string;
  color: string;
  address: string;
  content: string;
  email: string;
  gender: number;
  phone_number: string;
  pet_category_id: number;
  pet_sub_category_id: number;
  uid: string;
}

export interface AppState {
  tee_time: TeeTime[];
}

export const selectTeeTime = (state: AppState) => state.tee_time;
// export const selectFeatureCount = createSelector(
//   selectTeeTime,
//   (state: TeeTime[]) => {
//     console.log('state', state);
//     return state;
//   }
// );
