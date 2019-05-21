import React,{Component} from 'react';
import axios from 'axios';


class Home extends Component {
  state = { 
    user:{username: '',password:''},
    
   }

   

   componentWillMount(){
    var postData = {username: 'mohib',password:'123456'};
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          "token": "tk",
      }
    };
  
  axios.post('http://localhost:4000/login', postData, axiosConfig)
  .then((res) => {
    console.log("RESPONSE RECEIVED: ", res.data);
    let user=res.data;
    this.setState({user:user});
    if (user.username==='mohib') {
      this.props.history.push('/counter')
    }else{
      this.props.history.push('/app')
    }
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
    
  })
 
   }

  
    
  render() {
  let  LoginSuccess=()=>{
     
      if (this.state.user.username !=='' && this.state.user.username==='mohib') {
        console.log(this.state.user.username);
        console.log(this.props.history);
        this.props.history.push('/counter')
      }
    }
    return ( 
      <div className="App">
        <p>{this.state.user.username}</p>
        <p>{this.state.user.password}</p>
        <button onClick={()=>LoginSuccess()}>Submit</button>
    </div>
     );
  }
}
 
export default Home;
