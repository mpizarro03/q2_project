$(document).ready(function(){

  const otherTopic =
    `<div class="input-field col s12 m8 l6">
      <input placeholder="Other topic" id="type" type="text">
    </div>`

  const start =
    `<div class="input-field col s12 m8 l6">
      <div class="row">
        <label for="noun">Wouldn't it be great if</label>
        <textarea id="noun" class="materialize-textarea"></textarea>
      </div>
      <div class="row">
        <label for="action">would</label>
        <textarea id="action" class="materialize-textarea"></textarea>
      </div>
      <div class="row">
        <label for="reason">so that</label>
        <textarea id="reason" class="materialize-textarea"></textarea>
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
        <textarea id="noun" class="materialize-textarea"></textarea>
      </div>
      <div class="row">
        <label for="action">is</label>
        <textarea id="action" class="materialize-textarea"></textarea>
        </div>
      <div class="row">
        <label for="reason">because</label>
        <textarea id="reason" class="materialize-textarea"></textarea>
      </div>
      <div class="row">
        <label for="story">Would you like to share anything else with us?</label>
        <textarea id="story" class="materialize-textarea"></textarea>
      </div>
    </div>`

  $('#other').one('click', function(){
    $('#topic').append(otherTopic)
    ev.preventDefault();
  })

  function success(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;

    const latLong =
      `<div class="row">
        <label for="lat">Latitude</label>
        <textarea id="lat" class="materialize-textarea">${latitude}</textarea>
      </div>
      <div class="row">
        <label for="long">Longitude</label>
        <textarea id="long" class="materialize-textarea">${longitude}</textarea>
      </div>`

    $('#latlong').append(latLong)

    console.log('Latitude is ' + latitude + '° Longitude is ' + longitude + '°')
  }

  function error() {
    console.log("Unable to retrieve your location")
  }

  function geoFindMe() {
    if (!navigator.geolocation){
            console.log("Geolocation is not supported by your browser")
            return
          }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  $('#location').on('click', function(){
    geoFindMe()
    event.preventDefault();
  })

//State dependent madlib:

  $('.viewpoint1').on('click', function(){
    $('#madlib').empty()
    $('#madlib').append(start)
    this.attr('checked', 'checked')
    event.preventDefault();
  })

  $('.viewpoint2').on('click', function(){
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

    const formData = {
      "age": $('#age').val(),
      "gender": genderData,
      "race": raceData,
      "lat": null,
      "long": null,
      "topic": topicData,
      "noun": $('#noun').val(),
      "action": $('#action').val(),
      "reason": $('#reason').val(),
      "story": $('#story').val(),
    }

    function check(){
      if(!$('#lat').val() && !$('#long').val()){
        return
      }
      else {
        console.log('heres a lat')
        formData.lat = latitude
        formData.long = longitude
      }
      return
    }

    check()

    console.log(formData)
    $.post('/', formData)
       .then((result) => {
         console.log(result)
       })
  })
  //stretch goal
  // $('form').on('submit', function(e){
  //   e.preventDefault()
  //   $.post('http://localhost:3000/', $(this).serialize())
  //     .then((result) => {
  //       $('#result').html(result)
  //     })
  // })
})
