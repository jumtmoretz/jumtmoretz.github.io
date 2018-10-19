<script>
        $(document).ready(function(){
            $(".mainMenu li").hover(function(){
                $(this).find(".sub").slideToggle(500);
            });
        });

        $(document).ready(function(){
            var wd = parseInt($("#vs ul li").width());
            
            function rAni(){
                $("#vs ul").not(":animated").animate({"margin-left" : - wd + "px"}, 2500, function(){
                    $("#vs ul li").eq(0).appendTo($("#vs ul"));
                    $("#vs ul").css("margin-left", "0px");
                });
            };
            var intv = setInterval(function(){
                rAni();
            }, 5000);
        });

        $(document).ready(function(){
        $(".con2ConLst ul li").mouseover(function(){
                $(this).find(".con2Hover").fadeIn(500);
            });
            $(".con2Hover").mouseout(function(){
                $(".con2Hover").fadeOut(500);
            });
        });

        $(document).ready(function(){
            var wd = parseInt($("#Mvs ul li").width());
            
            function rAni(){
                $("#Mvs ul").not(":animated").animate({"margin-left" : - wd + "px"}, 2500, function(){
                    $("#Mvs ul li").eq(0).appendTo($("#Mvs ul"));
                    $("#Mvs ul").css("margin-left", "0px");
                });
            };
            var intv = setInterval(function(){
                rAni();
            }, 5000);
        });

        $(document).ready(function(){
            var wd = parseInt($(".Mcon2BoxIn ul li").width());
            $(".listLBtn").click(function(){
                $(".Mcon2BoxIn ul").not(":animated").animate({"margin-left": -wd + "px"}, 800, function(){
                    $(".Mcon2BoxIn ul li").eq(0).appendTo(".Mcon2BoxIn ul");
                    $(".Mcon2BoxIn ul").css("margin-left", "0px");
                });
                
            });
            $(".listRBtn").click(function(){
                $(".Mcon2BoxIn ul li").eq(7).prependTo(".Mcon2BoxIn ul");
                $(".Mcon2BoxIn ul").css("margin-left", -wd + "px");
                $(".Mcon2BoxIn ul").not(":animated").animate({"margin-left" : "0px"}, 800);
                });
        });

        $(document).ready(function(){
            $(".MmenuBtn").click(function(){
                $(".MmenuSl").not(":animated").animate({"left" : "0px"}, 800);
            });
            
            $(".close").click(function(){
                $(".MmenuSl").not(":animated").animate({"left" : "-330px"}, 800);
            });
        });
        
    </script>