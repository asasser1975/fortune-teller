//Business Logic
var add = function(q1answer, q2answer, q3answer) {
  return q1answer + q2answer + q3answer;
};

$(document).ready(function(){
  //   $("input:checkbox#div1").click(function() {
  //   $("input:checkbox:not[:checked]#div1").hide();
  // });

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

    // the selector will match all input controls of type :checkbox
// and attach a click event handler
// $("input:checkbox").on('click', function() {
//   // in the handler, 'this' refers to the box clicked on
//   var $box = $(this);
//   if ($box.is(":checked")) {
//     // the name of the box is retrieved using the .attr() method
//     // as it is assumed and expected to be immutable
//     var group = "input:checkbox[name='" + $box.attr("name") + "']";
//     // the checked state of the group/box on the other hand will change
//     // and the current value is retrieved using .prop() method
//     $(group).prop("checked", false);
//     $box.prop("checked", true);
//   } else {
//     $box.prop("checked", false);
//   }
// });

  });
});
