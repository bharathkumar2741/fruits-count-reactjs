import {Component} from 'react'
import './index.css'
class FruitsCounter extends Component {

state={mangocount:0,bananacount:0}

onIncrementBtn1=()=>{
  this.setState(
    (prevCount)=>({mangocount:prevCount.mangocount+1})
  )
}
onIncrementBtn2=()=>{
  this.setState(
    (prevCount)=>({bananacount:prevCount.bananacount+1})
  )
}

  render() {
    const {mangocount,bananacount}=this.state;
    return (
      <div className="bg">
        <div className="bg-container">
          <h1>Bob ate {mangocount} mangoes {bananacount} bananas</h1>
          <div className="card-container">
            <div class="card">
              <img
                alt="mango"
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.onIncrementBtn1} className="btn">Eat Banana</button>
            </div>
            <div class="card">
              <img
                alt="banana"
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.onIncrementBtn2} className="btn">Eat Mango</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
