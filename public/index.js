$(document).ready(function(){

  const otherTopic =
      `<div class="input-field col s6">
        <input placeholder="Other topic" id="type" type="text" class="validate">
       </div>`

  const start =
      `<div class="input-field col s12 m8 l6">
        <div class="row">
          <label for="textarea1">Wouldn't it be great if</label>
          <textarea id="textarea1" class="materialize-textarea"></textarea>
        </div>
        <div class="row">
          <label for="textarea1">would</label>
          <textarea id="textarea1" class="materialize-textarea"></textarea>
        </div>
        <div class="row">
          <label for="textarea1">so that</label>
          <textarea id="textarea1" class="materialize-textarea"></textarea>
        </div>
        <div class="row">
          <label for="textarea1">Would you like to share anything else with us?</label>
          <textarea id="textarea1" class="materialize-textarea"></textarea>
        </div>

      </div>`

      const stop =
          `<div class="input-field col s12 m8 l6">
            <div class="row">
              <label for="textarea1">It's terrible that</label>
              <textarea id="textarea1" class="materialize-textarea"></textarea>
            </div>
            <div class="row">
              <label for="textarea1">is</label>
              <textarea id="textarea1" class="materialize-textarea"></textarea>
            </div>
            <div class="row">
              <label for="textarea1">because</label>
              <textarea id="textarea1" class="materialize-textarea"></textarea>
            </div>
            <div class="row">
              <label for="textarea1">Would you like to share anything else with us?</label>
              <textarea id="textarea1" class="materialize-textarea"></textarea>
            </div>

          </div>`

  $('#other').one('click', function(){
    $('#topic').append(otherTopic)
    ev.preventDefault();
  })

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

  // var instance = M.FormSelect.getInstance(elem)
  // instance.getSelectedValues()

  // materialize for dropdown menu
  $('select').formSelect()

  //form submit listener
  $('form').on('submit', function(event){
    event.preventDefault()
    console.log("answer:", $(this).serialize())
  })
})
