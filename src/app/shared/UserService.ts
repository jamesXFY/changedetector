import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';


import {drop, sortBy, uniq} from 'lodash';


@Injectable({
  providedIn: 'root'
}
)
export class UserService {
  constructor(private http: HttpClient) { }

  public getUser(): Observable<object> {
    // return this.http.get('http://localhost:3000/api/v1/users');
    // const test = drop([1, 2, 3]);
    // const test2 = sortBy([{id: 3}, {id: 1}, {id: 2}, {id: 4}], ob => ob.id);
    // console.log(test2);
    const test3 = uniq([1, 3, 1, 3]);
    console.log(test3);
    return of();
  }
}
