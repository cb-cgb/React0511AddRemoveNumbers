
import React from 'react';


class NumberForm extends React.Component {

    render() {

        const { numberValue, onClickNewNumber , onNumberChange} = this.props;
        return (
            <div className="row jumbotron">
                <div className="col-md-3"> 
                    <input 
                        value={numberValue}
                        onNumberChange={onNumberChange}
                        type-"text"
                        placeholder="
                    </input>     

                </div>

                <div className="col-md-3">
                   <button className="btn btn-primary"></button>
                </div>


            </div>

            )
    }
    
    
}

export default NumberForm;

