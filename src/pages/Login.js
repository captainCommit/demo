import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
const md5 = require('md5')
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false,username: '',password:'',message:'',type:''};
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleUserNameChange(event) {
        event.preventDefault();
        this.setState({username : event.target.value});
      }
      handlePasswordChange(event) {
        event.preventDefault();
        this.setState({password : md5(event.target.value)});
      }
      parseResponse(response){

      }
      async handleSubmit(event) 
      {
        event.preventDefault()
        
        this.setState({type:'',message:''})
        if(this.state.username === "")
        {
            this.setState({show:true,message : "Username cannot be empty",type:'danger'})
            return
        }
        if(this.state.password === "")
        {
            this.setState({show:true,message : "Password cannot be empty" ,type:'danger'})
            return
        }
        //const request = <put your get request in string>
        console.log(this.state.message)
        console.log(this.state.password)
        console.log(this.state.username)
        /*
        var response = await fetch(request)
        var res = this.parseResponse(response) currently this variable is always set to true
        */
        res = true
        if(res === true)
        {
            alert('Logged in successfully')
            window.location.href = "./list"
        }
        else
        {
            this.setState({show:true,message:"Unsuccessful login",type:'error'})
        }
      }
  render() {
    return (
    <div className="App">
        <Row className="d-flex justify-content-center my-5 p-3">
            <Form className="bg-light p-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter email" onChange = {this.handleUserNameChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange = {this.handlePasswordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick = {this.handleSubmit}>
                    Login!
                </Button>
                <Alert className="my-2"variant={this.state.type}>{this.state.message}</Alert>
            </Form>
        </Row>
    </div>
    );
  }
}
export default Home;