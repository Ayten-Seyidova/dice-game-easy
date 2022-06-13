import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { image } from "./Constant/image";
import { Button } from './Components/Button';
import { Dice } from './Components/Dice';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstDiceImage: "",
      secondDiceImage: "",
      shake: false,
    };
  }

  randomAttack() {
    let randomFirst = Math.ceil(Math.random() * 6);
    let randomSecond = Math.ceil(Math.random() * 6);

    this.setState({
      firstDiceImage: image[`dice${randomFirst}`],
      secondDiceImage: image[`dice${randomSecond}`]
    })

    this.setState({ shake: true });

    setTimeout(() => {
      this.setState({ shake: false });
    }, 1000)
  }

  render() {
    return (
      <div className="container mt-5">
        <Dice shake={this.state.shake} firstDiceImage={this.state.firstDiceImage} secondDiceImage={this.state.secondDiceImage} />

        <Button shake={this.state.shake} randomAttack={() => { this.randomAttack() }} />
      </div>
    );
  }

}

export default App;
