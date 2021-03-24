import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { WidgetContext } from '../../../WidgetContext';

import './NewWidget.css';

class NewWidget extends Component {

    state = {
        name: '',
        language: 'English'
    }

    static contextType = WidgetContext;

    addWidgetHandler = () => {
        this.context.update(prevWidgets => [...prevWidgets, {name: this.state.name, language: this.state.language}])
    }

    render() {
        let languages = [`${this.state.language}`, 'Chinese', 'French', 'German', 'Russian', 'Spanish']
        let options = languages.map((language, i) => <option value={language} key={i}>{language}</option>)

        return (
            <div className='new-widget'>
                <h2>Add a Widget</h2>
                <div className='info'>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Language</label>
                <select value={this.state.language} onChange={(event) => this.setState({language: event.target.value})}>
                    {options}
                </select>
                </div>
                <NavLink 
                    to='/'
                    onClick={this.addWidgetHandler}
                    className='add-widget'
                    style={!this.state.name.length ?
                            {cursor: 'pointer',
                            color: '#f2b4b4',
                            pointerEvents: 'none'}
                            : {color: '#ff005c'}}/>
            </div>
        )
    };
}

export default NewWidget;
