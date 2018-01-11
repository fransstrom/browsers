$('#imgDiv').hide();
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
    {
        $('div img').attr('src','images/chrome.png');
        $('#imgDiv a').attr('href','https://www.google.com/chrome/browser/desktop/index.html');
        $('#chrome .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(2000).fadeIn(1000);
        $('#chrome').css("color", "#fcd207").css("font-weight","bold");
    }
    else if(brows=='Firefox')
    {
        $('div img').attr('src','images/firefox.png');
        $('#imgDiv a').attr('href','https://www.mozilla.org/sv-SE/firefox/new/');
        $('#firefox .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(2200).fadeIn(1000);
        $('#firefox').css("color", "#fcd207").css("font-weight","bold");
    }
    else if(brows=='Opera')
    {
        $('div img').attr('src','images/opera.png');
        $('#imgDiv a').attr('href','http://www.opera.com/sv/computer');
        $('#opera .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(2400).fadeIn(1000);
        $('#opera').css("color", "#fcd207").css("font-weight","bold");
    }
    else if(brows=='IE')
    {
        $('div img').attr('src','images/ie.png');
        $('#imgDiv a').attr('href','https://www.microsoft.com/sv-se/download/internet-explorer.aspx');
        $('#explorer .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(2600).fadeIn(1000);
        $('#ie').css("color", "#fcd207").css("font-weight","bold");
    }
    else if(brows=='Edge')
    {
        $('div img').attr('src','images/ie.png');
        $('#imgDiv a').attr('href','https://www.microsoft.com/sv-se/windows/microsoft-edge');
        $('#edge .thisBrows').append('Du använder '+navigator.sayswho+'.'+'</br>'+' Klicka på loggan för den senaste versionen av '+ brows).delay(2800).fadeIn(1000);
        $('#edge').css("color", "#fcd207").css("font-weight","bold");
    }




$('#browsContainer').find('div').slideDown(1500, function () {

    $("h2").each(function(index) {
        $(this).delay(200*index).fadeIn(600);
    });

});

    $('#imgDiv').slideToggle(1000).animate({ 'marginTop': '30px'},500);

    $('img').mouseover(function () {
        $(this).addClass( "hoverImg",100, "easeInCubic");
    });
    $('img').mouseleave(function () {
        $(this).removeClass("hoverImg",300, "easeOutBack");
    });
});