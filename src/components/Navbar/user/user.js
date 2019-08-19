import React from 'react';
import './user.css';


class User extends React.Component {
    state = {
        items: this.props.items,
        showItems: false,
        selectedItem: this.props.items && this.props.items[0]
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }

    selectItem = (item) => this.setState({
        selectedItem: item,
        showItems: false,
    })

    render() {
        return (<div className='select-box--box1'>
            <div>
            <div 
            className='select-box--container1'>
                <div className='select-box--selected-item1'> 
                {this.state.selectedItem.value} </div>

                <div className='select-box-arrow1'
                onClick={this.dropDown}>
                    
                <span className={`${this.state.showItems ? 'select-box--arrow-up1' : 'select-box--arrow-down'}`} />
                </div>
                    
                <div style={{display: this.state.showItems ? 'block' : 'none'}}
                className='select-box--items'>
                    {
                    this.state.items.map(item => 
                    <div key={item.id} onClick={() => this.selectItem(item)}
                    className={this.state.selectedItem === item ? 'selected' : ''}>

                    {item.value}
                    </div>)
                }
                </div>

            </div>
           
            
            </div>
        
        </div>)
}}

export default User;