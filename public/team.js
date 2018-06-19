$(document).ready(function(){
  $('select').formSelect();

  const test = "test"

  const dataRow =
  `<tr>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
      <th>${test}</th>
    </tr>`

//form submit listener
$('form').on('submit', function(event) {
  event.preventDefault()
  let topicData = $('.topic:checked').val()
  let raceData = $('.race:checked').val()
  let genderData = $('.gender:checked').val()
  let ageData = $('.age:checked').val()

  let query = {
    "topicData": null,
    "raceData": null,
    "genderData": null,
    "ageData": null,
  }
  function check() {
    if(topicData) {
      query.topicData = topicData
    }
    if(raceData) {
      query.raceData = raceData
    }
    if(genderData) {
      query.genderData = genderData
    }
    if(ageData) {
      query.ageData = ageData
    }
    return
  }

  check()

  

  $.post('/team', query)
     .then((result) => {
       console.log("result:", result)
     })

})

  $.get('/team', function(data){

  });

});
