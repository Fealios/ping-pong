function pingPong (num){
  var input;
  var capture = [];
  for (i=1;i<=num;i++){
    if(i % 15===0){
      capture.push('pinppong');
    } else if (i % 5 === 0){
      capture.push('pong');
    } else if (i % 3 === 0){
      capture.push('ping');
    } else {
      capture.push(i);
    }
  }
  eject(capture);
}

function eject (arr){
  for(j=0;j<arr.length;j++){
    $('#output').append('<li>'+arr[j]+'</li>');
  }
}

$(document).ready(function(){
  $('#user').submit(function(event){
    event.preventDefault();
    input = $('#input').val();
    console.log(input);
    pingPong(input);

  })
})
