import  { Injectable } from '@angular/core'
import  { User } from '../models/user.model.client'
import  { map } from "rxjs/operators"
import {Http, Response} from '@angular/http'

import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;
  

  constructor(private http: Http) { }

// users: User[] = [
// 	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
// 	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
// 	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
// 	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
// 	];

  createUser(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ))
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))

    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {  
    //     return this.users[x]; 
    //   }
    // }
  }

  findUserByUsername(userName: string) { 
  const url = this.baseUrl + '/api/user?userName=' + userName;
  return this.http.get(url).pipe(map(
    (response: Response) => {
      return response.json();
    }
  )) 
  }

  findUserByCredentials(userName: string, password: string) { 
    const url = this.baseUrl + '/api/user?userName='+userName + '&password=' + password;
          return this.http.get(url).pipe(map(
				(response: Response) => {
          console.log(response.json())
					return response.json();
				}
          	))
        }

  updateUser(userId: string, user: User) { 

    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).pipe(map(
      (response: Response) => {
        return response.json();
      }
      ))
  }

  deleteUser(userId: string) { 
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).pipe(map(
       (response: Response) => {
         return response.json();
       }
    ))
  }
}
