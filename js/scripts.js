//Business Logic
var add = function(q1answer, q2answer, q3answer) {
  return q1answer + q2answer + q3answer;
};

$(document).ready(function(){
  $("form#fortuneteller-survey").submit(function(event){
    event.preventDefault();

    var q1answer = parseInt($("input:checkbox[name=age-fortuneteller]:checked").val());
    var q2answer = parseInt($("input:checkbox[name=month-fortuneteller]:checked").val());
    var q3answer = parseInt($("input:checkbox[name=pet-fortuneteller]:checked").val());

    var result = add(q1answer, q2answer, q3answer);

    if(result <= 2) {
      $('#fortune-1').show();
    } else if(result >= 3 && result <= 5) {
      $('#fortune-2').show();
    } else {
      $('#fortune-3').show();
    }

      $('#fortuneteller-survey').hide();

    // $("input:checkbox[name=work-transportation]:checked").each(function(){
    //   var workTransportationMode = $(this).val();
    //   $('#work-responses').append(workTransportationMode + "<br>");
    // });
    // $("#fun-responses").show();
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    // $('#transportation_survey').hide();
  });
});
