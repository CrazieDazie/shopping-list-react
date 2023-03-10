import { Component } from 'react';
import check from './iconshopping.png';

export class ShoppingList extends Component {
    state = {
        userInput: '',
        shoppingList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert ("ooops you didn't add an item")
        } else {
        let listArray = this.state.shoppingList;
        listArray.push(input);
        this.setState({shoppingList: listArray, userInput: '' })
        console.log(listArray)
        }
    }

    deleteItem() {
        let listArray = this.state.shoppingList;
        listArray = [];
        this.setState({shoppingList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    <input type='text' 
                    placeholder='Watcha wanna get?' 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className='container'>
                    <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>ADD</button>
                </div>
                <ul>
                    {this.state.shoppingList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} width='30px' alt='icon'/>
                            {item}</li>
                    ))}
                    
                </ul>
                <div className='container'>
                <button onClick={() => this.deleteItem()} className='btn delete'>DELETE LIST </button>
                </div>
                </form>
            </div>
        )
    }
}