$(document).ready(function(){
  $('select').formSelect();
  const test = "test"
  //form submit listener
  $('form').on('submit', function(event) {
    event.preventDefault()
    let topicData = $('.topic:checked').val()
    let topic = parseInt(topicData)
    let raceData = $('.race:checked').val()
    let race = parseInt(raceData)
    let genderData = $('.gender:checked').val()
    let gender = parseInt(genderData)
    let ageData = $('.age:checked').val()
    let query = {
      "topicData": null,
      "raceData": null,
      "genderData": null,
      "ageMin": null,
      "ageMax": null
    }
    function check() {
      if(ageData){
        let ageArray = ageData.split(' - ')
        let age = ageArray.map((ele)=> parseInt(ele))
        query.ageMin = age[0]
        query.ageMax = age[1]
      }
      if(topicData) {
        query.topicData = topic
      }
      if(raceData) {
        query.raceData = race
      }
      if(genderData) {
        query.genderData = gender
      }
      return
    }

    check()

    $.post('/team', query)
    .then((result) => {
      for(let i = 0; i < result.length; i++){
        let dataRow =
          `<tr>
            <td>${result[i].id}</td>
            <td>${result[i].age}</td>
            <td>${result[i].gender_id}</td>
            <td>${result[i].race_id}</td>
            <td>${result[i].type_id}</td>
            <td>${result[i].noun}</td>
            <td>${result[i].action}</td>
            <td>${result[i].reason}</td>
            <td>${result[i].story}</td>
          </tr>`
        $('table').append(dataRow)
      }
    })

  })

  $.get('/team', function(data){

  })

})
