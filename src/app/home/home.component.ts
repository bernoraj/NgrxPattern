import { Component, OnInit } from '@angular/core';
import { Store, createAction, select } from '@ngrx/store';

import { HomeService } from '../services/home.service';
import { getTasks, selectJobs } from '../store/selectors/home.select';
import * as fromReducer from "../store/reducers/home.reducer";
import * as fromAction from '../store/actions/home.action';
import * as fromSelect from '../store/selectors/home.select';
import { Observable } from 'rxjs';
import { Jobs } from '../model/jobs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public jobs$: Observable<any>;
  public data=[];
constructor(private store: Store<fromReducer.State> ,private homeservice:HomeService){
  this.store.dispatch(fromAction.getJobs());
  this.jobs$=this.store.select(fromSelect.getTasks);
}



ngOnInit(){



this.jobs$.subscribe(res => this.data=res.State.jobs.data);
}


}
