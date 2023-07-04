const App = () => {

    const [value,setValue] = React.useState("")
    const count = React.useRef(0)

    React.useEffect(() => {
        count.current = count.current+1   
    })

    return(
        <>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <div>Render count = {count.current}</div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);