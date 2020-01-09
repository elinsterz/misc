//button click function
$(document).ready(function() {
    $("button").click(function(){
        $("p").text("Hello world!");
    })
});


//for using fonts in js
$(document).ready(function(){
    var fontvar = 'AtlasGrotesk-Regular';
    $('p').css({'font-family':fontvar});
});
