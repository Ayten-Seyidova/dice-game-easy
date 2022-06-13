import { Component } from "react";
import './index.css'
import DiceImg from "../../image/dice.png"

export class Dice extends Component {
    render() {
        return (
            <div className="row dice">
                <div className="col-6">
                    <img src={this.props.firstDiceImage ? this.props.firstDiceImage : DiceImg} className={`m-auto d-block ${this.props.shake && 'animate'}`} />
                </div>
                <div className="col-6">
                    <img src={this.props.secondDiceImage ? this.props.secondDiceImage : DiceImg} className={`m-auto d-block ${this.props.shake && 'animate'}`} />
                </div>
            </div>
        )
    }
}