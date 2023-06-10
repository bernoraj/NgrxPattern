import { createReducer, on, Action } from "@ngrx/store";
import { Jobs } from "src/app/model/jobs";
import * as GlobalAction from "../actions/home.action";


export interface State{
    jobs:Jobs;
    error:string;
    isLoaded:boolean;
    //status: 'Pending' | 'Success'| 'Fail';

}

export const initialAppState:State={
jobs:{} as Jobs,
error:'',
isLoaded:false  
//status:'Pending'
}

export const homeReducer=createReducer(
    initialAppState,
    on(GlobalAction.getJobs,(state:any)=>({...state})),
    on(GlobalAction.getJobsSuccess,(state,{data})=>({
        error:'',       
       // status:'Success',
        jobs:data, 
        isLoaded:true       
    })),

    // on(GlobalAction.getJobsSuccess,(state,{data})=>({
    //     error:'',       
    //    // status:'Success',
    //     jobs:data,        
    // })),
    on(GlobalAction.getJobsFail,(state,error)=>({
        ...state,
        status:error.any

    }))
    );

 
export function getAllJobs(state: State | undefined, action:any) {
   
    return homeReducer(state, action);
  }

  