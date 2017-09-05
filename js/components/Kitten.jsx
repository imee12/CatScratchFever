import React, { Component } from 'react';
import Header from './common/Header';
import * as actions from '../actions/cats';





export default class Kitten extends Component {
  // constructor(props) {
  //     super(props);
  //
  //     // Assign state itself, and a default value for items
  //     this.state = {
  //       kittens: []
  //     };
  //   }
  componentDidMount() {
    this.props.getKittens()

  }

componentWillReceiveProps() {
//  this.props.getKittenResults()
console.log("will receive props", this.props.kittens.kittens);
/// ^^ not sure when to use this ???
}

  renderKitten = (kitten) => {
    return (
      <div className="card card-block" key={kitten.data.id}>
        <div className="row" >
       <div className="col"  >
          <div className="card-title">{kitten.data.title}</div>
          <img src={kitten.data.thumbnail} alt=""/>
       </div>
     </div>
   </div>

    )
  }



  render() {

      console.log("these are kitten props", this.props.kittens.kittens);
      console.log(this.state);


    return (
      <div className="container-fluid">
          <h2>Kittens!</h2>
            <div className="kittenList">
    {/*//////////////////////////////////////////////////////////////          */}
          {this.props.kittens.kittens && this.props.kittens.kittens.map(this.renderKitten)}

          {/*<ul>
          {this.props.kittens.kittens && this.props.kittens.kittens.map(kitten =>
            <div className="container catList" key={kitten.data.id}>
                  <div className="row" >
                 <div className="col"  >
                    <div>{kitten.data.title}</div>
                    <img src={kitten.data.thumbnail} alt=""/>
                 </div>
               </div>
             </div>
          )}
        </ul>*/}
        {/*TWO WAYS TO RENDER ^^ AND this.renderKitten*/}
        {/*//////////////////////////////////////////////////////////////          */}

          </div>

      </div>
    );
  }
}
