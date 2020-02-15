import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PRODUCTS } from './mock'
import FormInput from './components/FormInput/FormInput'
import List from './components/List/List'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      productsList : PRODUCTS,
      filteredList: PRODUCTS,
      checkStocked: true,
      inputValue: ''
    }
  }

  ChangeInput = value => {
    this.setState({inputValue: value})
    this.FilterList(value)
  }

  FilterList = value => {
    const { productsList } = this.state
    const filteredItens = productsList.filter((item) => {
        if(item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 && item.stocked == this.state.checkStocked){
          return item
        }
    })
    this.setState({filteredList: filteredItens})
  }

  ChangeCheckBox = () => {
    this.setState({checkStocked: !this.state.checkStocked})
    this.FilterList(this.state.inputValue)
  }

  render(){
    return (
      <div className="App">
        <FormInput
        changeInputValue={this.ChangeInput}
        checkStocked={this.state.checkStocked} 
        inputValue={this.state.inputValue}
        changeCheckBox={this.ChangeCheckBox}
      />
        <List 
        productsList={this.state.productsList}
        filteredList={this.state.filteredList}
        />
      </div>
    );
  }
}

export default App;
