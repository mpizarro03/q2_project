$(document).ready(function(){
  $('select').formSelect();
  const test = "test"
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
        query.topicData = topicData
      }
      if(raceData) {
        query.raceData = raceData
      }
      if(genderData) {
        query.genderData = genderData
      }
      if(query.genderData === "Gender Non Conforming"){
        query.genderData = 1
      }
      if(query.genderData === "Transgender Woman"){
        query.genderData = 2
      }
      if(query.genderData === "Transgender Man"){
        query.genderData = 3
      }
      if(query.genderData === "Female"){
        query.genderData = 4
      }
      if(query.genderData === "Male"){
        query.genderData = 5
      }
      if(query.genderData === "Other"){
        query.genderData = 6
      }
      if(query.genderData === "Prefer not to say"){
        query.genderData = 7
      }
      if(query.topicData === "Environment/Nature"){
        query.topicData = 1
      }
      if(query.topicData === "Community/Neighborhood"){
        query.topicData = 2
      }
      if(query.topicData === "Politics/Human Rights/Greater Good"){
        query.topicData = 3
      }
      if(query.topicData === "Company/Organization"){
        query.topicData = 4
      }
      if(query.topicData === "Products/Services"){
        query.topicData = 5
      }
      if(query.topicData === "Family/Personal"){
        query.topicData = 6
      }
      if(query.topicData === "Education/Schools"){
        query.topicData = 7
      }
      if(query.topicData === "Other"){
        query.topicData = 8
      }
      if(query.raceData === "Native American or Alaskan Native"){
        query.raceData = 1
      }
      if(query.raceData === "Asian"){
        query.raceData = 2
      }
      if(query.raceData === "Black or African American"){
        query.raceData = 3
      }
      if(query.raceData === "Hispanic or Latino"){
        query.raceData = 4
      }
      if(query.raceData === "Native Hawaiian or Other Pacific Islander"){
        query.raceData = 5
      }
      if(query.raceData === "White"){
        query.raceData = 6
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
