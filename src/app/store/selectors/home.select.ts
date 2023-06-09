import { createSelector } from "@ngrx/store";
import { AppState } from "../home.state";
import { HomeState } from "../reducers/home.reducer";


export const selectJobs = (state: AppState) => state.homestate;
export const selectAllJobs = createSelector(
    selectJobs,
  (state: HomeState) => state.jobs
);