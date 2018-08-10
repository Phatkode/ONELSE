import  { Injectable } from '@angular/core'
import  { CalendarPostModel } from '../models/calendarpost.model.client'
import  { map } from "rxjs/operators"
import {Http, Response} from '@angular/http'
import { User } from '../models/user.model.client'
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()
export class CalPostService {
  baseUrl = environment.baseUrl;
  
  constructor(private http: Http) { }

		// adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
		createCalendarPost(calendarPost: CalendarPostModel) {
		    const url = this.baseUrl + '/api/user/' + calendarPost.userId + '/calendarPost';
		    return this.http.post(url, calendarPost).pipe(map(
		    	(response: Response) => {
		        	return response.json();
				}
			));
		  }

		updateCalendarPost(calendarPost: CalendarPostModel) {
			const url = this.baseUrl + '/api/calendarPost';
			return this.http.put(url, calendarPost).pipe(map(
		    	(response: Response) => {
		        	return response.json();
				}
			));
		}
 

	   retrieveCalendarPostPics() {
	        const url  = this.baseUrl + '/api/calendarPost/upload';
	        return this.http.get(url).pipe(map(
	            (res: Response) => {
	                return res.json();
	            }
	        ));
	    }


		findCalendarPostById(cid: string) {
			const url = this.baseUrl + '/api/calendarPost/' + cid;
			return this.http.get(url).pipe(map(
	            (response: Response) => {
	                return response.json();
	            }
	        ));
		}

		loadAllCalendarPosts() {
			
	        const url = this.baseUrl + '/api/calendarPosts'

	        return this.http.get(url).pipe(map(
	            (response: Response) => {
	                return response.json();
	            }
	        ));
	    }



}


    
