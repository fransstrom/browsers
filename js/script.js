$('#imgDiv').hide();
$('#browsContainer').hide();
$(document).ready(function(){



    navigator.sayswho= (function(){
        var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    var brows=navigator.sayswho.split(" ", 1);


    if(brows=='Chrome')
    {   $('#browsContainer').find('#chrome').fadeIn(300);
        $('#chrome').find('h1').fadeIn(300);
        $('div img').attr('src','images/chrome.png');
        $('#imgDiv a').attr('href','https://www.google.com/chrome/browser/desktop/index.html');
        $('#chrome .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(1000).fadeIn(1000);
        $('#chrome h1').css("color", "red").css("font-weight","bold");
    }
    else if(brows=='Firefox')
    {  $('#browsContainer').find('#firefox').fadeIn(300);
        $('#firefox').find('h1').fadeIn(300);
        $('div img').attr('src','images/firefox.png');
        $('#imgDiv a').attr('href','https://www.mozilla.org/sv-SE/firefox/new/');
        $('#firefox .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(1000).fadeIn(1000);
        $('#firefox h1').css("color", "orange").css("font-weight","bold");
    }
    else if(brows=='Opera')
    {  $('#browsContainer').find('#opera').fadeIn(300);
        $('#opera').find('h1').fadeIn(300);
        $('div img').attr('src','images/opera.png');
        $('#imgDiv a').attr('href','http://www.opera.com/sv/computer');
        $('#opera .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(1000).fadeIn(1000);
        $('#opera h1').css("color", "red").css("font-weight","bold");
    }
    else if(brows=='IE')
    {  $('#browsContainer').find('#explorer').fadeIn(300);
        $('#explorer').find('h1').fadeIn(300);
        $('div img').attr('src','images/ie.png');
        $('#imgDiv a').attr('href','https://www.microsoft.com/sv-se/download/internet-explorer.aspx');
        $('#imgDiv').append('<a href="http://www.opera.com/sv/computer"><img src="images/opera.png"></a>'+'<a href="https://www.mozilla.org/sv-SE/firefox/new/"><img src="images/firefox.png"></a>'+'<a href="https://www.google.com/chrome/browser/desktop/index.html"><img src="images/chrome.png"></a>'+
            '<a href="images/safari.png"><img src="images/safari.png"></a>').css('flex-direction',"row");
        $('#explorer .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows+'</br></br>'+'Du borde ladda ner en annan webbläsare').delay(1000).fadeIn(1000);

    }
    else if(brows=='Edge')
    {  $('#browsContainer').find('#edge').fadeIn(300);
        $('#edge').find('h1').fadeIn(300);
        $('div img').attr('src','images/ie.png');
        $('#imgDiv a').attr('href','https://www.microsoft.com/sv-se/windows/microsoft-edge');
        $('#imgDiv').append('<a href="http://www.opera.com/sv/computer"><img src="images/opera.png"></a>'+'<a href="https://www.mozilla.org/sv-SE/firefox/new/"><img src="images/firefox.png"></a>'+'<a href="https://www.google.com/chrome/browser/desktop/index.html"><img src="images/chrome.png"></a>'+
            '<a href="images/safari.png"><img src="images/safari.png"></a>').css('flex-direction',"row");
        $('#edge .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows+'</br></br>'+'Du borde ladda ner en annan webbläsare').delay(1000).fadeIn(1000);

    }
    else if(brows=='Safari')
    {
        $('#browsContainer').find('#safari').fadeIn(300);
        $('#safari').find('h1').fadeIn(300);
        $('div img').attr('src','images/safari.png');
        $('#imgDiv a').attr('href','https://support.apple.com/sv_SE/downloads/safari');
        $('#safari .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(1000).fadeIn(1000);
        $('#safari').css("color", "#fcd207").css("font-weight","bold");
    }




$('#browsContainer').slideDown(1500);

    $('#imgDiv').slideToggle(1000).animate({ 'marginTop': '30px'},500);

    $('img').mouseover(function () {
        $(this).addClass( "hoverImg",100, "easeInCubic");
    });
    $('img').mouseleave(function () {
        $(this).removeClass("hoverImg",300, "easeOutBack");
    });
});