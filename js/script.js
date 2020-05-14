$(document).ready(function(){
  $('#btnGenerate').prop('disabled', true);
});

$('input[name="options"]').click(function(){
  $('#btnGenerate').prop('disabled', false);
});

$('#btnGenerate').click(function(){
  var date = new Date();
  nextDateNum = [
    date.getDate() + 1,
    date.getDate() + 2,
    date.getDate() + 3,
    date.getDate() + 4,
    date.getDate() + 5,
    date.getDate() + 6,
    date.getDate() + 7,
  ];

  // alert(date2[0]);



  var val = $('input[name="options"]:checked').val();
  var outputTxt;

  if (val == 'sun'){
    // alert('1');
    outputTxt = 'aaaa';

  }
  else if (val == 'normal'){
    // alert('2');
    outputTxt = 'OKAY';
  }
  else if (val == 'sleepover'){
    // alert('3');
    outputTxt = 'MMMMMMMMMMMMMMMMMMMMMMMMMM';
  }

  $('#output textarea').text(outputTxt);

  $('#output').fadeIn(400, function(){

  });
});
