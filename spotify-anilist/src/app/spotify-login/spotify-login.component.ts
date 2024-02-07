import {Component, OnInit} from '@angular/core';
import {SpotifyAPIService} from "../services/spotify-api.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
	selector: 'app-spotify-login',
	standalone: true,
	imports: [],
	templateUrl: './spotify-login.component.html',
	styleUrl: './spotify-login.component.scss'
})
export class SpotifyLoginComponent implements OnInit {


	constructor(private spotifyService: SpotifyAPIService) {
	}

	ngOnInit() {
		const Obs$ = this.spotifyService.prepareSpotifyLogin();

		Obs$.subscribe({
			next: (value) => {
				console.log(value)
			},
			error: (error) => {
				console.log(error)
			}
		});
	}
}
