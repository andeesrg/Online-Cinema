import { initializeApp } from 'firebase/app';

export class CloudService {
	constructor() {
		this.config = {
			apiKey: process.env.API_KEY,
			authDomain: 'it-online-cinema.firebaseapp.com',
			projectId: 'it-online-cinema',
			storageBucket: 'it-online-cinema.appspot.com',
			messagingSenderId: '935354104746',
			appId: process.env.APP_KEY,
			measurementId: 'G-CEB70D1J00',
		};

		const app = initializeApp(firebaseConfig);
	}
}

export const cloudService = new CloudService();
