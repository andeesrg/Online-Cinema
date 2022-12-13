import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { cloudService } from "./Cloud";

class Storage {
  constructor() {
    this.storage = getStorage(cloudService.app);
  }


  uploadPoster(file) {
    const posterRef = ref(this.storage, `/posters/${file.name}`);
    return uploadBytes(posterRef, file);
  }

  getDownloadURL(ref) {
    return getDownloadURL(ref);
  }

}

export const storageService = new Storage();
