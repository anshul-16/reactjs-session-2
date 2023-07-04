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

// const ChildComponent = (props) => {
    
//     console.log(props)
//     return(
//         <div>
//             <div>Child info-</div>
//             <div>Name - {props.name}</div>
//             <div>Class - {props.class}</div>
//         </div>
//     )
// }

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

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ParentComp />);