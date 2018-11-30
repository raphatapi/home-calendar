$(document).ready(function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 30, 2018 00:39:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $("#demo").text(days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds");

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        $("#demo").text("Minha Familia Chegou!");
        $("#main").css("backgroundImage", "url('./family.gif')");
    }
    }, 1000);
})