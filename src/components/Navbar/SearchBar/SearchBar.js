import React from 'react';
import './SearchBar.css'
import Search from '../icons/search.png'

class SearchBar extends React.Component {
    state = {
        term:''
    };
    onInputChange(term){
        const name = this.props.searchBoxName || undefined
        this.setState({term});
        if(this.props.onSearchTermChange){
            this.props.onSearchTermChange({name,term})
        }
    }
    render(){
        const name = this.props.searchBoxName || undefined
        return (
            <div className="search-box">
            <div className="search-icon">
                <img src= {Search} alt="icon"></img>
            </div>
            <input name={name} className="search-input" id="search" type="text" placeholder="Search Reddit" value={this.state.term}
            onChange={event=>this.onInputChange(event.target.value)} onKeyPress={this.props.onKeyPress||null}/>
            </div>
        );
    }
    }

    export default SearchBar;