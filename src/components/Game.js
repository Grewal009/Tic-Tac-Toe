import {useState} from 'react';
import Square from './Square';

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [count, setCount] = useState(0);
    

    const winner = calculateWinner(squares);

    let status;
    if(winner){
        status = `Winner : ${winner} 👍`;
    }else if(count === 9){
        status = `Game Over`;
    }
    else{
        status = `Next Player : ${xIsNext ? 'X':'O'}`;
    }

    function handleClick(i){
        //early return
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquare = squares.slice();
        if(xIsNext){
            nextSquare[i] = "X";
            setXIsNext(false);
        }else{
            nextSquare[i] = "O";
            setXIsNext(true);
        }
        
        setSquares(nextSquare);
        setCount(count+1);
        console.log(count);
    }

    function playAgain(){
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setCount(0);
    }

    return(
    <div className='w-screen h-screen bg-red-200 flex justify-center items-center'>
        <div> <h1 className='text-center text-xl font-bold mb-1'>{status}</h1>
        <div className='w-[240px] border-2 border-gray-600 bg-green-200'>
            <div className='flex'>
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
            </div>

            <div className='flex'>
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
            </div>

            <div className='flex'>
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
            
        </div>
        {
            winner || count === 9
            ?(
                <div className='flex justify-center'>
        <button onClick={playAgain} className='mt-2 w-28 py-2 text-gray-800 text-lg font-semibold bg-slate-300 hover:bg-slate-400 rounded-xl '>Play again</button>
        </div>
            ) :(
                <div className='flex justify-center'>
        <button  className='mt-2 w-28 py-2 text-gray-800 text-lg font-semibold bg-slate-300 hover:bg-slate-400 rounded-xl opacity-0'>Play again</button>
        </div>
            )
        }
        </div>
        
    
    </div>
    )
}

export default Game;

function calculateWinner(squares){
    const lines = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}