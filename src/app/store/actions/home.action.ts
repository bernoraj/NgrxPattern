import { createAction, props } from "@ngrx/store";
import { Jobs } from "src/app/model/jobs";


export const GetJobs=createAction('[Home] Get Jobs');
export const GetJobsSuccess=createAction('[Home] Get Jobs Success',props<{jobs:Jobs}>());
export const GetJobsFail=createAction('[Home] Get Jobs Fail',props<{error:string}>());