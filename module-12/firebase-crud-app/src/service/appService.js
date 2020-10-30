import Firebase from './firebase';

export default class AppService {
  constructor() {3
    const firebase = new Firebase();
    this._collection = firebase.getDB().collection('notes');
  }

  getAllNotes() {
    return this._collection.get();
  }

  createNote(data) {
    const docName = data.docName;
    return this._collection.add(data);
  }

  deleteNote(docName) {
    return this._collection.doc(docName).delete();
  }
}
