import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from "../reducers/home.reducer";



// export const selectJobs = (state: AppState) => state.homestate;
// export const selectAllJobs = createSelector(
//     selectJobs,
//     state => state?.jobs
// );

//export const getAllJobs = createFeatureSelector<fromReducer.State>('jobs');
export const selectJobs = (state: fromReducer.State) => state;

export const getTasks = createSelector(
  selectJobs,  
  state=>state
);