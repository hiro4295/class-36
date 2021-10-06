class Game{
  constructor(){

  }
  getState(){
    var game_state_ref = database.ref("gameState");
    game_state_ref.on('value',function(data){
      gameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      gameState : state
    })
  }
  start(){
    if(gameState == 0){
      player = new Player()
      player.getCount()
      form = new Form()
      form.display()
    }
  }
}
