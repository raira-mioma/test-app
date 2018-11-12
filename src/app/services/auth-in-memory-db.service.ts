import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthInMemoryDbService implements InMemoryDbService {
  
  constructor() { }

  createDb() {
    let auth = [
      
    ];
    return {auth};
  }
}

