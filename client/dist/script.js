'use strict';

function isFormValid() {
  const { elements: fields } = document.forms.talk_info;
  const title = fields[0].value;
  const speaker_name = fields[1].value;
  if (!title || !speaker_name) {
    return false;
  }

  if (title.length > 0 && speaker_name.length > 0) {
    return true;
  } else {
    return false;
  }
}

function enableSubmit(isBtnEnabled) {
  const submitBtn = document.querySelector('button[type="submit"]');
  if (submitBtn.disabled === isBtnEnabled) {
    submitBtn.disabled = !isBtnEnabled;
  }
}

function inputChangeHandler() {
  const formIsValid = isFormValid();
  enableSubmit(formIsValid);
}

function createTalk(event) {
  event.preventDefault();
  if (!isFormValid()) {
    return;
  }
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
