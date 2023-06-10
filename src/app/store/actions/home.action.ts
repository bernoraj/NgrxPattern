import { createAction, props } from "@ngrx/store";
import { Jobs } from "src/app/model/jobs";


export const GET_JOBS='[Home] Get Jobs';
export const GET_JOBS_SUCCESS='[Home] Get Jobs Success';
export const GET_JOBS_FAILURE='[Home] Get Jobs Fail';

export const getJobs=createAction(
    GET_JOBS
);
export const getJobsSuccess=createAction(
    GET_JOBS_SUCCESS,
    props<{data:Jobs}>()
);
export const getJobsFail=createAction(
    GET_JOBS_FAILURE,
    props<{any: any}>()
);