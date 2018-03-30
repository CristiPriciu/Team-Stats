//The team objects and properties
const team = {
  _players: [
    {firstName: 'Isaac',
     lastName: 'Asimov',
     age: 80},
   {firstName: 'Jules',
     lastName: 'Verne',
     age: 100},
    {firstName: 'John',
     lastName: 'Scalzi',
     age: 30}
  ],
  _games: [
    {opponent: "Redshirts",
     teamPoints: 40,
     opponentPoints: 30},
    {opponent: "Ubik",
     teamPoints: 70,
     opponentPoints: 45},
    {opponent: "Neuromancer",
     teamPoints: 30,
     opponentPoints: 12}
  ], 
//Getter methods
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
//Method to add new player to the team
  addPlayer(firstName,lastName,age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age};
  this.players.push(player);  
},
//Method for recording game results
  addGame(opponent,teamPoints,opponentPoints){
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
   this.games.push(game);
  }
};
//Invoking addPlayer method and printing them to check if they are added
team.addPlayer('Robert','Heinlein',60);
team.addPlayer('Mary','Shelley',101);
team.addPlayer('Frank','Herbert',45);
console.log(team.players);
team.addGame('Red Mars',50,50);
team.addGame('Dune',100,150);
team.addGame('Un capitaine de quinze ans',50,50);
console.log(team.games);