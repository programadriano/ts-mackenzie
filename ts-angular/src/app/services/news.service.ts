import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpUtilService } from '../services/http-util.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { News } from '../models/news';



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private path = 'news';

  constructor(private http: Http, private httpUtil: HttpUtilService) {}

  getAll(): Observable<News[]> {
    return this.http
      .get(this.httpUtil.url(this.path), this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
}
