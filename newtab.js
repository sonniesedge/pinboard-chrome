'use strict';


var apitokenInputName = 'apitokenHolder';
var apiSubmitName = 'apiSubmitnHolder'
var apitoken = localStorage.apitoken
var pinboardapi = "https://api.pinboard.in/v1";

var apitokenInput = document.getElementById(apitokenInputName);
var apitokenSubmit = document.getElementById(apiSubmitName);

var url = pinboardapi + "/posts/recent" + "?auth_token=" + apitoken + "&format=json";

var populateApiTokenInput = function() {
  var token =  localStorage.apitoken;

  if (token.length > 0) {
    apitokenInput.value = localStorage.apitoken;
  }
}

// Save API token to localstorage
var saveApitoken = function(apitoken) {
  localStorage.apitoken = apitoken;
}

// Get API token from localstorage
var getApitoken = function() {
  return localStorage.apitoken;
}

// Listen for an APItoken entry
apitokenSubmit.addEventListener('click', function(){
  saveApitoken(apitokenInput.value);
  console.log("New apitoken value is: " + getApitoken());
  // makeConnection();
});


var makeConnection = function() {
  if (!getApitoken().length > 0) {
    console.log('error getting token!');
    return;
  }
  var url = pinboardapi + "/posts/recent" + "?auth_token=" + apitoken + "&format=json";


  // make a connection
  var xhr = new XMLHttpRequest();
  var useAsync = false;
  xhr.open("GET", url, useAsync);
  xhr.onreadystatechange = function() {
    console.log("data comes back");
    // console.log(JSON.parse(xhr.response));
    // if (xhr.readyState == 4) {
    //   var resp = JSON.parse(xhr.responseText);
    // }
  }
  xhr.send();
}

// Wait for page to load then run scripts
document.addEventListener("DOMContentLoaded", function() {
  // chrome.management.getAll(getAllCallback);
  console.log("Page load!");
  populateApiTokenInput();
  makeConnection();
});


// get recent posts from API

// add new posts  from api to local database

// retrieve posts that are unread from db

// mark post as read in db
