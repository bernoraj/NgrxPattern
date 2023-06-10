import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import { HomeService } from "src/app/services/home.service";
import * as GlobalAction from "../actions/home.action";
import { Jobs } from "src/app/model/jobs";
@Injectable()
export class HomeEffects{

    constructor(
        private actions$: Actions,      
        private homeService:HomeService){}

      
    loadJobs$=createEffect(()=>this.actions$.pipe(
        ofType(GlobalAction.getJobs),
        switchMap(() => from(this.homeService.getJobs1()).pipe(
            map((response: Jobs) =>  {console.log("response:::", response);  return GlobalAction.getJobsSuccess({data:response})}),
            catchError((error) => of(GlobalAction.getJobsFail(error)))
        ))));  
}