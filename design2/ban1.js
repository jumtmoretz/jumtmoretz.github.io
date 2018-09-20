(function($){
   $.fn.sliding = function(spd, tar1, child, playBtn, leftBtn, rightBtn){
       // spd -> ms단위 속도
       //"#slBox1 .thumBox" -> tar1
       //"#slBox1 li" -> child
       //".tBox .playBtn" -> playBtn
       //".tBox .leftBtn" -> leftBtn
       //".tBox .rightBtn" -> rightBtn
        var th=$(this);
        var wd=parseInt($(tar1).width());
        var n=$(tar1).length;
        var sw1=true;
        var intsl1=setInterval(function(){
            lAni();
        }, spd*6);
        function lAni(){
            $(th).not(":animated").animate({"margin-left":-wd+"px"}, spd, function(){ 
                $(child).eq(0).appendTo($(th));
                $(th).css("margin-left", "0px");
            });
        };
        function rAni(){
            $(child).eq(n-1).prependTo($(th));
            $(th).css("margin-left", -wd+"px");
            $(th).not(":animated").animate({"margin-left":"0px"}, spd);
        };
        $(playBtn).click(function(){
            if(sw1==true) {
                clearInterval(intsl1);
                $(this).css("background-image", "url('')");
            } else {
                lAni();
                $(this).css("background-image", "url('')");
                intsl1=setInterval(function(){ lAni(); }, spd*6);
            }
            sw1=!sw1;
        });
        $(leftBtn).click(function(){
            clearInterval(intsl1);
            lAni();
            intsl1=setInterval(function(){ lAni(); }, spd*6);
        });
        $(rightBtn).click(function(){
            clearInterval(intsl1);
            rAni();
            intsl1=setInterval(function(){ lAni(); }, spd*6);
        });
   }; 
}(jQuery));
