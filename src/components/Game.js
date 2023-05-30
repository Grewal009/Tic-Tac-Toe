import Square from './Square';

const Game = () => {
    return(
    <div className='w-screen h-screen bg-red-200 flex justify-center items-center'>
        <div className='w-[240px] border-2 border-gray-600 bg-green-200'>
            <div className='flex'>
                <Square value={1}/>
                <Square value={1}/>
                <Square value={1}/>
            </div>

            <div className='flex'>
                <Square value={1}/>
                <Square value={1}/>
                <Square value={1}/>
            </div>

            <div className='flex'>
                <Square value={1}/>
                <Square value={1}/>
                <Square value={1}/>
            </div>
            
        </div>
    </div>
    )
}

export default Game;