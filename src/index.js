const Counter = () => {

    const [count,setCount] = React.useState(0)
    const [tempState, setTempState] = React.useState(true);

    React.useEffect(() => {
        setCount(count => count+1)
    },[tempState])

    return(
        <>
            <div>Counter : {count}</div>
            <button onClick={() => setTempState(prev => !prev)}>Change Temp State</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Counter />);