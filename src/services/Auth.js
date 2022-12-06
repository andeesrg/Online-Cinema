import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { cloudService } from './Cloud';

export class AuthService {
	constructor() {
		this.auth = getAuth(cloudService.app);
	}

	signUp(email, password) {
		return createUserWithEmailAndPassword(this.auth, email, password);
	}
}

export const authService = new AuthService();
