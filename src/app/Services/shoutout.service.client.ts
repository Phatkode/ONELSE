import  { Injectable } from '@angular/core'
import  { ShoutOutModel } from '../models/shoutout.model.client'
import  { map } from "rxjs/operators"
import {Http, Response} from '@angular/http'

import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class ShoutOutService {

  baseUrl = environment.baseUrl;
  

  constructor(private http: Http) { }

   
 // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
  createShoutOut(shoutOut_id: string, ShoutOut : ShoutOutModel) {
    const url = this.baseUrl + '/api/website/'+ shoutOut_id +'/ShoutOut';
    return this.http.post(url, ShoutOut).pipe(map(
      (response: Response) => {
        return response.json();
}))}
//   findShoutOutById(shoutOut_id, string) {
//     const url = this.baseUrl + '/api/user/' + shoutOut_id;
//     return this.http.get(url).pipe(map(
//       (response: Response) => {
//         return response.json();
//       }
//     ))

//     // for (let x = 0; x < this.users.length; x++) {
//     //   if (this.users[x]._id === userId) {  
//     //     return this.users[x]; 
//     //   }
//     // }
//   }

//   findShoutOutByShoutOutname(nameShoutOut, string) { 
//   const url = this.baseUrl + '/api/user?nameShoutOut=' + nameShoutOut;
//   return this.http.get(url).pipe(map(
//     (response: Response) => {
//       return response.json();
//     }
//   )) 
//   }

//   findUserByCredentials(userName: string, password: string) { 
//     const url = this.baseUrl + '/api/user?userName='+userName + '&password=' + password;
//           return this.http.get(url).pipe(map(
// 				(response: Response) => {
//           console.log(response.json())
// 					return response.json();
// 				}
//           	))
//         }

//   updateUser(userId: string, user: User) { 

//     const url = this.baseUrl + '/api/user/' + userId;
//     return this.http.put(url, user).pipe(map(
//       (response: Response) => {
//         return response.json();
//       }
//       ))
//   }

//   deleteUser(userId: string) { 
//     const url = this.baseUrl + '/api/user/' + userId;
//     return this.http.delete(url).pipe(map(
//        (response: Response) => {
//          return response.json();
//        }
//     ))
//   }
}
