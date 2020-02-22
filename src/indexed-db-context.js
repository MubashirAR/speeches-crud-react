import React from 'react';
if (!('indexedDB' in window)) {
  alert('indexedDB not supported');
}
let createDB = () => {
  new Promise((resolve, reject) => {
    let idb = window.indexedDB;
    var request = idb.open('mubashir-speech-repo', 1);
    request.onupgradeneeded = function(upgradeDb) {
      console.log('making a new object store');
      if (!upgradeDb.objectStoreNames.contains('users')) {
        upgradeDb.createObjectStore('users', { keyPath: 'id', autoincrement: true });
      }
      if (!upgradeDb.objectStoreNames.contains('speeches')) {
        console.log('speeches')
        let resp = upgradeDb.createObjectStore('speeches');
        console.log('speeches', resp)
      }
    }
    request.onsuccess = function (ev) {
      console.log(ev);
      resolve(ev);
    }
  })
}

export default createDB;