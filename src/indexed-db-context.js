import React from 'react';
if (!('indexedDB' in window)) {
  alert('indexedDB not supported');
}
let createDB = () => {
  new Promise((resolve, reject) => {
    let idb = window.indexedDB;
    var request = idb.open('mubashir-speech-repo', 1);
    request.onupgradeneeded = function(event) {
      var upgradeDb = event.target.result;
      if (!upgradeDb.objectStoreNames.contains('users')) {
        console.log('create users');
        let users = upgradeDb.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
      }
      if (!upgradeDb.objectStoreNames.contains('speeches')) {
        console.log('create speeches');
        let speeches = upgradeDb.createObjectStore('speeches', { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = function(ev) {
      console.log(ev);
      resolve(ev);
    };
  });
};
export const addItem = (data, storeName) => {
  return new Promise((resolve, reject) => {
    let request = window.indexedDB.open('mubashir-speech-repo', 1);
    request.onsuccess = ev => {
      let db = ev.target.result;
      let transaction = db.transaction(storeName, 'readwrite');
      transaction.onsuccess = ev => {
        resolve(ev);
      };
      transaction.onerror = e => {
        reject(e);
      }
      transaction.objectStore(storeName).add(data);
    };
    request.onerror = e => {
      reject(e);
    }
  })
};
export const getItems = (storeName) => {
  return new Promise((resolve, reject) => {
    let request = window.indexedDB.open('mubashir-speech-repo', 1);
    request.onsuccess = ev => {
      let db = ev.target.result;
      let transaction = db.transaction(storeName, 'readonly');
      transaction.onsuccess = ev => {
        resolve(ev);
      };
      transaction.onerror = e => {
        reject(e);
      }
      let getReq = transaction.objectStore(storeName).getAll();
      getReq.onsuccess = ev => {
        resolve(ev.target.result);
      };
      getReq.onerror = e => {
        reject(e);
      }
      
    };
    request.onerror = e => {
      reject(e);
    }
  })
};

export default createDB;
