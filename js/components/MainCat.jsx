import React, { Component } from 'react';
import Header from './common/Header';
import * as actions from '../actions/cats';





export default class MainCat extends Component {
  componentWillMount(){
    if(this.props.location.pathname === '/mainCat') {

      console.log("this is the main cat yo");
      document.querySelector("html").style.backgroundColor = "white";
    }
  }


  // static defaultProps = {
  //   getRedditCats: actions.getRedditCats()
  // }
  getTheCats = () => {
    console.log("hello cats");
    this.props.getCats();

  }



  render() {

     console.log("these are cat props", this.props);
     console.log(this.props.location.pathname);
     if (this.props.cats.cats != null) {
       console.log("the cat is here");
       console.log(this.props.cats.cats[0].data.title);
       let randomNum = Math.floor(Math.random() * 20);
       console.log(randomNum);
       console.log("random", this.props.cats.cats[randomNum].data.title);

      //  const allCats =

       return (
         <div id="mainCat" className="container">
           <h1>Random Cat of the Day</h1>
            <img src={this.props.cats.cats[randomNum].data.thumbnail} alt=""/>
            <h3>{this.props.cats.cats[randomNum].data.title}</h3>
              <div className="space20"></div>
                <div className="space20"></div>
<button className="btn btn-secondary" onClick={this.getTheCats}>Find Other Cat</button>
  <div className="space20"></div>

            <h2>Here are some other cats!</h2>
            <div className="space20"></div>
            <div className="space20"></div>

         {
           this.props.cats.cats.map(cat => (
             <div key={cat.data.id}>
             <div>{cat.data.title}</div>
             <img src={cat.data.thumbnail} alt=""/>
             </div>
           ))
         }
 </div>
       )

     };

    const space = {
      width: '100%',
      color: 'red',
      height: '45px'
    };
    return (
      <div className="container-fluid">
        <div style={space}></div>
          <h2>Get the Cat of the Day</h2>
        <button className="btn btn-secondary" onClick={this.getTheCats}>Find The Main Cat</button>
      </div>
    );
  }
}
