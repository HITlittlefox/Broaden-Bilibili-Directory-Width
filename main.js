// ==UserScript==
// @name         Bilibili视频选集标题显示完整
// @namespace    http://tampermonkey.net/

// @version      0.7
// @description  让标题显示完整~try to change Bilibili Directory Width!
// @author       HitLittleFox
// @license      AGPL-3.0
// @match        *://www.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var changeDirectoryWidth = document.querySelector(".multi-page-v1 .cur-list .list-box")
    changeDirectoryWidth.offsetParent.style.width = "fit-content"
    var changeDirectoryWidth2 = document.querySelector(".list-box")
    var count = document.querySelector(".list-box").childElementCount
    var i = 0
    for (i = 0; i < count - 1; i++) {
        changeDirectoryWidth2.children[i].style.width = "fit-content"
    }
})();