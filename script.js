$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
 $(".hvr-grow").hover(function() {
   $(this).find("#badge").fadeToggle(300);
 })
        
$("#message").keyup(function() {
  let subject = $("#subject").val().replace(/ /g, "%20");
  console.log(subject);
  let message = $("#message").val().replace(/ /g, "%20");
  console.log(message);
  let emailLink = `mailto:benjamin@pisaris.me?subject=${subject}&body=${message}`;
  $("#send").attr("href", emailLink);
});