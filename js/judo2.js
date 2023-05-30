// alert("ok");
window.onload=function() {

    $("html, body").stop().animate({"scrollTop":0},500);

    medal_bt1.onclick=function() {
        this.style.background="#7f94c3";
        this.style.color="white";
        medal_bt2.style.background="white";
        medal_bt2.style.color="#ccc";
        medal_1.style.display="block";
        medal_2.style.display="none";
    };
    medal_bt2.onclick=function() {
        this.style.background="#7f94c3";
        this.style.color="white";
        medal_bt1.style.background="white";
        medal_bt1.style.color="#ccc";
        medal_1.style.display="none";
        medal_2.style.display="block";
    };

   
};

let at4_sw = 0;
let str="", glo_no;
let timer = setInterval("ani()", 4000);
// let timer2 = setInterval("ani2()", 1000);

// 메인화면 대회일정 슬라이딩 작업 ===========================================
function ani() {
    $(".d_day").stop().animate({"top":"-=100%"}, 1000, function() {
        $(".d_day > li:first").appendTo(".d_day");
        $(".d_day").css("top", "+=100%");
    });
};





// 제이쿼리 시작
$(function() {
    // 탑 버튼 클릭시 제일 상단으로 올리기
    $(".topbtn").on("click", function() {
        $("html, body").stop().animate({"scrollTop":0},500);
    })

    // 메인화면 공지사항 ============================================================
    $(".at0_btn3").on("click", function() {
        $(".at0").hide();
        $(".at3").show();
        top_func();
    });

    $(".at0_btn4").on("click", function() {
        $(".at0").hide();
        $(".at3").show();
        $(".at3_bm1_1").show();
        $(".at3_control").hide();
        top_func();
    });
    $(".at0_btn5").on("click", function() {
        $(".at0").hide();
        $(".at3").show();
        $(".at3_bm1_2").show();
        $(".at3_control").hide();
        top_func();
    });
    $(".at0_btn6").on("click", function() {
        $(".at0").hide();
        $(".at3").show();
        $(".at3_bm1_3").show();
        $(".at3_control").hide();
        top_func();
    });
    $(".at0_btn7").on("click", function() {
        $(".at0").hide();
        $(".at3").show();
        $(".at3_bm1_4").show();
        $(".at3_control").hide();
        top_func();
    });

    // 메인화면 대회결과 > 남자일반부 > 체급변경 ======================================
    $(".medal_n").hide();
    $(".medal_n1").show();
    $(".at0_medal2").hide();

    $(".at0_btn").on("click", function() {
        $(".at0").hide();
        $(".at6").show();
        top_func();
    });

    $("#man_bt1").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#man_bt2").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#man_bt3").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#man_bt4").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#man_bt5").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#man_bt6").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#man_bt7").on("click", function() {
        no=$(this).index()+1;
        $(".medal_n").hide();
        $(".medal_n"+no).show();
        $(".at0_medal ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });


    // 메인화면 대회결과 > 여자일반부 > 체급변경 ======================================
    $(".medal_w").hide();
    $(".medal_w1").show();

    $("#woman_bt1").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#woman_bt2").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#woman_bt3").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#woman_bt4").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#woman_bt5").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#woman_bt6").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });
    $("#woman_bt7").on("click", function() {
        no=$(this).index()+1;
        $(".medal_w").hide();
        $(".medal_w"+no).show();
        $(".at0_medal2 ul:nth-child(1) li" ).css({"background" : "white", "color" : "black"})
        $(this).css({"background" : "#3a4b5f", "color" : "white"})
    });


    // 메인화면 뉴스 & 미디어 이동  ==============================================
    $(".at0_news_btn").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        top_func();
    });
    $(".at0_btn8").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        $(".at9_bm1_1").show();
        $(".at9_control").hide();
        top_func();
    });
    $(".at0_btn9").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        $(".at9_bm1_2").show();
        $(".at9_control").hide();
        top_func();
    });
    $(".at0_btn10").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        $(".at9_bm1_3").show();
        $(".at9_control").hide();
        top_func();
    });
    $(".at0_btn11").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        $(".at9_bm2_1").show();
        $(".at9_control").hide();
        top_func();
    });
    $(".at0_btn12").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        $(".at9_bm2_2").show();
        $(".at9_control").hide();
        top_func();
    });
    $(".at0_btn13").on("click", function() {
        $(".at0").hide();
        $(".at9").show();
        $(".at9_bm2_3").show();
        $(".at9_control").hide();
        top_func();
    });


    // 네비게이션 각 아티클(상세메뉴 본문) 이동 ===================================
    $(".topdown_menu > ul > li:nth-child(1) > p").on("click", function() {
        first_func()
        sub=$(this).index()+1;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });
    $(".topdown_menu > ul > li:nth-child(2) > p").on("click", function() {
        first_func()
        sub=$(this).index()+3;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });
    $(".topdown_menu > ul > li:nth-child(3) > p").on("click", function() {
        first_func()
        sub=$(this).index()+4;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });
    $(".topdown_menu > ul > li:nth-child(4) > p").on("click", function() {
        first_func()
        sub=$(this).index()+7;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });
    $(".topdown_menu > ul > li:nth-child(5) > p").on("click", function() {
        first_func()
        sub=$(this).index()+9;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });
 
    
    $("header > ul > li:nth-child(2)").on("click", function() {
        sub=$(this).index()+10;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });
    $("header > ul > li:nth-child(3)").on("click", function() {
        sub=$(this).index()+10;
        $(".at").hide();
        $(".at"+sub).show();
        top_func();
    });

    // logo클릭시 메인화면으로 이동
    $("header > ul > li:nth-child(1)").on("click", function() {
        sub=$(this).index();
        $(".at").hide();
        $(".at0").show();
        top_func();
    });


    // 아티클 1 > 세부메뉴 이동 ==========================================================
    $(".at1_menu li").on("click", function() {
        no=$(this).index();
        if(no==0)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    

    // 아티클 2 > 세부메뉴 이동 ==========================================================
    $(".at2_menu li").on("click", function() {
        no=$(this).index();
        if(no==0)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 2 > 년도 이동 
    $(".at2_text> ul:nth-child(1)> li").on("click", function() {
        no=$(this).index()+1;
        $(".at2_bm").hide();
        $(".at2_bm"+no).show();
        $(".at2_text ul:nth-child(1) li").css({"background":"#ddd" , "color":"black"});
        $(this).css({"background":"#7f94c3" , "color":"white"});
        top_func();
    });
    // 아티클 2 > 실행되자마자 년도별 첫번째 문구 색상 설정
    $(".at2_bm1 > li:eq(1) > div:eq(0)").css({"background":"#f37200"});
    $(".at2_bm2 > li:eq(1) > div:eq(0)").css({"background":"#f37200"});
    $(".at2_bm3 > li:eq(1) > div:eq(0)").css({"background":"#f37200"});
    // 아티클 2 > 년도별 문구 hover시 색상 변경하기
    $(".at2_hover").hover(function() {
        $(".at2_hover").css("color", "black");
        $(this).css("color", "#7f94c3")
    }, function() {
        $(".at2_hover").css("color", "black");
    });
    // 아티클 2 > 2021 ~ 2016 이미지 변경
    $(".at2_bm1> li:nth-child(3)> div").on("click", function() {
        no=$(this).index()+1;
        $(".at2_img1").hide();
        $(".at2_img1_"+no).show();
        $(".at2_click1").css("background", "#7f94c3");
        $(".at2_click1_"+no).css("background" , "#f37200");
    });

    // 아티클 2 > 2015 ~ 2008 이미지 변경
    $(".at2_bm2> li:nth-child(3)> div").on("click", function() {
        no=$(this).index()+1;
        $(".at2_img2").hide();
        $(".at2_img2_"+no).show();
        $(".at2_click2").css("background", "#7f94c3");
        $(".at2_click2_"+no).css("background" , "#f37200");
    });
    
    // 아티클 2 > 2007 ~ 1993 이미지 변경
    $(".at2_bm3> li:nth-child(3)> div").on("click", function() {
        no=$(this).index()+1;
        $(".at2_img3").hide();
        $(".at2_img3_"+no).show();
        $(".at2_click3").css("background", "#7f94c3");
        $(".at2_click3_"+no).css("background" , "#f37200");
    });


    // 아티클 3 =======================================================================
    // 아티클 3 > 양 사이드 버튼 < > 클릭시 이동
    $(".at3_text2").hide();
    $(".at3_right").on("click", function() {
        $(".at3_text1").hide();
        $(".at3_text2").show();
        $(".at3_control_bt2").css({"background":"#7f94c3", "color":"white"});
        $(".at3_control_bt1").css({"background":"white", "color":"black"});
    });
    $(".at3_left").on("click", function() {
        $(".at3_text2").hide();
        $(".at3_text1").show();
        $(".at3_control_bt1").css({"background":"#7f94c3", "color":"white"});
        $(".at3_control_bt2").css({"background":"white", "color":"black"});
    });
    // 아티클 3 > 번호 1,2 클릭시 이동
    $(".at3_control_bt1").css({"background":"#7f94c3", "color":"white"});
    $(".at3_control_bt1").on("click", function() {
        $(".at3_text2").hide();
        $(".at3_text1").show();
        $(".at3_control_bt1").css({"background":"#7f94c3", "color":"white"});
        $(".at3_control_bt2").css({"background":"white", "color":"black"});
        top_func();
    });
    $(".at3_control_bt2").on("click", function() {
        $(".at3_text1").hide();
        $(".at3_text2").show();
        $(".at3_control_bt2").css({"background":"#7f94c3", "color":"white"});
        $(".at3_control_bt1").css({"background":"white", "color":"black"});
        top_func();
    });
    // 아티클 3 > 리스트 문구 hover시 색상 변경하기
    $(".at3_list1").hover(function() { 
        no=$(this).index();  
        $(".at3_list1").css({"background":"white", "color":"black"});
        $(".at3_list1_"+no).css({"background":"#7f94c3", "color":"white"});
    }, function() {
        $(".at3_list1").css({"background":"white", "color":"black"});
    });
    $(".at3_list2").hover(function() { 
        no=$(this).index();  
        $(".at3_list2").css({"background":"white", "color":"black"});
        $(".at3_list2_"+no).css({"background":"#7f94c3", "color":"white"});
    }, function() {
        $(".at3_list2").css({"background":"white", "color":"black"});
    });
    // 아티클 3 > 게시물 클릭시 해당 게시물 화면으로 이동
    $(".at3_bm1").hide();
    $(".at3_list1").on("click", function() {
        no=$(this).index(); 
        $(".at3_text1").hide();
        $(".at3_text2").hide();
        $(".at3_control").hide();
        $(".at3_bm1_"+no).show();
        top_func();
    });
    $(".at3_bm2").hide();
    $(".at3_list2").on("click", function() {
        no=$(this).index(); 
        $(".at3_text1").hide();
        $(".at3_text2").hide();
        $(".at3_control").hide();
        $(".at3_bm2_"+no).show();
        top_func();
    });
     // 아티클 3 > 목록 버튼 클릭시 리스트 화면으로 이동
     $(".at3_turn").on("click", function() {
         $(".at3_bm1").hide();
         $(".at3_text1").show();
         $(".at3_control").show();
         top_func();
     })
     $(".at3_turn2").on("click", function() {
        $(".at3_bm2").hide();
        $(".at3_text2").show();
        $(".at3_control").show();
        top_func();
    })


    // 아티클 4 > 세부메뉴 이동 ==========================================================
    $(".at4_menu li").on("click", function() {
        no=$(this).index()+3;  
        if(no==3)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 4 > 대회일정 리스트 클릭시 슬라이드 및 색상 설정
    $(".at4_list_sub").hide();
    $(".at4_title").on("click", function() {  
        $(".at4_list_sub").slideUp();  
        if($(this).next().css("display")=="none")  
            $(this).next().slideDown();  
        else
            $(".at4_list_sub").slideUp();          
        $(".at4_title").css("background", "white").css("color", "#666666");
        $(this).css({"background": "#788286","color": "white"});
    });
    // 아티클 4 > 대회일정 리스트 클릭시 우측 버튼(▼) 방식 변경
    var isOn = 10;
    var cnt = 0; 
    $(".at4_title").on("click", function() {      
        var i = $(this).parent().index();
        if(isOn != i && cnt==1){           
            $(".at4_btn").css("transform", "rotateX(0deg)");
            $(".at4_btn", $(this)).css("transform", "rotateX(180deg)"); 
            isOn = i;  cnt=0;
        } else if(isOn!=i && cnt==0){
            $(".at4_btn").css("transform", "rotateX(0deg)");
            $(".at4_btn", $(this)).css("transform", "rotateX(180deg)");
            isOn = i; cnt=0;    
        } else if(isOn==i && cnt==0){
            $(".at4_btn").css("transform", "rotateX(0deg)");
            $(".at4_btn", $(this)).css("transform", "rotateX(0deg)");
            isOn = i; cnt=1;     
        } else if(isOn==i && cnt==1){
            $(".at4_btn").css("transform", "rotateX(0deg)");
            $(".at4_btn", $(this)).css("transform", "rotateX(180deg)");
            isOn = i; cnt=1;     
        } 
    });
    // 아티클 4 > 국가대표선발전 대진표 클릭시 대진표 화면으로 넘어가게 하는 것
    $(".at4_list_sub:eq(0) > .at4_list_sub2").on("click", function() {
        $(".at4").hide();
        $(".at5").show();
    });
    // 아티클 4 > 국가대표선발전 대회결과 클릭시 대회결과 화면으로 넘어가게 하는 것
    $(".at4_list_sub:eq(0) > .at4_list_sub3").on("click", function() {
        $(".at4").hide();
        $(".at6").show();
    });
    // 아티클 4 > 청소년선수권대회 대진표 클릭시 대진표 화면으로 넘어가게 하는 것
    $(".at4_list_sub:eq(1) > .at4_list_sub2").on("click", function() {
        $(".at4").hide();
        $(".at5").show();
    });
    // 아티클 4 > 대회결과 버튼 클릭시 알럿 팝업창 띄우기
    $(".at4_pop").hide();
    $("#at4_alert1").on("click", function() {
        $(".at4_pop").show();
    })
    $("#at4_alert2").on("click", function() {
        $(".at4_pop").show();
    })
    $("#at4_alert3").on("click", function() {
        $(".at4_pop").show();
    })
    $(".at4_pop_btn").on("click", function() {
        $(".at4_pop").hide();
    })
    // 아티클 4 > 대진표 버튼 클릭시 알럿 팝업창 띄우기
    $(".at4_pop2").hide();
    $("#at4_alert4").on("click", function() {
        $(".at4_pop2").show();
    })
    $("#at4_alert5").on("click", function() {
        $(".at4_pop2").show();
    })
    $(".at4_pop_btn2").on("click", function() {
        $(".at4_pop2").hide();
    })


    // 아티클 5 > 세부메뉴 이동 ==========================================================
    $(".at5_menu li").on("click", function() {
        no=$(this).index()+3;
        if(no==3)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });


    // 아티클 6 > 세부메뉴 이동 ==========================================================
    $(".at6_menu li").on("click", function() {
        no=$(this).index()+3;
        if(no==3)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 6 > 남자일반부 / 여자일반부 이동  
    $(".at6_text> ul:nth-child(1)> li").on("click", function() {
        no=$(this).index();
        $(".at6_bm").hide();
        $(".at6_bm"+no).show();
        $(".at6_text ul:nth-child(1) li").css({"background":"white" , "color":"#ccc"});
        $(this).css({"background":"#7f94c3" , "color":"white"});
        top_func();
    });
    // 아티클 6 > 체급 클릭시 하단 해당 결과 이동
    let at6_pos = 855, at6_count = 0, at6_no = 0;
    $(".at6_btn7_1 div").css({"background":"white", "color":"black"});
    $(".at6_btn7_1 div:eq(0)").css({"background":"#ccc", "color":"black"});
    $(".at6_btn7_2 div").css({"background":"white", "color":"black"});
    $(".at6_btn7_2 div:eq(0)").css({"background":"#ccc", "color":"black"});

    $(".at6_btn7_1 div").on("click", function() {
        at6_no=$(this).index();
        at6_count = at6_no;
        at6_pos = 855 * at6_no;

        $(".at6_img7").stop().animate({"left" : -at6_pos +"px"}, 500);
        $(".at6_btn7_1 div").css({"background":"white", "color":"black"});
        $(this).css({"background":"#ccc", "color":"black"});
    });
    $(".at6_btn7_2 div").on("click", function() {
        at6_no=$(this).index();
        at6_count = at6_no;
        at6_pos = 855 * at6_no;

        $(".at6_img7").stop().animate({"left" : -at6_pos +"px"}, 500);
        $(".at6_btn7_2 div").css({"background":"white", "color":"black"});
        $(this).css({"background":"#ccc", "color":"black"});
    });
    // 아티클 6 > 양 사이드 버튼 < > 클릭시 이동
    $(".at6_right").on("click", function() {
        if(at6_count < 6)
            at6_count++;
        at6_no = at6_count;
        at6_pos = 855 * at6_count;
        $(".at6_img7").stop().animate({"left" : -at6_pos +"px"},500);
        $(".at6_btn7_1 div").css({"background":"white", "color":"black"});
        $(".at6_btn7_1 div:eq("+at6_count+")").css({"background":"#ccc", "color":"black"});
        $(".at6_btn7_2 div").css({"background":"white", "color":"black"});
        $(".at6_btn7_2 div:eq("+at6_count+")").css({"background":"#ccc", "color":"black"});
    });
    $(".at6_left").on("click", function() {
        if(at6_count > 0)
            at6_count--;
        at6_no = at6_count;
        at6_pos = 855 * at6_count;
        $(".at6_img7").stop().animate({"left" : -at6_pos +"px"},500);
        $(".at6_btn7_1 div").css({"background":"white", "color":"black"});
        $(".at6_btn7_1 div:eq("+at6_count+")").css({"background":"#ccc", "color":"black"});
        $(".at6_btn7_2 div").css({"background":"white", "color":"black"});
        $(".at6_btn7_2 div:eq("+at6_count+")").css({"background":"#ccc", "color":"black"});
    });


    // 아티클 7 > 세부메뉴 이동 ==========================================================
    $(".at7_menu li").on("click", function() {
        no=$(this).index()+6;
        if(no==6)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 7 > 지역 hover시 우측에 팀정보 화면 노출
    $(".at7_bm").hide();

    $(".at7_bt").hover(function() {
        no=$(this).index()+1;
        $(".at7_am").hide();
        $(".at7_bm").hide();
        $(".at7_bm"+no).show();
    }, function() {
        $(".at7_bm"+no).hide();
        $(".at7_am").show();
    });


    // 아티클 8 > 세부메뉴 이동 ==========================================================
    $(".at8_menu li").on("click", function() {
        no=$(this).index()+6;
        if(no==6)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 8 > 남자선수 / 여자선수 이동 
    $(".at8_text> ul:nth-child(1)> li").on("click", function() {
        no=$(this).index()+1;
        $(".at8_bm").hide();
        $(".at8_bm"+no).show();
        $(".at8_text > ul:nth-child(1) > li").css({"background":"#ddd" , "color":"black"});
        $(this).css({"background":"#7f94c3" , "color":"white"});
    });
     // 아티클 8 > 선수이미지 클릭시 하단에 선수정보 상세보기 
    $(".at8_bm1> ul").on("click", function() {
        no=$(this).index()+1;
        $(".at8_hover1").hide();
        $(".at8_hover1_"+no).show();
        $(".at8_bm1> ul").css("border", "1px solid #ccc");
        $(this).css("border", "3px solid black");
    });
    $(".at8_bm2> ul").on("click", function() {
        no=$(this).index()+1;
        $(".at8_hover2").hide();
        $(".at8_hover2_"+no).show();
        $(".at8_bm2> ul").css("border", "1px solid #ccc");
        $(this).css("border", "3px solid black");
    });


    // 아티클 9 > 세부메뉴 이동 ==========================================================
    $(".at9_menu li").on("click", function() {
        no=$(this).index()+8;
        if(no==8)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 9 > 양 사이드 버튼 < > 클릭시 이동
    $(".at9_text2").hide();
    $(".at9_bm1").hide();
    $(".at9_bm2").hide();
    $(".at9_bm3").hide();

    $(".at9_right").on("click", function() {
        $(".at9_text1").hide();
        $(".at9_text2").show();
        $(".at9_control_bt2").css({"background":"#7f94c3", "color":"white"});
        $(".at9_control_bt1").css({"background":"white", "color":"black"});
        top_func();
    });
    $(".at9_left").on("click", function() {
        $(".at9_text2").hide();
        $(".at9_text1").show();
        $(".at9_control_bt1").css({"background":"#7f94c3", "color":"white"});
        $(".at9_control_bt2").css({"background":"white", "color":"black"});
        top_func();
    });
    // 아티클 9 > 번호 1,2 클릭시 이동
    $(".at9_control_bt1").css({"background":"#7f94c3", "color":"white"});
    $(".at9_control_bt1").on("click", function() {
        $(".at9_text2").hide();
        $(".at9_text1").show();
        $(".at9_control_bt1").css({"background":"#7f94c3", "color":"white"});
        $(".at9_control_bt2").css({"background":"white", "color":"black"});
        top_func();
    });
    $(".at9_control_bt2").on("click", function() {
        $(".at9_text1").hide();
        $(".at9_text2").show();
        $(".at9_control_bt2").css({"background":"#7f94c3", "color":"white"});
        $(".at9_control_bt1").css({"background":"white", "color":"black"});
        top_func();
    });
    // 아티클 9 > 컨텐츠 클릭시 상세보기 화면으로 이동
    $(".at9_btn1").on("click", function() {
        no=$(this).index()+1;
        $(".at9_control").hide();
        $(".at9_bm1_"+no).show();
        top_func();
    })
    $(".at9_btn2").on("click", function() {
        no=$(this).index()+1;
        $(".at9_control").hide();
        $(".at9_bm2_"+no).show();
        top_func();
    })
    $(".at9_btn3").on("click", function() {
        no=$(this).index()+1;
        $(".at9_control").hide();
        $(".at9_bm3_"+no).show();
        top_func();
    })

    // 아티클 9 > 상세보기 화면 내 목록 버튼 클릭시 리스트 화면으로 이동    
    $(".at9_turn1").on("click", function() {
        $(".at9_bm1").hide();
        $(".at9_text1").show();
        $(".at9_control").show();
        top_func();
    })
    $(".at9_turn2").on("click", function() {
        $(".at9_bm2").hide();
        $(".at9_text1").show();
        $(".at9_control").show();
        top_func();
    })
    $(".at9_turn3").on("click", function() {
        $(".at9_bm3").hide();
        $(".at9_text2").show();
        $(".at9_control").show();
        top_func();
    })


    // 아티클 10 > 세부메뉴 이동 ==========================================================
    $(".at10_menu li").on("click", function() {
        no=$(this).index()+8;
        if(no==8)
            ;
        else {
            $(".at").hide();
            $(".at"+no).show();
        }
    });
    // 아티클 10 > Q클릭시 A슬라이드 설정
    $(".at10_list_sub").hide();
    $(".at10_title").on("click", function() {  
        $(".at10_list_sub").slideUp();  
        if($(this).next().css("display")=="none")  
            $(this).next().slideDown();  
        else
            $(".at10_list_sub").slideUp();
    });


    // 아티클 11 > 회원가입 버튼 클릭시 회원가입 화면으로 이동
    $(".at11_btn").on("click", function() {
        $(".at11").hide();
        $(".at12").show();
    })

});




function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
}



// 아티클5 셀렉트 박스 ==================================================================
// 1번째 셀렉트박스 선택시, 부서 셀렉박스 활성화 
function at5_sel(at5_sel) {
    glo_no=at5_sel.selectedIndex;
    $(".at5_sel").hide();
    $(".at5_sel"+glo_no).show();
}

// 2번째 셀렉트박스 선택시, 해당 부서에 해당되는 체급 셀렉박스 활성화
function at5_combo(at5_combo) {
    glo_no=at5_combo.selectedIndex;
    $(".at5_combo3").hide();
    $(".at5_combo").hide();
    $(".at5_combo"+glo_no).show();
}
function at5_combo3(at5_combo3) {
    glo_no=at5_combo3.selectedIndex;
    $(".at5_combo").hide();
    $(".at5_combo3").hide();
    $(".at5_combo3"+glo_no).show();
}

// 3번째 셀렉트박스 선택시, 해당 체급에 해당되는 대진표이미지 노출
function at5_box(at5_box) {
    glo_no=at5_box.selectedIndex;

    $(".at5_box2").hide();
    $(".at5_box3").hide();
    $(".at5_box4").hide();
    $(".at5_box").show();
    $(".at5_pic").attr("src", "img3/11"+glo_no+".png");
}
function at5_box2(at5_box2) {
    glo_no2=at5_box2.selectedIndex;

    $(".at5_box").hide();
    $(".at5_box3").hide();
    $(".at5_box4").hide();
    $(".at5_box2").show();
    $(".at5_pic2").attr("src", "img3/12"+glo_no2+".png");
}

function at5_box3(at5_box3) {
    glo_no3=at5_box3.selectedIndex;

    $(".at5_box").hide();
    $(".at5_box2").hide();
    $(".at5_box4").hide();
    $(".at5_box3").show();
    $(".at5_pic3").attr("src", "img3/21"+glo_no3+".png");
}
function at5_box4(at5_box4) {
    glo_no4=at5_box4.selectedIndex;

    $(".at5_box").hide();
    $(".at5_box2").hide();
    $(".at5_box3").hide();
    $(".at5_box4").show();
    $(".at5_pic4").attr("src", "img3/22"+glo_no4+".png");
}



//클릭시 무조건 첫 화면으로 이동
function first_func() {
    $(".at3_bm1").hide();
    $(".at3_text1").show();
    $(".at3_control").show();
    top_func();
    
    
}





