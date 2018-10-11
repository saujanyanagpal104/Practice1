import React from 'react';

class Table extends React.Component{
    render() {
        if(this.props.selectedItem.length >= 2){
            return(
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                {Object.values(this.props.selectedItem).map((item,key) => <th key={key} index={key}>{item.name}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Price</th>
                                {Object.values(this.props.selectedItem).map((item,key) => <td key={key} index={key}>{item.price}</td>)}
                            </tr>
                            <tr>
                                <th>Desc</th>
                                {Object.values(this.props.selectedItem).map((item,key) => <td key={key} index={key}>{item.desc}</td>)}
                            </tr>
                            <tr id="condition">
                                <th>Condition</th>
                                {Object.values(this.props.selectedItem).map((item,key) => <td  style={{ 'backgroundColor': item.color, color: 'white'}} key={key} index={key}>{item.condition}</td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Table;