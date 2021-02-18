import React from 'react';

class NumberRow extends React.Component {

    addOrRemove = action => {
        const { onClickAddNumber, onClickRemoveNumber } = this.props;
        return action === 'Remove' ? onClickRemoveNumber : onClickAddNumber;
     }

    render() {
        const { number, nextAction } = this.props.number;
        //const { onClickAddNumber, onClickRemoveNumber } = this.props;

        { console.log(nextAction) }
        { console.log(this.addOrRemove(nextAction) )}

        return (                                           
            <tr>
                <td>{number}</td>
                {/*  <td><button className="btn btn-primary" onClick={onClickAddNumber}>{nextAction}</button>  </td>*/}
                <td><button className="btn btn-primary" onClick={this.addOrRemove(nextAction) }>{nextAction}</button>  </td>

             </tr>
            )
        }
   }

export default NumberRow;

