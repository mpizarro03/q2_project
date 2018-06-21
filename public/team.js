$(document).ready(function(){
  $('select').formSelect();
  const test = "test"

  //form submit listener
  $('form').on('submit', function(event) {
    event.preventDefault()
    $('#thead').empty()
    $('#tbody').empty()
    $('#matches').empty()

    let thead =
      `<tr>
        <th>Id</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Race</th>
        <th>Type</th>
        <th>Other</th>
        <th>Problem</th>
        <th>Story</th>
      </tr>`

    let matches =
    `<div class="row">
      <div class="col l12 left-align">
         <h5 id="search">Problems matching your search:</h5>
      </div>
      <div class="col l12 right-align">
         <button class="btn waves-effect waves-light" id="export" data-export="export">Export Search</button>
      </div>
    </div>`

    $('#matches').append(matches)
    $('#thead').append(thead)


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
      console.log(result)
      if(result.length === 0){
        $('#thead').empty()
        $('#tbody').empty()
        $('#matches').empty()
        $('#matches').append(`<div class="col l12 center-align">
           <h5>No problems match your search.</h5>
        </div>`)
      }
      else {
        let gender = ''
        let race = ''
        let type = ''
        let other = ''
        let problem = ''

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
        if(result[i].other){
          other = result[i].other
        }
        if(result[i].viewpoint === 'happen'){
          problem = `Wouldn't it be great if ${result[i].noun} would ${result[i].action} so that ${result[i].action}.`
          console.log('happen')
        }
        if(result[i].viewpoint === 'stop'){
          problem = `It's terrible that ${result[i].noun} is ${result[i].action} because ${result[i].action}.` 
          console.log('stop')
        }

          let dataRow =
            `<tr>
              <td>${result[i].id}</td>
              <td>${result[i].age}</td>
              <td>${gender}</td>
              <td>${race}</td>
              <td>${type}</td>
              <td>${other}</td>
              <td>${problem}</td>
              <td>${result[i].story}</td>
            </tr>`
          $('table').append(dataRow)
        }
      }
    })
    $("#export").click(function(){
      $("table").tableToCSV()
    })


  })

  $.get('/team', function(data){

  })

  $('#clear').on('click', function(event){
    location.reload()
    // $('#matches').empty()
    // $('#thead').empty()
    // $('#tbody').empty()
    // event.preventDefault()
  })

})
