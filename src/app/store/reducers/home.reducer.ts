import { createReducer, on, Action } from "@ngrx/store";
import { Jobs } from "src/app/model/jobs";
import { GetJobs, GetJobsFail, GetJobsSuccess } from "../actions/home.action";
import { AppState } from "../home.state";

export interface HomeState{
    jobs:Jobs;
    error:string;
    status: 'Pending' | 'Success'| 'Fail';

}

export const initialAppState:HomeState={
jobs:{} as Jobs,
error:'',
status:'Pending'
}

export const homeReducer=createReducer(
    initialAppState,
    on(GetJobs,(state:HomeState)=>({...state})),
    on(GetJobsSuccess,(state:HomeState,{jobs})=>({
        ...state,
        jobs:jobs,
        status:'Success'
    })),
    on(GetJobsFail,(state:HomeState,{error})=>({
        ...state,
        status:"Fail"

    }))
    );