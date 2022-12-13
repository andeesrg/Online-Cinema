import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { cloudService } from "./Cloud";

export class AuthService {
  constructor() {
    this.auth = getAuth(cloudService.app);
    this._user = null;
  }

  set user(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  init() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(
        this.auth,
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signUp(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }

  signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}

export const authService = new AuthService();
