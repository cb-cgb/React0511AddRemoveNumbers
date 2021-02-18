
import React from 'react';
//import NumberForm from './NumberForm';
import NumberRow from './NumberRow';


class NumberTable extends React.Component {

    state = {
        numbers: [],        
        numbersAdded: []       
    }

    onNumberChange = (e) => {
        this.setState({ currentNumber: e.target.value });
    }

    getRandomNumber = (max,min) => {
             return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onClickNewNumber = () => {

       const newNum = {
        number: this.getRandomNumber(1, 1000),
        nextAction: 'Add'
        }
        const numbersCopy = [...this.state.numbers, newNum];
        console.log('numbersCopy array:');
        console.log(numbersCopy);

        this.setState({ numbers: numbersCopy });
        console.log('numbers array:');
        console.log(this.state.numbers);
    }

    updateAction = (num, newAction) => {

       //modify the "nextAction" of the number in the main list of numbers from "Add" to "Remove"
        console.log('numbers array in updateAction:')
        console.log(this.state.numbers);

        const numberCopy = [...this.state.numbers];
        console.log(numberCopy);
        const index = numberCopy.findIndex(n => n.number === num);//find the location in the array of the number being updated
        console.log(`index: ${index} for ${num}`);
        numberCopy[index] = { number: num, nextAction: newAction }; //set the action (used to toggle add/remove button)
        this.setState({ numbers: numberCopy });
     }

    onClickAddNumber = num => {
        const numberList = [...this.state.numbersAdded, num] //add the selected number to the list
        console.log(numberList);
        this.setState({ numbersAdded: numberList } );
        this.updateAction(num, 'Remove');//update the action in the main numbers list 
     }

    onClickRemoveNumber = num =>{
        const numberList = [...this.state.numbersAdded].filter(n => n.number  !== num);
        this.setState({numbersAdded: numberList });
        this.updateAction(num, 'Add');//update the action in the main numbers list 
    }

    render() {
        return (


            <div className="container" style={{ marginTop: 60 }}>
                <button className="btn btn-success" onClick={this.onClickNewNumber}>New Number</button>

                <table className="table table-striped table-hover table-border" style={{ marginTop: 30 }}>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.numbers.map(
                            (n, i) => <NumberRow key={i} 
                                number={n}
                                onClickAddNumber={   () => this.onClickAddNumber(n.number) }
                                onClickRemoveNumber={   () => this.onClickRemoveNumber(n.number)}
                                />
                        )}
                    </tbody>
                </table>

                <h3>Selected Numbers</h3>
                <div className="row jumbitron">
                    
                    <ul>
                        {console.log('numbersAdded in <li>')}
                        {console.log(this.state.numbersAdded)}

                        {this.state.numbersAdded.map((n, i) =>  <li key={i}>{n}</li>)}
                        </ul>             
                     </div> 

                                     
                 </div>

            )

        }
}




export default NumberTable;

