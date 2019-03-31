import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpUtilService } from './http-util-service';
import 'rxjs/add/operator/map';

@Injectable()
export class LedsService {
  constructor(private _http: Http, private _httpUtil: HttpUtilService) {}

  get(comodo, status) {
    const statusLed = status ? 'desligar' : 'ligar';

    return this._http
      .get(
        this._httpUtil.url('comodo' + comodo + '/' + statusLed),
        this._httpUtil.headers()
      )
      .map(this.fetchData.bind(this));
  }

  fetchData(response) {
    return response.json() || [];
  }
}
