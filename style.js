//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    
    $('section#cottontails').hide();
    $('section#daycamp2014').hide();
    $('section#daycamp2015').hide();
    $('section#connected').hide();
    $('section#barista').hide();
    $('section#showtell').hide();
    $('section#myevents').hide();
    $('section#linetheme').hide();
    $('section#valkyrie').hide();
    $('section#vida').hide();
    $('section#leftpadding').hide();
    $('section#rightpadding').hide();
    $('p#logo').css("opacity", "0");
    $('p#arrow').css("opacity", "0");
    $('footer#desktopfooter').css("opacity", "0");

    window.onload = function () {
        $('p#logo').animate({
            opacity: 1
        }, 500, 'linear');
        $('p#arrow').delay(1000).animate({
            opacity: 1
        }, 500, 'linear')
        $('footer#desktopfooter').animate({
            opacity: 1
        }, 500, 'linear');
    };

    $('section#gallery ul li').mouseover(function () {
        $(this).stop().fadeTo('linear', 1);
    });

    $('section#gallery ul li').mouseout(function () {
        $(this).stop().fadeTo('linear', .7);
    });
    
    $('section#linetheme ul li').mouseover(function () {
        $(this).stop().fadeTo('linear', 1);
    });

    $('section#linetheme ul li').mouseout(function () {
        $(this).stop().fadeTo('linear', .8);
    });

    $('section#gallery ul li#cottontailsthumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#cottontails').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#daycamp2014thumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#daycamp2014').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#daycamp2015thumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#daycamp2015').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#musicvideothumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#barista').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#showtellthumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#showtell').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#myeventsthumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#myevents').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#connectedthumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#connected').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#linethemethumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#linetheme').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#valkyriethumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#valkyrie').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#gallery ul li#vidathumb').click(function () {
        $('section#mainpage').animate({
            opacity: .1
        }, 500, 'linear');
        $('section#mainpage').css("position", "fixed").css("bottom", "0");
        $('footer#mobilefooter').css("opacity", "0");
        $('section#vida').fadeIn();
        $('html,body').scrollTop(0);
        $('section#leftpadding').show();
        $('section#rightpadding').show();
    });
    
    $('section#leftpadding').click(function () {
        $('section#mainpage').animate({
            opacity: 1
        }, 300, 'linear');
        $('section#cottontails').fadeOut();
        $('section#daycamp2014').fadeOut();
        $('section#daycamp2015').fadeOut();
        $('section#barista').fadeOut();
        $('section#showtell').fadeOut();
        $('section#myevents').fadeOut();
        $('section#connected').fadeOut();
        $('section#linetheme').fadeOut();
        $('section#valkyrie').fadeOut();
        $('section#vida').fadeOut();
        $('section#leftpadding').hide();
        $('section#rightpadding').hide();
        $('footer#mobilefooter').css("opacity", "1");
        $('section#mainpage').css("position", "").css("bottom", ""); $('html,body').delay(300).scrollTop($(document).height());
        var baristavideo = $("iframe#baristavideo").attr("src");
        var showtellvideo = $("iframe#showtellvideo").attr("src");
        var connectedvideo = $("iframe#connectedvideo").attr("src");
        $("iframe#baristavideo").attr("src","");
        $("iframe#showtellvideo").attr("src","");
        $("iframe#connectedvideo").attr("src","");
        $("iframe#myeventsapp").attr("src","");
        $("iframe#baristavideo").attr("src", baristavideo);
        $("iframe#showtellvideo").attr("src", showtellvideo);
        $("iframe#connectedvideo").attr("src", connectedvideo);
        $("iframe#myeventsapp").attr("src","myeventsapp/prototype5.html");
    });
    
    $('section#rightpadding').click(function () {
        $('section#mainpage').animate({
            opacity: 1
        }, 300, 'linear');
        $('section#cottontails').fadeOut();
        $('section#daycamp2014').fadeOut();
        $('section#daycamp2015').fadeOut();
        $('section#barista').fadeOut();
        $('section#showtell').fadeOut();
        $('section#myevents').fadeOut();
        $('section#connected').fadeOut();
        $('section#linetheme').fadeOut();
        $('section#valkyrie').fadeOut();
        $('section#vida').fadeOut();
        $('section#leftpadding').hide();
        $('section#rightpadding').hide();
        $('footer#mobilefooter').css("opacity", "1");
        $('section#mainpage').css("position", "").css("bottom", ""); $('html,body').delay(300).scrollTop($(document).height());
        var baristavideo = $("iframe#baristavideo").attr("src");
        var showtellvideo = $("iframe#showtellvideo").attr("src");
        var connectedvideo = $("iframe#connectedvideo").attr("src");
        $("iframe#baristavideo").attr("src","");
        $("iframe#showtellvideo").attr("src","");
        $("iframe#connectedvideo").attr("src","");
        $("iframe#myeventsapp").attr("src","");
        $("iframe#baristavideo").attr("src", baristavideo);
        $("iframe#showtellvideo").attr("src", showtellvideo);
        $("iframe#connectedvideo").attr("src", connectedvideo);
        $("iframe#myeventsapp").attr("src","myeventsapp/prototype5.html");
    });
    
    $('section.backtogallery').click(function () {
        $('section#mainpage').animate({
            opacity: 1
        }, 300, 'linear');
        $('section#cottontails').fadeOut();
        $('section#daycamp2014').fadeOut();
        $('section#daycamp2015').fadeOut();
        $('section#barista').fadeOut();
        $('section#showtell').fadeOut();
        $('section#myevents').fadeOut();
        $('section#connected').fadeOut();
        $('section#linetheme').fadeOut();
        $('section#valkyrie').fadeOut();
        $('section#vida').fadeOut();
        $('section#leftpadding').hide();
        $('section#rightpadding').hide();
        $('footer#mobilefooter').css("opacity", "1");
        $('section#mainpage').css("position", "").css("bottom", ""); $('html,body').delay(300).scrollTop($(document).height());
        var baristavideo = $("iframe#baristavideo").attr("src");
        var showtellvideo = $("iframe#showtellvideo").attr("src");
        var connectedvideo = $("iframe#connectedvideo").attr("src");
        $("iframe#baristavideo").attr("src","");
        $("iframe#showtellvideo").attr("src","");
        $("iframe#connectedvideo").attr("src","");
        $("iframe#myeventsapp").attr("src","");
        $("iframe#baristavideo").attr("src", baristavideo);
        $("iframe#showtellvideo").attr("src", showtellvideo);
        $("iframe#connectedvideo").attr("src", connectedvideo);
        $("iframe#myeventsapp").attr("src","myeventsapp/prototype5.html");
    });
    
    $('.carousel').carousel();
    
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

})