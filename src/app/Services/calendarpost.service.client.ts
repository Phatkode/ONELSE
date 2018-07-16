import  { Injectable } from '@angular/core'
import  { CalendarPostModel } from '../models/calendarpost.model.client'
import  { map } from "rxjs/operators"
import {Http, Response} from '@angular/http'

import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class CalPostService {

  baseUrl = environment.baseUrl;
  

  constructor(private http: Http) { }}

export class CalendarPost {}
    

//     CalPosts: CalPost = [
//         {_id: "123", shoutOut_id:"123", typeShout: "Dining", 
//         nameShout: "jala", descriptionShout: "jala", locationShout: "jala", 
//         dateShout: "Dining", timeShout: "jala", websiteShout: "jala"},

//         {_id: "321", shoutOut_id:"321", typeShout: "Dining", 
//         nameShout: "lisha", descriptionShout: "lisha", locationShout: "lisha", 
//         dateShout: "lisha", timeShout: "lisha", websiteShout: "lisha"},

//         {_id: "111", shoutOut_id:"111", typeShout: "Dining", 
//         nameShout: "guest", descriptionShout: "guest", locationShout: "guest", 
//         dateShout: "guest", timeShout: "guest", websiteShout: "guest"},

//         {_id: "123", shoutOut_id:"777", typeShout: "Education", 
//         nameShout: "mama", descriptionShout: "dada", locationShout: "mama", 
//         dateShout: "Dining", timeShout: "dada", websiteShout: "jala"}
//         ];  
//  // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
//   createShoutOut(shoutOut_id: string, ShoutOut : ShoutOut) {
//     const url = this.baseUrl + '/api/website/'+ shoutOut_id +'/ShoutOut';
//     return this.http.post(url, ShoutOut).pipe(map(
//       (response: Response) => {
//         return response.json();
// }))}
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
