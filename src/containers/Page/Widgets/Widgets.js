import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Widget from '../../../components/Widget/Widget';
import Aux from '../../../hoc/Auxiliary';
import Modal from '../../../components/UI/Modal/Modal';
import { WidgetContext } from '../../../WidgetContext';

import './Widgets.css';

class Widgets extends Component {
    state = { deleting: false }

    static contextType = WidgetContext;

    deleteHandler = (index) => {
        this.setState({deleteWidget: index, deleting: true})
    }  

    deleteWidgetHandler = () => {
        const widgets = [...this.context.widgets]
        widgets.splice(this.state.deleteWidget, 1)
        this.context.update(widgets)
        this.setState({deleteWidget: null, deleting: false})
    }

    render() {
        let deleteDialog = null;

        if (this.state.deleting) {
            deleteDialog = (
                <div className='delete-dialog'>
                    <p>Delete entry for {this.context.widgets[this.state.deleteWidget].name}?</p>
                    <button 
                        className='cancel-btn'
                        onClick={() => this.setState({deleting: false, deleteWidget: null})}></button>
                    <button 
                        className='confirm-btn'
                        onClick={this.deleteWidgetHandler}></button>
                </div>
            )
        }

        let widgets = this.context.widgets.map((widget, index) => 
            <Widget 
                key={index}
                name={widget.name} 
                language={widget.language}
                disabled={this.state.deleting}
                clicked={() => this.deleteHandler(index)} />)
        
        return (
            <Aux>
                <Modal show={this.state.deleting}>
                    {deleteDialog}
                </Modal>
                    <div className='widgets'>
                        {widgets}
                    </div>
                    {!this.state.deleting && <Link 
                        className='add-entry'
                        to='/new-widget'
                        onClick={this.clicked}>ADD ENTRY</Link>}
            </Aux>
        )
    }
}

export default Widgets;
