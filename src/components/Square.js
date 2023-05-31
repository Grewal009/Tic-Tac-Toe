

const Square = ({value, onSquareClick, isWinning}) => {
    const normalSquare = "h-full flex justify-center items-center text-6xl font-bold text-gray-700";
    const winnerSquare = "h-full flex justify-center items-center text-6xl font-bold text-gray-700 bg-green-500";

    return(
        <div className="w-20 h-20 bg-slate-100 border-2 border-spacing-5 border-gray-600">
            <p onClick={onSquareClick} className={isWinning ? winnerSquare : normalSquare}>{value}</p>
        </div>
    )
}

export default Square;