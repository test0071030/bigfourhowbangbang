var bang=0;
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
    $("#start_calculate").show(1);

  })
  
  $("#season_summer").click(function() {
    if (bang!=2){
     $("#not_summer_calculate").hide(1);
     $("#summer_calculate").show(1);
     $("#mix_calculate").hide(1);
    }

    fee = [1.63, 2.38, 3.52, 4.61, 5.42, 6.13];
    bang=2;
    $("#start_calculate").show(1);
  })
  
  $("#season_mix").click(function() {
    if (bang!=3){
     $("#not_summer_calculate").hide(1);
     $("#summer_calculate").hide(1);
     $("#mix_calculate").show(1);
    }

    bang=3;
    $("#start_calculate").show(1);
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
      four_percent[i]=four_number[i]/four_sum;
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

    four_othersum=sum_fee-four_airsum;

    for (i=0;i<=3;i++){
      four_air[i]=four_airsum*four_percent[i];
    }
    
    for (i=0;i<=3;i++){
      four_final[i]=Math.round(four_air[i]+four_othersum/4);
    }

    console.log (four_number);
    console.log (four_sum);
    console.log (four_percent);
    console.log (four_use)
    console.log (number);
    console.log (fee);
    console.log (four_airsum);
    console.log (four_air);
    console.log (four_othersum);
    console.log (four_final); 
    })
  
  
})
