import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-63505.firebaseapp.com",
      projectId: "online-cinema-63505",
      storageBucket: "online-cinema-63505.appspot.com",
      messagingSenderId: "631597989738",
      appId: process.env.APP_ID,
      measurementId: "G-0DVGVYNR6T",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
