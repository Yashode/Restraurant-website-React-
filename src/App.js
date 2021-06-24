import React, {Component} from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
	
	constructor(props){
		super(props);

		this.state={
			dishes : DISHES
		};
	}

	render(){
		return(
			<BrowserRouter>
			<div>
				<Menu dishes ={this.state.dishes} />
			</div>
			</BrowserRouter>
			);
	}
}
export default App;
