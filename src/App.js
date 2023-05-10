import {useState} from 'react';



function App(){
    const [count, setCount] = useState(0);


    const handleClick = () =>{
        setCount(count+1)
    }
    const clearAnimals = () => {
        setCount(0)
    }
    return <div>
        <button onClick={handleClick}>Add Animal</button>
        <button onClick={clearAnimals}>Clear Animals</button>
        <div>Number of animals: {count}</div>

    </div>
}

export default App;