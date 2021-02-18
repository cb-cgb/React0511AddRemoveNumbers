
import React from 'react';
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

        const newNum ={
            number: this.getRandomNumber(1, 1000),
            nextAction: 'Add'
         }
        const numbersCopy = [...this.state.numbers, newNum];
        this.setState({ numbers: numbersCopy });
      }

    //modify the "nextAction" of the number in the main list of numbers from "Add" to "Remove"
    updateAction = (num, newAction) => {
        
        const numberCopy = [...this.state.numbers];
        const index = numberCopy.findIndex(n => n.number === num);
        numberCopy[index] = { number: num, nextAction: newAction }; //set the action (used to toggle add/remove button)
        this.setState({ numbers: numberCopy });
     }

    onClickAddNumber = num => {

        const numberList = [...this.state.numbersAdded, num] 
        console.log(numberList);
        this.setState({ numbersAdded: numberList } );
        this.updateAction(num, 'Remove');
     }

    onClickRemoveNumber = num => {
        const numberList = [...this.state.numbersAdded].filter(n => n !== num);
        this.setState({numbersAdded: numberList });
        this.updateAction(num, 'Add');
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
                        {this.state.numbersAdded.map((n, i) =>  <li key={i}>{n}</li>)}
                        </ul>             
                     </div> 
                                     
                 </div>

            )

        }
}




export default NumberTable;

