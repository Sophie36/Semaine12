function play(e){
  if (game_started){

    if(count > col_array.length - 1){
        add_a_cross(e);
        end();
        announce_winner();
      } else {
        // here you play //
        if(current_player == 1){
          add_a_cross(e);
        } else {
          add_a_cicle(e);
        }
        if(game_ended == false){
          announce_player();
        }else{
          player_board.innerHTML = "";
        }
      }
    }else{
      $intel_board.innerHTML = "<h4> Aucune partie en cours, cliquez sur 'commencer' ! </h4>"
      console.log('Aucune partie en cours.');
    }


}

// events //

function add_grid_events(){
  for (i = 0; i < col_array.length; i++){
    col_array[i].addEventListener('click', play, false);
  }
}

function start() {
  reset_grid();
  add_grid_events();
  count = 1;
  winner = 0;
  game_started = true;
  game_ended = false;
  console.log('la partie est lancé !')
  current_player = 1;
  announce_player();
}

$btn.addEventListener('click', start, false);