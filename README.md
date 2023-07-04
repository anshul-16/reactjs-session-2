![cover-image.png](cover-image.png)

# ReactJs Session : PART-2

This session covers the basics of ReactJs.

---

### **Goal of the session**

The goal of this session is to dive a little bit in the ReactJs ecosystem.

### **Prerequisites**

- ReactJs Session : PART-1

### Let’s Dive In

1. State
    - React components has a built-in `state` object.
    - The `state` object is where you store property values that belong to the component.
    - When the `state` object changes, the component re-renders.
        
        ```jsx
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
        ```
        
2. Props
    - Props are arguments passed into React components.
    - Props are passed to components via HTML attributes.
        
        ```jsx
        const ParentComp = () => {
            return(
                <div>
                    <div>Parent Component</div>
                    <br />
                    <ChildComponent name='Aman' class='6' />
                    <br />
                    <ChildComponent name='Rahul' class='10'/>
                </div>
            )
        }
        
        const ChildComponent = (props) => {
            return(
                <div>
                    <div>Child info-</div>
                    <div>Name - {props.name}</div>
                    <div>Class - {props.class}</div>
                </div>
            )
        }
        ```
        
3. [Functional vs Class-Components in React](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)
    
    ```jsx
    // Functional Component
    const ChildComponent = (props) => {
        
        return(
            <div>
                <div>Child info-</div>
                <div>Name - {props.name}</div>
                <div>Class - {props.class}</div>
            </div>
        )
    }
    ```
    
    ```jsx
    // Class Component
    class ChildComponent extends React.Component{
        render() {
            return(
                <div>
                    <div>Child info-</div>
                    <div>Name - {this.props.name}</div>
                    <div>Class - {this.props.class}</div>
                </div>
            )
        }
    }
    ```
    
    **Differences**
    
    - Syntax difference
    - Difference can be seen via Babel compiled code
    - Functional components are also called Stateless component but with hooks you can use hook, useState() to work with the state object.
    - Functional component are much **easier to read and test**
    - React team mentioned that there may be a **performance** boost for functional component in future React versions
4. Component LifeCycle
    - A React component undergoes three different phases in its lifecycle, including mounting, updating, and unmounting.
5. [Hooks](https://www.w3schools.com/react/react_hooks.asp) - useState, useEffect, useRef, etc.
    - Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
    - [useState()](https://www.w3schools.com/react/react_usestate.asp) hook
    - [useEffect()](https://www.w3schools.com/react/react_useeffect.asp) hook
        - The `useEffect` Hook allows you to perform side effects in your components.
        - Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        - `useEffect` accepts two arguments. The second argument is optional.
        - `useEffect(<function>, <dependency>)`
        
        ```jsx
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
        ```
        
    - [useRef()](https://www.w3schools.com/react/react_useref.asp) hook
        - The `useRef` Hook allows you to persist values between renders.
        - It can be used to store a mutable value that does not cause a re-render when updated.
        - It can be used to access a DOM element directly.
        
        ```
        //Counting the number of renders
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
        ```
        
        ```jsx
        // Accessing DOM Element
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
        ```
        

### Next Steps?

- Axios with ReactJs
- [React Router](https://www.w3schools.com/react/react_router.asp) [ to manage Routing ]
- [TypeScript](https://www.typescriptlang.org/)
- Actions / Reducers
- ReactJs DevTools
- Webpack
    - Webpack is an asset bundler
    - Babel with Webpack
    - Source maps with Webpack
- [Named Export vs Default Export in ES6](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)
- [Create React App](https://create-react-app.dev/)
- ReactJs White App

**To run the application use the below commands-**

- npx live-server public
- npx babel src/index.js --out-file=public/index.js --presets @babel/preset-react,@babel/preset-env --watch

---

# Thank You ✨

---
