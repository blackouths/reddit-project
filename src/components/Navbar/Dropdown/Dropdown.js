import React from 'react';
import './Dropdown.css'


class Dropdown extends React.Component {
    state = {
        items: this.props.items,
        showItems: false
    }

    render() {
        return <div>
            <div className='select-box-arrow'>
                
                <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} />
                </div>
                
                <div style={{display: this.state.showItems ? 'block' : 'none'}}>

                </div>
           
            {
                this.state.items.map(item => <div key={item.id}>
                    {item.value}
                </div>)
            }
        }
        </div>
}}

export default Dropdown;