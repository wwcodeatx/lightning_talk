'use strict';

function createTalk(event) {
  event.preventDefault();
  const { elements: fields } = document.forms.talk_info;
  const title = fields[0].value;
  const speaker_name = fields[1].value;
  const twitter_handle = fields[2].value;
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', '/dev/create_talk', false);

  xmlHttp.addEventListener('load', function() {
    const messageEl = document.getElementById('message');
    const optionalName = speaker_name || twitter_handle || '';
    const optionalTitle = title || '';
    const successMessage = '' +
      'Thanks' +
      ((optionalName) ? ', ' + optionalName : '') + '! ' +
      'Your talk ' +
      ((optionalTitle) ? `"${optionalTitle}"` : '') + ' ' +
      'is successfully submitted!';
    messageEl.innerHTML = successMessage;
  });

  xmlHttp.addEventListener('error', function() {
    const messageEl = document.getElementById('message');
    const errorMessage = 'ERROR: There was a problem submitting your talk.'
    messageEl.innerHTML = errorMessage;
  });

  const body = {
    title: title,
    speaker_name: speaker_name,
    twitter_handle: twitter_handle
  };

  xmlHttp.send(JSON.stringify(body));
}
