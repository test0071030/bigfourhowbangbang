var bang=0;
var bong=0;
var fee = [1.63, 2.1, 2.89, 3.79, 4.42, 4.83];
var index_number = [0,240,660,1000,1400,2000];

$(document).ready(function(){
  
  $("#season_not_summer").click(function() {
    if (bang!=1){
     $("#not_summer_calculate").show(1);
     $("#summer_calculate").hide(1);
     $("#mix_calculate").hide(1);
    }
    fee = [1.63, 2.1, 2.89, 3.79, 4.42, 4.83];
    bang=1;
    $("#result").hide(1);
    if(bang>0&&bong>0){
    $("#start_calculate").show(1);
  }
  })
  
  $("#season_summer").click(function() {
    if (bang!=2){
     $("#not_summer_calculate").hide(1);
     $("#summer_calculate").show(1);
     $("#mix_calculate").hide(1);
    }

    fee = [1.63, 2.38, 3.52, 4.61, 5.42, 6.13];
    bang=2;
    $("#result").hide(1);
    if(bang>0&&bong>0){
    $("#start_calculate").show(1);
  }
  })
  
  $("#season_mix").click(function() {
    if (bang!=3){
     $("#not_summer_calculate").hide(1);
     $("#summer_calculate").hide(1);
     $("#mix_calculate").show(1);
    }

    bang=3;
    $("#result").hide(1);
    if(bang>0&&bong>0){
    $("#start_calculate").show(1);
  }
  })

  $("#not_by_day").click(function(){
    bong=1;
    $("#block4_1").show(1);
    $("#block4_2").hide(1);
    if(bang>0&&bong>0){
    $("#start_calculate").show(1);
    }
    $("#result").hide(1);
  })

  $("#by_day").click(function(){
    bong=2;
    $("#block4_1").hide(1);
    $("#block4_2").show(1);
    if(bang>0&&bong>0){
    $("#start_calculate").show(1);
    }
    $("#result").hide(1);
  })



  $("#start_calculate").click(function() {
    var number=[0,0,0,0,0,0];
    var four_number=[0,0,0,0];
    var four_sum=0;
    var four_percent=[0,0,0,0];
    var all_number=0;
    var four_use=[0,0,0,0,0,0];
    var banana=0;
    var four_airsum=0;
    var four_air=[0,0,0,0];
    var four_othersum=0;
    var four_final=[0,0,0,0];
    var four_final_all=0;
    var home_allowance=0;
    var bababa=0;
    var cacaca=0;

    
    var milk_previous=parseFloat($('#milk_previous').val());
    var black_previous=parseFloat($('#black_previous').val());
    var pinch_previous=parseFloat($('#pinch_previous').val());
    var king_previous=parseFloat($('#king_previous').val());
    var previous=[milk_previous,black_previous,pinch_previous,king_previous];

    var milk_now=parseFloat($('#milk_this').val());
    var black_now=parseFloat($('#black_this').val());
    var pinch_now=parseFloat($('#pinch_this').val());
    var king_now=parseFloat($('#king_this').val());
    var now=[milk_now,black_now,pinch_now,king_now];

    var sum_fee=parseFloat($('#sum_fee').val());


    for (i=0;i<=3;i++){
      four_number[i]=now[i]-previous[i];
      four_sum+=four_number[i];
    }

    for (i=0;i<=3;i++){
      if (four_sum==0){
        four_percent[i]=0;
      }
      else{
        four_percent[i]=four_number[i]/four_sum;
      }
    }
    
    if (bang==1){
      all_number=parseInt($("#not_summer_number_all").val());
    }

    if (bang==2){
      all_number=parseInt($("#summer_number_all").val());
    }


    if (bang==3){
      var parta=parseInt($('#not_summer_part').val());
      var partb=parseInt($('#summer_part').val());
      var partall= parta+partb;
      var fee1 = 1.63;
      var fee2 = (parta*2.1+partb*2.38)/partall;
      var fee3 = (parta*2.89+partb*3.52)/partall;
      var fee4 = (parta*3.79+partb*4.61)/partall;
      var fee5 = (parta*4.42+partb*5.42)/partall;
      var fee6 = (parta*4.83+partb*6.13)/partall;
      fee = [fee1, fee2, fee3, fee4, fee5, fee6];

      all_number=parseInt($("#mix_all").val());
    }

    if (bong==2){
      var milk_day=parseFloat($('#milk_day').val());
      var black_day=parseFloat($('#black_day').val());
      var pinch_day=parseFloat($('#pinch_day').val());
      var king_day=parseFloat($('#king_day').val());
      var day=[milk_day,black_day,pinch_day,king_day];
    }

    if (all_number>0){
      if(sum_fee>0){
        $("#sum_fee2").removeClass("wrong");
        bababa+=1;
      }
      else{
        $("#sum_fee2").addClass("wrong");
        $("#result").hide(1);
      }

      if(bang==1){
        $("#not_summer_calculate").removeClass("wrong");
      }

      else if(bang==2){
        $("#summer_calculate").removeClass("wrong");
      }

      else if(bang==3){
        if (parta>=0&&partb>=0&&parta+partb>0){

          $("#mix_calculate").removeClass("wrong");

        }

        else{
          $("#mix_calculate").addClass("wrong");
          $("#result").hide(1);
        }

      }

      for (i=0;i<=3;i++){
        if(previous[i]>0 && now[i]>0 && now[i]>=previous[i]){
          bababa+=1;
          if(i==0){
            $("#milk1").removeClass("wrong");
            $("#milk2").removeClass("wrong");
          }
          else if(i==1){
            $("#black1").removeClass("wrong");
            $("#black2").removeClass("wrong");
          }
          else if(i==2){
            $("#pinch1").removeClass("wrong");
            $("#pinch2").removeClass("wrong");
          }
          else if(i==3){
            $("#king1").removeClass("wrong");
            $("#king2").removeClass("wrong");
          }
        }

        else if(i==0){
         $("#milk1").addClass("wrong");
         $("#milk2").addClass("wrong");
         $("#result").hide(1);
        }
        else if(i==1){
          $("#black1").addClass("wrong");
          $("#black2").addClass("wrong");
          $("#result").hide(1);
        }
        else if(i==2){
         $("#pinch1").addClass("wrong");
         $("#pinch2").addClass("wrong");
         $("#result").hide(1);
        }
        else if(i==3){
         $("#king1").addClass("wrong");
         $("#king2").addClass("wrong");
         $("#result").hide(1);
        }

      }
    }

    else if(bang==1){
      $("#not_summer_calculate").addClass("wrong");
      $("#result").hide(1);
    }

    else if(bang==2){
        $("#summer_calculate").addClass("wrong");
    $("#result").hide(1);
    }

    else if(bang==3){
      $("#mix_calculate").addClass("wrong");
      $("#result").hide(1);
    }
    
    if (bong==1){
      cacaca=4;
    }

    if (bong==2){
      for (i=0;i<=3;i++){
        if (day[i]>=0){
          cacaca+=1;
          if(i==0){
            $("#milk3").removeClass("wrong");
          }
          else if(i==1){
            $("#black3").removeClass("wrong");
          }
          else if(i==2){
            $("#pinch3").removeClass("wrong");
          }
          else if(i==3){
            $("#king3").removeClass("wrong");
          }
        }

        else if(i==0){
         $("#milk3").addClass("wrong");
         $("#result").hide(1);
        }
        else if(i==1){
          $("#black3").addClass("wrong");
         $("#result").hide(1);
        }
        else if(i==2){
         $("#pinch3").addClass("wrong");
         $("#result").hide(1);
        }
        else if(i==3){
         $("#king3").addClass("wrong");
         $("#result").hide(1);
        }
      }
    }




    console.log(bababa);

    if (bababa==5&&cacaca==4){

      for (i=0;i<=5;i++){
      
        if (all_number<=index_number[i+1]){
          number[i]=all_number-index_number[i];
          break; 
        }

        else{
          if (i==5){
            number[5]=all_number-index_number[5];
            break;
          }

          else{
            number[i]=index_number[i+1]-index_number[i];
          }

        }
      } 

      for (i=5;i>=0;i--){
        if (four_sum>number[i]){
          four_use[i]=number[i];
          four_sum-=number[i];
        }

        else{
          four_use[i]=four_sum;
          break;
        }
      }




      for (i=5;i>=0;i--){
        four_airsum+=four_use[i]*fee[i];
      }

      for (i=0;i<=3;i++){
        four_air[i]=four_airsum*four_percent[i];
      }

      four_othersum=sum_fee-four_airsum;

      if (bong==1){
        for (i=0;i<=3;i++){
          four_final[i]=Math.round(four_air[i]+four_othersum/4);
          four_final_all+=four_final[i];
        }
      }

      else if (bong==2){
        var day_sum=0;
        for (i=0;i<=3;i++){
          day_sum+=day[i];
        }

        for (i=0;i<=3;i++){
          four_final[i]=Math.round(four_air[i]+four_othersum*day[i]/day_sum);
          four_final_all+=four_final[i];
        }
      }

      home_allowance=sum_fee-four_final_all;



      
      console.log (four_final);
      console.log (home_allowance);
      
      $("#result").show(1).html("乃ㄍㄧ："+four_final[0]+"元<br>翹臀隊長："+four_final[1]+"元<br>品ㄍㄧ："+four_final[2]+"元<br>子ㄍㄧ："+four_final[3]+"元<br>家費補助："+home_allowance+"元");
      }
    })
  
  
})
