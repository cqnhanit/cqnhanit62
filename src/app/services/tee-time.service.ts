import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class TeeTimeService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getTeeTime(): Observable<any> {
    return this.http.get<any>('https://api-test.chopet.vn/common/pet_posts?page=1&limit=20&pet_category_id=1');
  }
}
