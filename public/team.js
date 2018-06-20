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
      console.log("topicData:", topicData)
      console.log("topic:", topic)
      return
    }

    check()

    $.post('/team', query)
    .then((result) => {
      let gender = ''
      let race = ''
      let type = ''
      for(let i = 0; i < result.length; i++){
      if(result[i].gender_id === 1){
        gender = "Gender Non Conforming"
      }
      if(result[i].gender_id === 2){
        gender = "Transgender Woman"
      }
      if(result[i].gender_id === 3){
        gender = "Transgender Man"
      }
      if(result[i].gender_id === 4){
        gender = "Female"
      }
      if(result[i].gender_id === 5){
        gender = "Male"
      }
      if(result[i].gender_id === 6){
        gender = "Other"
      }
      if(result[i].gender_id === 7){
        gender = "Prefer not to say"
      }
      if(result[i].type_id === 1){
        type = "Environment/Nature"
      }
      if(result[i].type_id === 2){
        type = "Community/Neighborhood"
      }
      if(result[i].type_id === 3){
        type = "Politics/Human Rights/Greater Good"
      }
      if(result[i].type_id === 4){
        type = "Company/Organization"
      }
      if(result[i].type_id === 5){
        type = "Products/Services"
      }
      if(result[i].type_id === 6){
        type = "Family/Personal"
      }
      if(result[i].type_id === 7){
        type = "Education/Schools"
      }
      if(result[i].type_id === 8){
        type = "Other"
      }
      if(result[i].race_id === 1){
        race = "Native American or Alaskan Native"
      }
      if(result[i].race_id === 2){
        race = "Asian"
      }
      if(result[i].race_id === 3){
        race = "Black or African American"
      }
      if(result[i].race_id === 4){
        race = "Hispanic or Latino"
      }
      if(result[i].race_id === 5){
        race = "Native Hawaiian or Other Pacific Islander"
      }
      if(result[i].race_id === 6){
        race = "White"
      }

        let dataRow =
          `<tr>
            <td>${result[i].id}</td>
            <td>${result[i].age}</td>
            <td>${gender}</td>
            <td>${race}</td>
            <td>${type}</td>
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
