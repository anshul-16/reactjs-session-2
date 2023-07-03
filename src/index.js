const Counter = () => {

    const [count,setCount] = React.useState(0)

    const handleButtonClick = () => {
        setCount(count => count+1)
    }

    return(
        <>
            <div>Count: {count}</div>
            <button onClick={handleButtonClick}>Increase by 1</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Counter />);