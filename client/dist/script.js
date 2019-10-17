'use strict';

function createTalk(event) {
  event.preventDefault();
  const { elements: fields } = document.forms.talk_info;
  const title = fields[0].value;
  const speaker_name = fields[1].value;
  const twitter_handle = fields[2].value;
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', '/dev/create_talk', false);
  const body = {
    title: title,
    speaker_name: speaker_name,
    twitter_handle: twitter_handle
  };
  xmlHttp.send(JSON.stringify(body));
  document.getElementById('message').innerHTML = xmlHttp.responseText;
}
