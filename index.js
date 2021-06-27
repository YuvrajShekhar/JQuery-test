// $(document).ready(function(){
//     $("h1").css("color","red");
// })

// $("h1").addClass("title");

$("button").html("<em>Text changed</em>");

$("a").attr("href","https://www.yahoo.com");

$(document).keypress(function(){
    $("h1").text(event.key);
})