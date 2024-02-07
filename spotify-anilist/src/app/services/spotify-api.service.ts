import {Injectable} from '@angular/core';
import {APIService} from "./api.service";
import {HttpHeaders} from "@angular/common/http";
import {environment} from '../../environments/environment.development';

@Injectable({
	providedIn: 'root'
})
export class SpotifyAPIService {

	constructor(private api: APIService) {
	}

	prepareSpotifyLogin() {
		const options: any = {};
		options.headers = new HttpHeaders();
		options.headers = options.headers.set('Content-type', "application/x-www-form-urlencoded")
		options.headers = options.headers.set('Authorization', 'Basic ' + btoa(environment.spotify_app_id + ':' + environment.spotify_app_secret))

		options.body = "grant_type=client_credentials";
		return this.api.post(environment.spotify_token_url, options.body, options);
	}
}
