/* 로고 호버시 */
$(document).ready(function(){
            $(".logo").hover(function(){
                $(this).css("transform", "rotateY(360deg)");
            });
            $(".logo").mouseleave(function(){
                $(this).css("transform", "rotateY(0deg)");
            });
        });

/* 배너의 자동 슬라이드 */
$(document).ready(function() { 
            var wd = parseInt($("#vs").width());
            console.log("창의넓이 : " + wd);
            function rAni(){
                $(".imgBox").not(":animated").animate({"margin-left" : -wd + "px"}, 2200, function(){
                    $(".imgBox li").eq(0).appendTo($(".imgBox"));
                    $(".imgBox").css("margin-left", "0px");
                });
            };
            var intv = setInterval(function(){
                rAni();
            }, 2000);
        });

/* 메뉴 호버 시 */
$(document).ready(function(){
            $(".menuBox li a").hover(function(){
                $(this).parent().find("span").toggleClass("on");
            });
        });