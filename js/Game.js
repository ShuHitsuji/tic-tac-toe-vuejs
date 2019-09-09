class Game{
    constructor(){
        this.inProgress=true;
        this.winner= null;
        this.currentTurn=Game.O;
        this.movesMode=0;
        this.squares = Array(9).fill().map(s => new Square());
    }

    makeMove(i){
        if(this.inProgress && !this.squares[i].value){
            this.squares[i].value=this.currentTurn;

            this.movesMode++;
            this.checkForWinner();
            this.currentTurn=(this.currentTurn === Game.O)? Game.X : Game.O;
        }
    }

    empezarOtro(game){
        game=new Game();
    }

    checkForWinner(){
        const winningCombinations=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        winningCombinations.forEach((wc)=>{
            const [a,b,c]=wc;
            const sqA=this.squares[a];
            const sqB=this.squares[b];
            const sqC=this.squares[c];

            if(sqA.value && sqA.value=== sqB.value && sqB.value === sqC.value){
                this.inProgress=false;
                this.winner=sqA.value;//o or x?
                sqA.isHighlighted=sqB.isHighlighted=sqC.isHighlighted=true;
            }
        });

        if(this.movesMode===this.squares.length){
            this.inProgress=false;
        }
    }
    
}
Game.O='O';
Game.X='X';