$(document).ready(function () {
  $("#quiz").click(function (event) {
    var number = event.target.id.slice(-1);
    $("#a" + number).slideDown("slow");
  });
});