"use strict";

function createTalk(event) {
    event.preventDefault()
    const { elements: fields } = document.forms.talk_info
    const title = fields[0].value
    const speaker_name = fields[1].value
    const twitter_handle = fields[2].value
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open("POST", "/dev/create_talk", false)
    const body = {
        "title": title,
        "speaker_name": speaker_name,
        "twitter_handle": twitter_handle
    }
    xmlHttp.send(JSON.stringify(body));
    document.getElementById("message").innerHTML = xmlHttp.responseText
}


function getFirstMondays(maxMondaysRetrieved = 5) {
  // Gets first n (maxMondaysRetrieved) Mondays from today's date
  let today = new Date();
  let month = today.getMonth(); // Months are 0-indexed
  let year = today.getFullYear();

  const possibleMondays = [];

  for (let d = 1; d <= 7 && possibleMondays.length < maxMondaysRetrieved; d++) {
    let date = new Date(year, month, d);
    if (date.getDay() === 1) {
      // Since days of the week are also 0-indexed, it's a Monday!
      if (month === today.getMonth() && today.getDate() > d) {
      } else {
        possibleMondays.push(date);
      }
      month = (month + 1 < 12) ? month + 1 : ++year && 0;
      d = 1;
    }
  }
  return possibleMondays;
}
