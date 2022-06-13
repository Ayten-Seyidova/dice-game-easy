import { Component } from "react";
import './index.css'

export class Button extends Component {
    render() {
     
        return (<>
            <button className={`btn shake-btn btn-secondary m-auto`} onClick={this.props.randomAttack} disabled={this.props.shake && true}>{this.props.shake ? 'Rolling...' : 'Roll dice!'}</button>
        </>)
    }
}