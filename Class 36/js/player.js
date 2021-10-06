class Player{
  constructor(){

  }
  getCount(){
    var player_count_ref = database.ref("playerCount");
    player_count_ref.on('value',function(data){
      playerCount = data.val();
    })
  }
  updateCount(count){
    database.ref('/').update({
      playerCount : count
    })
  }
  update(name){
    var player_index = "player" + playerCount ;
    database.ref(player_index).set({
      name: name
    })
  }
}
