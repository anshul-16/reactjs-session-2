const Counter = () => {

    const [count,setCount] = React.useState(0)

    React.useEffect(() => {
        setCount(count => count+1)
    },[])

    return(
        <div>Counter : {count}</div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Counter />);