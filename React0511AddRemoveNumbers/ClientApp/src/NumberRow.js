import React from 'react';

class NumberRow extends React.Component {

    addOrRemove = action => {
         //const { onClickAddNumber, onClickRemoveNumber } = this.props;
         return  action === 'Remove' ? 'onClickRemoveNumber' : 'onClickAddNumber' ;
        //if (action === 'Remove') {
        //    return onClickRemoveNumber;
        //}
        //return onClickAddNumber;
    }

    render() {
        const { number, nextAction } = this.props.number;//each number contains: number, nextAction so we are destructuring the  prop (pull the number and nextAction within the number prop)
        const { onClickAddNumber, onClickRemoveNumber } = this.props;

        { console.log(nextAction) }
        //{ console.log(this.addOrRemove(nextAction) )}
        return (                                           
            <tr>
                <td>{number}</td>
                <td><button className="btn btn-primary" onClick={onClickAddNumber}>{nextAction}</button>  </td>
                {/*<td><button className="btn btn-primary" onClick={this.addOrRemove(nextAction) }>{nextAction}</button>  </td>*/}

             </tr>
            )
        }
   }

export default NumberRow;

