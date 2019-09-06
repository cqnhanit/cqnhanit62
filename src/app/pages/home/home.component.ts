import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {TeeTimeService} from '../../services/tee-time.service';
import {Store, select} from '@ngrx/store';
import {selectTeeTime} from '../../store/tee-time/selector';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tee_time = null;
  constructor(
    private seoService: SeoService,
    private teetimeService: TeeTimeService,
    private store: Store<{tee_time: any}>,
  ) {
    this.tee_time = store.pipe(select(selectTeeTime));
  }

  ngOnInit() {
    this.seoService.generateTags({
      title: 'Home Page',
      description: 'Description Home Page',
      image: 'https://mht.business/images/mht_logo1.png',
      slug: '',
      keywords: 'MHT'
    });
  }

  reload() {
    this.store.dispatch({type: 'GET_TEE_TIME'});

  }
  getDetail(id) {
    this.store.dispatch({type: 'GET_TEE_TIME_DETAIL', payload: {id}});
  }

}
