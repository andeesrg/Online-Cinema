import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-6373b.firebaseapp.com",
      projectId: "online-cinema-6373b",
      storageBucket: "online-cinema-6373b.appspot.com",
      messagingSenderId: "162715506861",
      appId: process.env.APP_ID
    }
    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
