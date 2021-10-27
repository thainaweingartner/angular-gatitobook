import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) { }

  authentication(user: string, password: string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login', {userName: user, password: password})
  }
}
