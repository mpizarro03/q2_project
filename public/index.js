$(document).ready(function(){
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
