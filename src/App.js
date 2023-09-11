import { Component } from 'react';
import AvatarComponent from './components/AvatarComponent'
import FormComponent from './components/FormComponent'
import './App.css';

export class App extends Component{
render(){


  return (
    <div className="app">
      <div className='body'>
    <AvatarComponent />
    <FormComponent />
      </div>
    </div>
  );
}
}

