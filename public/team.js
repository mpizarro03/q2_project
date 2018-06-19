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

})

  // $.get('localhost:3000/team', function(data){
  //   alert("data loaded:" + data);
  // });

});
