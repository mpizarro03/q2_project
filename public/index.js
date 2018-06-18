$(document).ready(function(){

  const otherTopic =
    `<div class="input-field col s12 m8 l6">
      <input placeholder="Other topic" id="type" type="text" class="validate">
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
    console.log('Latitude is ' + latitude + '° Longitude is ' + longitude + '°')
                  // var img = new Image();
                  // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
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
  })

//State dependent madlib:

  $('.viewpoint1').on('click', function(){
    $('#madlib').empty()
    $('#madlib').append(start)
    ev.preventDefault();
  })

  $('.viewpoint2').on('click', function(){
    $('#madlib').empty()
    $('#madlib').append(stop)
    ev.preventDefault();
  })

  // materialize for dropdown menu
  $('select').formSelect()

  //form submit listener
  $('form').on('submit', function(event){
    event.preventDefault()

    console.log("otheranswer:", this)
    console.log("answer:", $(this).serialize())
  })
})
