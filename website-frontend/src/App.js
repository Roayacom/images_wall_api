import Form from './components/Form'
import Gallery from './components/Gallery'
import Nav from './components/Nav'
// import Modal from './components/Modal'
// import { Component } from 'react';



// class App extends Component {
//   constructor(props) {
//     super(props);
  
//  this.state={
 
//     photosArray:[]
   
//   };
//  this.handleSubmit=photo=>{
//     this.setState({photosArray:[...this.state.photosArray,photo]})
  
//   } 
 
//     }

//   render(){
//     const {photosArray}=this.state;
//   return (
   
//     <div className="App  ">
//       <Nav photoData={photosArray} />
//       <Form handleSubmit={this.handleSubmit}/>
//       <Gallery photoData={photosArray} />
      
   
     
      

//     <div>
    
// </div>
    
      
//     </div>
//   );
// }
// }


// export default App;



import React from 'react'
import axios from 'axios'
class App extends React.Component{
  constructor(props){
  super(props);
  this.state={photos:[]}
  }

 // handleSubmit=photo=>{
  //  this.setState({photos:[...this.state.photos,photo]})
 
//} 
  componentDidMount(){
    this.loadPhotos();
  }
  loadPhotos(){
    axios.get('http://localhost:3000/photo')
    .then(({data})=>{
      this.setState({photos:data})
    })
  }

  

render(){
  const {photos}=this.state;

  return (
    <>
   <Nav photoData={photos} />
  
   
    <Gallery photoData={photos} />
   </>
   );
}
}

export default App;

