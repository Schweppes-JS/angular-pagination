import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Page } from '../models/Page';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  options = {
    params: { page: '6', per_page: '2', delay: '1' }
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<Page>(this.ROOT_URL, this.options).pipe(
      map(({ data }) => data)
    );
  }
}
