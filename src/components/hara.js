import { React, Component } from "react";
import bhairava from './bhairava.png';
import bhairavi from './bhairavi.jpg';

class Hara extends Component {
    constructor(props){
        super(props)
        this.state = {
            hara:"Bhairava",
            durga:"Bhairavi"
        }
    }

    render(){
        return(
            <div>
                <img src={bhairava} width="500" height="400" alt="bhairava"/>
                <p>{this.state.hara}</p>
                <img src={bhairavi} width="500" height="400" alt="bhairavi"/>
                <p>{this.state.durga}</p>
            </div>
        )
    }
}

export default Hara;