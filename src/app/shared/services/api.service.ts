import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BACKEND_ENDPOINT = 'http://localhost:8000/api';

  private CHANGE_ENDPOINT = 'http://api.currencylayer.com/live?access_key=8c121953f6d268609c8c117ba14e5992&currencies=EUR,CHF';

  constructor(private httpClient: HttpClient) { 
  }

  public getChanges():Observable<Object>{
    return this.httpClient.get(this.CHANGE_ENDPOINT)
  }

}
