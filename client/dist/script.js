"use strict";

function createTalk() {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open("POST", "/dev/create_talk", false)
    const body = {
        "title": "test title"
    }
    xmlHttp.send(JSON.stringify(body));
    document.getElementById("message").innerHTML = xmlHttp.responseText
}