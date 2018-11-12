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
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {auth};
  }
}

