$(document).ready(function(){

  const otherTopic =
    `<div class="input-field col s12 m8 l6">
      <input placeholder="Enter topic here" id="otherType" type="text">
    </div>`

  const start =
    `<div class="input-field col s12 m8 l6">
      <div class="row">
        <label for="noun">Wouldn't it be great if</label>
        <textarea id="noun" class="materialize-textarea" placeholder="a person, place, organization, company" required></textarea>
      </div>
      <div class="row">
        <label for="action">would</label>
        <textarea id="action" class="materialize-textarea" placeholder="what should they do? or could they do?" required></textarea>
      </div>
      <div class="row">
        <label for="reason">so that</label>
        <textarea id="reason" class="materialize-textarea" placeholder="What is the desired outcome?" required></textarea>
      </div>
      <div class="row">
        <label for="story">Would you like to share anything else with us?</label>
        <textarea id="story" class="materialize-textarea"></textarea>
      </div>
    </div>`

  const stop =
    `<div class="input-field col s12 m8 l6">
      <div class="row">
        <label for="noun">It's terrible that</label>
        <textarea id="noun" class="materialize-textarea" placeholder="a person, place, organization, company" required></textarea>
      </div>
      <div class="row">
        <label for="action">is/are</label>
        <textarea id="action" class="materialize-textarea" placeholder="what are they doing now that they should stop doing?" required></textarea>
        </div>
      <div class="row">
        <label for="reason">because</label>
        <textarea id="reason" class="materialize-textarea" placeholder="why is it terrible?" required></textarea>
      </div>
      <div class="row">
        <label for="story">Would you like to share anything else with us?</label>
        <textarea id="story" class="materialize-textarea"></textarea>
      </div>
    </div>`

    const message =
      `<h2 class="col l12 center-align section">Thank you for sharing your thoughts.</h2>
      <div class="row section">
        <div class="col l12 center-align">
          <div class="row center-align">
            <div class="col l6 right-align">
               <a href="https://xgarage.herokuapp.com/"><button class="btn waves-effect waves-light">Share another idea</button></a>
            </div>
            <div class="col l6">
              <div class="col l6 left-align">
                 <a href="https://xgarage.herokuapp.com/"><button class="btn waves-effect waves-light">Visit XGarage</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>`

  $('#other').one('click', function(){
    $('#other').attr('checked')
    $('#topic').append(otherTopic)
    event.preventDefault();
  })

  function success(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;

    const location =
      `<div class="row">
        <label for="location"></label>
        <textarea id="location" class="materialize-textarea col s6 m6 l6">Boulder, Colorado</textarea>
      </div>`

    $('#latlong').empty()
    $('#latlong').append(location)
    event.preventDefault();

    // console.log('Latitude is ' + latitude + '° Longitude is ' + longitude + '°')
  }

  function error() {
    return "Location not working"
  }

  function geoFindMe() {
    if (!navigator.geolocation){
        return "Geolocation is not supported by your browser"
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  $('#location').on('click', function(){
    geoFindMe()
    event.preventDefault();
  })

//State dependent madlib:

  $('#viewpoint1').on('click', function(){
    $('#madlib').empty()
    $('#madlib').append(start)
    this.attr('checked', 'checked')
    event.preventDefault();
  })

  $('#viewpoint2').on('click', function(){
    $('#madlib').empty()
    $('#madlib').append(stop)
    this.attr('checked', 'checked')
    event.preventDefault();
  })

  // materialize for dropdown menu
  $('select').formSelect()

  //form submit listener
  $('form').on('submit', function(event){
    event.preventDefault()
    let raceData = $('.race:checked').val()
    let genderData = $('.gender:checked').val()
    let topicData = $('.topic:checked').val()
    let latitude = $('#lat').val()
    let longitude = $('#long').val()
    let newTopic = $('#otherType').val()
    let viewpoint = $('.view:checked').val()

    const formData = {
      "age": $('#age').val(),
      "gender": genderData,
      "race": raceData,
      "topic": topicData,
      "viewpoint": viewpoint,
      "lat": null,
      "long": null,
      "noun": $('#noun').val(),
      "action": $('#action').val(),
      "reason": $('#reason').val(),
      "story": $('#story').val(),
    }

    if(newTopic){
      formData.newTopic = newTopic
    }

    function check(){
      if(!latitude && !longitude){
        return
      }

      else {
        formData.lat = latitude
        formData.long = longitude
      }
      return
    }

    check()

    $.post('/', formData)
       .then((result) => {
         console.log(result)
       })

    $('.container').empty()
    $('.container').append(message)
  })
})
