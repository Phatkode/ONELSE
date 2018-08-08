import  { Injectable } from '@angular/core'
import  { map } from "rxjs/operators"
import {Http, Response} from '@angular/http'
import { environment } from '../../environments/environment'
import { ShoutOutModel} from '../models/shoutout.model.client'
import { User } from '../models/user.model.client'
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';




// injecting service into module
@Injectable()
export class ShoutOutService {
	baseUrl = environment.baseUrl;
  
		constructor(private http: Http) { }

		// adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
		postShoutOut(shoutOut : ShoutOutModel) {
		    const url = this.baseUrl + '/api/user/' + shoutOut.userId + '/shoutOut';
		    return this.http.post(url, shoutOut).pipe(map(
		    	(response: Response) => {
		        	return response.json();
				}
			));
		  }

		updateShoutOut(shoutOut: ShoutOutModel) {
			const url = this.baseUrl + '/api/shoutOut';
			return this.http.put(url, shoutOut).pipe(map(
		    	(response: Response) => {
		        	return response.json();
				}
			));
		}
 

   retrieveShoutOutPics() {
        const url  = this.baseUrl + '/api/shoutOut/upload';
        return this.http.get(url).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
    }


		findShoutOutById(sid: string) {
			const url = this.baseUrl + '/api/shoutOut/' + sid;
			return this.http.get(url).pipe(map(
	            (response: Response) => {
	                return response.json();
	            }
	        ));
		}

		loadAllShoutOuts() {
			
	        const url = this.baseUrl + '/api/shoutOuts'

	        return this.http.get(url).pipe(map(
	            (response: Response) => {
	                return response.json();
	            }
	        ));
	    }

}



