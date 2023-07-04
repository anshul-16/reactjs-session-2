const App = () => {
    const inputElement = React.useRef();
  
    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);