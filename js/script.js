// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-6-02/sw.js", {
    scope: "/ICS2O-6-02/",
  })
}

if (localStorage.onclick) {
  localStorage.onclick = Number(localStorage.onclick) + 1
} else {
  localStorage.onclick = 1
}
document.write("Total Hits :" + localStorage.onclick)
