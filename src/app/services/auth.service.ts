import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';


const AUTH_SUCC = 'Authorization sucessful';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements InMemoryDbService {
 
  private readonly baseUrl: string = '/api/ece/issues';

  constructor() { }
  
  createDb(): Observable<Auth> {
   let auth  = new Observable<Auth>(o => {
     let newAuth : Auth = new Auth();
     newAuth.phone = '+79000000000';
     newAuth.password = 'xxxxxxxxxxxx';
     o.next(new Auth() );
  });
  
    return auth;
  }
 
}





