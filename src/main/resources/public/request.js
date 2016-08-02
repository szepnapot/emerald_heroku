'use strict';

const request = (function(){
  const host = "/meals";

  function xhrRequest(method, url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
      if (xhr.readyState === xhr.DONE) {
        callback(xhr.response);
      }
    };
    xhr.send(data);
  }

  function getAllfromDatabase(callback) {
    xhrRequest('GET', host, null, callback);
  }

  function getFilterfromDatabase(filter, callback) {
    let url = host + '/?filter=' + filter;
    xhrRequest('GET', url, null, callback);
  }

  function addElementDatabase(inputdata, callback) {
    xhrRequest('POST', host, inputdata, callback);
  }

  function deleteElement(iD, callback) {
    xhrRequest('DELETE', host + '/' + iD, null, callback);
  }

  return {
    deleteElement,
    getAllfromDatabase,
    addElementDatabase,
    getFilterfromDatabase,
  };
}());
