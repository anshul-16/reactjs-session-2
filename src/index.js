const Counter = () => {
    const [count, setCount] = React.useState(0) 
    const [items, setItems] = React.useState(["10","12","12"])   

    const handleClick = (e) => {
        setCount(count => count+1)
    }

    const changeItem = (e) => {
        const newItems = items.map(item => {
            if(item=="12"){
                return "13"
            } else 
            return item
        })
        setItems(newItems)
    }

    return (
        <div>
            <div>Counter : {count}</div>
            <button onClick={handleClick}>Increse by 1</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            {
                [
                    <div key="1">item one</div>,
                    <div key="2">item two</div>
                ]
            }
            {
                items.map(item => 
                    <div key={item}>{item}</div>    
                )
            }
            <button onClick={changeItem}>Change item</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Counter />);