import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';


const AUTH_SUCC = 'Authorization sucessful';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  private readonly baseUrl: string = '/api/auth';

  constructor(private httpClient: HttpClient) { 

  }
  
  get = () => this.httpClient.get<Auth[]>(this.baseUrl);
 
  


}





