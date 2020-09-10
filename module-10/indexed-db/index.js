let openRequest = indexedDB.open(name, version);

openRequest.onsuccess = () => {}
openRequest.onerror = () => {}
openRequest.onupgradeneeded = () => {}

// db.createObjectStore(name[, keyOptions]);
// db.objectStoreNames
// options = {
//     keyPath: 'name',
//     autoIncrement: true
// }