class Input {
  constructor(){
    this.player1 = undefined;
    this.player2 = undefined;
  }
  onClick(context, state, view){
    if(!['X', 'O'].includes(context.innerHTML)){
      context.innerHTML = state.turn ? 'X' : 'O';
      let coords = context.className.slice(-2)
      state.updateBoard(coords[1],coords[0]);
      if(state.checkWin(coords[1],coords[0])){
        let winner = state.turn ? 'X' : 'O';
        state.updateScore(winner);
        view.endGameViewUpdate(winner,state, this.player1, this.player2);
        state.resetState();
      } else if(state.totalMoves === 9){
        state.score.ties++;
        view.tieGameUpdate()
        state.resetState();
      } else{
      // state.rotate(state.board);
      state.turn = !state.turn
      document.getElementById('turn').innerHTML = `<b>Turn:</b> ${state.turn ? this.player1 + ' (X)' : this.player2 + ' (O)'}`;
      }
    }
  }
  getPlayerNames(){
    this.player1 = prompt('Enter Player 1\'s name','Player 1');
    this.player2 = prompt('Enter Player 2\'s name','Player 2');
  }
}