import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpUtilService {
  constructor(private router: Router) { }

  private API_URL: String = 'http://localhost:3000/';

  url(paramets: string) {
    return this.API_URL + paramets;
  }


  headers() {
    const headersParams = new Headers({ Accept: 'application/json' });
    const options = new RequestOptions({ headers: headersParams });
    return options;
  }

  extrairDados(response: Response) {
    const data = response.json();
    return data || {};
  }

  processarErros(erro: any) {
    return Observable.throw(erro);
  }
}
