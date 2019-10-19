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
  const possibleFirstMondays = [];

  let today = new Date();
  let month = today.getMonth(); // Months are 0-indexed
  let year = today.getFullYear();
  let d = 1;

  while (d <= 7 && possibleFirstMondays.length < maxMondaysRetrieved) {
    let date = new Date(year, month, d);
    if (date.getDay() === 1) {
      // Since days of the week are also 0-indexed, it's a Monday!
      if (!(month === today.getMonth() && today.getDate() > d)) {
        // If today's date is ahead of the first monday that we're looking at, we should exclude it
        possibleFirstMondays.push(date);
      }
      if (month + 1 < 12) {
        month = month + 1;
      } else {
        year += 1;
        month = 0;
      }
    }

    if (d + 1 > 7) {
      // Reset day-of-week counter when necessary
      d = 1;
    } else {
      d++
    }
  }
  return possibleFirstMondays;
}

function populateDateDropdown() {
  const mondays = getFirstMondays();
  const dropdownEl = document.querySelector('select[name="talk_date"]');

  mondays.forEach(function(date, i) {
    const optionEl = document.createElement('option');
    const dateString = moment(date.getTime()).format('dddd MMMM Do, YYYY');
    optionEl.value = moment(date.getTime()).format('YYYY-MM-DD');
    optionEl.innerHTML = dateString;
    dropdownEl.appendChild(optionEl);
  });
}

populateDateDropdown();
