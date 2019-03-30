import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import Header from './Header/Header';
import Details from './Details/Details';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:null,
      isAdmin: false
    }
  }
  componentWillMount(){
    const isAdmin=localStorage.getItem('isAdmin') ==='true';
    if(localStorage.getItem('username')){
      this.setState({
        username: localStorage.getItem('username'),
        isAdmin:isAdmin,
        movies:[],
        selectedMovieId:0
      })
    }
    fetch('http://localhost:9999/feed/movies')
    .then(rawData => rawData.json())
    .then(body => {
      this.setState({
        movies:body.movies
      });
      toast.success(body.message, {
        closeButton:false
      });
    });
  }
  handleChange(e){
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e, data, isSignUp){
    e.preventDefault(); 
    
    fetch('http://localhost:9999/auth/sign' + (isSignUp ? 'up': 'in'), {
      method: 'post',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }).then(rawData => rawData.json())
    .then(responseBody => {
      if(responseBody.username){
        this.setState({
          username:responseBody.username,
          isAdmin:responseBody.isAdmin
        });
        localStorage.setItem('username', responseBody.username);
        localStorage.setItem('isAdmin', responseBody.isAdmin);
        
        toast.success(`Welcome, ${responseBody.username}`, {
          closeButton:false
        });
      }
      else{
        toast.error(responseBody.message, {
          closeButton:false
        });
      }
    })
  }
  handleCreateSubmit(e, data){
    e.preventDefault(); 
    
    fetch('http://localhost:9999/feed/movie/create', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
  }).then(rawData => rawData.json())
    .then(responseBody => {
      if(!responseBody.errors) {
        toast.success(responseBody.message, {
          closeButton:false
        });
      }
    
      else{
        toast.error(responseBody.message, {
          closeButton:false
        });
      }
     
    })
  }

  render() {
    return (
      <div className="App">
      <ToastContainer/>
        <BrowserRouter>
          <div>
            <Header isAdmin={this.state.isAdmin} username={this.state.username}/>
          <Switch>
          <Route            
             render={
               (props) => 
               <Details
               {...props}
               movie={this.state.movies[this.state.selectedMovieId]}                              
               />}
                path="/movies/:id"
                
            />
          <Route
            exact
             render={
               (props) => 
               <Home
               {...props}
                movies ={this.state.movies}               
               />}
                path="/"/>
            
            <Route 
            render={
               (props) => 
               this.state.isAdmin ?
               <Create
               {...props}
                handleCreateSubmit ={this.handleCreateSubmit.bind(this)}
                handleChange={this.handleChange}
               /> :
               <Redirect
                to={{
                  pathname:'/login'
                }}
                />
              }
                path="/create"
            />
            <Route
             render={
               (props) => 
               <Register
               {...props}
                handleSubmit ={this.handleSubmit.bind(this)}
                handleChange={this.handleChange}
               />}
                path="/register"
            />
            <Route 
            render={
               () => 
               <Login
               
                handleSubmit ={this.handleSubmit.bind(this)}
                handleChange={this.handleChange}
               />}
                path="/login"/>
          </Switch>
          </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
