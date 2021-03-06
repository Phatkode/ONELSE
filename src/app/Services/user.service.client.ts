import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { User } from '../models/user.model.client'
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private SharedService: SharedService, private router: Router) { }

// users: User[] = [
// 	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
// 	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
// 	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
// 	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
// 	];

loggedIn() {

 this.options.withCredentials = true;
 return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(map(
     (res: Response) => {
       const user = res.json();
       if (user !== 0) {
         this.SharedService.user = user; // setting user so as to share with all components
         return true;
       } else {
         this.router.navigate(['/login']);
         return false;
       }
     }
   ));
}

logout() {
 this.options.withCredentials = true;
 return this.http.post(this.baseUrl + '/api/logout', '', this.options).pipe(map(
     (res: Response) => {
      this.SharedService.user = null;
       return res;
     }
   ));
}
  

login(userName: String, password: String) {
 this.options.withCredentials = true;
 const body = {
   username : userName,
   password : password
 };
 return this.http.post(this.baseUrl + '/api/login', body, this.options).pipe
   (map(
     (res: Response) => {
       return res.json();
     }
   ));
}

register(newUser) {
 // this communication will be secured
 this.options.withCredentials = true;
 return this.http.post(this.baseUrl + '/api/register', newUser, this.options).pipe
   (map(
     (res: Response) => {
       const data = res.json();
       return data;
     }
   ));
}




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




findUsers() {
        const url = this.baseUrl + '/api/user'
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
            ));
    }


   findPictureForUser(uid: string) {
        const url  = this.baseUrl + '/api/user/' + uid + '/download';
        return this.http.get(url).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
    }
}