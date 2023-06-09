import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from "../home.state";
import { Store } from "@ngrx/store";
import { GetJobs, GetJobsFail, GetJobsSuccess } from "../actions/home.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import { HomeService } from "src/app/services/home.service";

@Injectable()
export class HomeEffects{

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private homeService:HomeService){}

    loadJobs$=createEffect(()=>this.actions$.pipe(
        ofType(GetJobs),
        switchMap(() => from(this.homeService.getJobs()).pipe(
            map((jobs: any) => GetJobsSuccess({ jobs: jobs })),
            catchError((error) => of(GetJobsFail({ error })))
        ))));  
}