import {
	getFirestore,
	collection,
	doc,
	addDoc,
	getDoc,
	updateDoc,
	deleteDoc,
	getDocs
} from 'firebase/firestore';
import { cloudService } from './Cloud';

export class Database {
	constructor() {
		this._database = getFirestore(cloudService.app);
	}

	create(collectionKey, body) {
		const collectionRef = collection(this._database, collectionKey);

		return addDoc(collectionRef, body);
	}

	read(collectionKey) {
		const collectionRef = collection(this._database, collectionKey);

		return getDocs(collectionRef).then((documents) => {
			return documents.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
				};
			});
		});
	}

	readDoc(collectionKey, id) {
		const documentRef = doc(this._database, collectionKey, id);

		return getDoc(documentRef).then((doc) => doc.data());
	}

	update(collectionKey, id, body) {
		const documentRef = doc(this._database, collectionKey, id);

		return updateDoc(documentRef, body);
	}

	delete(collectionKey, id) {
		const documentRef = doc(this._database, collectionKey, id);

		return deleteDoc(documentRef);
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}