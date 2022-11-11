$("#bold").click(function () {
  $("#input").css("font-weight", "bold");
  $("#result").css("font-weight", "bold");
});


// endisable ok button after valid input
$("#input").on("keyup", function () {
  if ($("#input").val().length != 0) {
    $("#ok").prop("disabled", false);
  }
});

$("#clear").click(function () {
  $("#input").val("");
});

// click ok, save the not and show delete button
$(document).ready(function () {
  $("#ok").click(function () {
    var str = $("#input").val();
    $("#result").html(str);
    $("#delete").show();
  });
});

$("#delete").click(function () {
  $(this).closest("form").remove();
});

$("#delete2").click(function () {
  $(this).closest("form").remove();
});
