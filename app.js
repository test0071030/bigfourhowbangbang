var bang=1;

$(document).ready(function(){
  
  $("#season_not_summer").click(function() {
    var fee = [1.63, 2.1, 2.89, 3.79, 4.42, 4.83];
    var bang=1;
  })
  
  $("#season_summer").click(function() {
    var fee = [1.63, 2.38, 3.52, 4.61, 5.42, 6.13];
    var bang=1;
  })
  
  $("#season_mix").click(function() {
    var bang=2;
  })

  $("#start_calculate").click(function() {
    var milk_previous=$('#milk_previous').val();
    var black_previous=$('#black_previous').val();
    var pinch_previous=$('#pinch_previous').val();
    var king_previous=$('#king_previous').val();

    var milk_this=$('#milk_this').val();
    var black_this=$('#black_this').val();
    var pinch_this=$('#pinch_this').val();
    var king_this=$('#king_this').val();
    
    if (bang==2){
      var parta=$('#not_summer_part').val();
      var partb=$('#summer_part').val();
      var partall= parta+partb;
      var fee1 = 1.63;
      var fee2 = (parta*2.1+partb*2.38)/partall;
      var fee3 = (parta*2.89+partb*3.52)/partall;
      var fee4 = (parta*3.79+partb*4.61)/partall;
      var fee5 = (parta*4.42+partb*5.42)/partall;
      var fee6 = (parta*4.83+partb*6.13)/partall;
      var fee = [fee1, fee2, fee3, fee4, fee5, fee6];
    }
    
    console.log (fee);
    
  })
  
  
})
