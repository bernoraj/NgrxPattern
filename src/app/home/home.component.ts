import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllJobs } from '../store/selectors/home.select';
import { GetJobs } from '../store/actions/home.action';
import { AppState } from '../store/home.state';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private store: Store<AppState> ,private homeservice:HomeService){}
public allJobs$:any;
//public allJobs$ = this.store.select(selectAllJobs);

ngOnit(){
 // this.store.dispatch(GetJobs());
 this.homeservice.getJobs1().data;
}
}


