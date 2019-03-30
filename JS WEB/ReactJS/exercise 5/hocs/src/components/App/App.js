import React, { Component } from 'react';

import './App.css';
import Article from '../Article/Article';
import RegisterForm from '../RegisterForm/RegisterForm';
import Navigation from '../Navigation/Navigation';
import warningWrapper from '../../hocs/warningWrapper';
import errorHandlingWrapper from '../../hocs/errorHandlingWrapper';
import BindingForm from '../BindingForm/BindingForm';
const ArticleWithWarning = errorHandlingWrapper(warningWrapper(Article));
const NavigationWithWarning = warningWrapper(Article);
const RegisterFormWithWarning = warningWrapper(Article);

class App extends Component {
  onSubmit(e,data){
    e.preventDefault();
    console.log(data);
  }
  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
          <input type='text' name='username' placeholder='username'/>
          <input type='password' name='password' placeholder='password'/>
        </BindingForm>
        <ArticleWithWarning/>
        <RegisterFormWithWarning/>
        <NavigationWithWarning/>
        
      </section>
    );
  }
}

export default App;
