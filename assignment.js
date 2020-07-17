// //FeetToMile
function feetToMile(feet){
    var result=feet/5280
    return result
}


//WoodCalculator

  function WoodCalculator(chair,table,bed){
      var WoodForChair=chair*1
      var WoodForTable=table*3
      var WoodForBed=bed*5
      var totalWood=WoodForChair+WoodForTable+WoodForBed
      return totalWood
  }


 //tinyFriend

 function tinyFriend(friends){
        var tiny=friends[0];
        for(var i=0;i>friends.length;i--){
            var friend1=friends[i];
        if(friend1<tiny){
                tiny=friend1
            }
        }
        return tiny
        }
 