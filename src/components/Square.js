

const Square = ({value, onSquareClick}) => {

    return(
        <div className="w-20 h-20 bg-slate-100 border-2 border-spacing-5 border-gray-600">
            <p onClick={onSquareClick} className="h-full flex justify-center items-center text-6xl font-bold text-gray-700">{value}</p>
        </div>
    )
}

export default Square;