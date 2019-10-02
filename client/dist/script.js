"use strict";

function createTalk(event) {
    event.preventDefault()
    const title = document.forms.talk_info.elements[0].value
    const twitter_handle = document.forms.talk_info.elements[1].value
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open("POST", "/dev/create_talk", false)
    const body = {
        "title": title,
        "twitter_handle": twitter_handle
    }
    xmlHttp.send(JSON.stringify(body));
    document.getElementById("message").innerHTML = xmlHttp.responseText
}