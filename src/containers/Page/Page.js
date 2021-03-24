import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Widgets from './Widgets/Widgets';
import NewWidget from './NewWidget/NewWidget'

class Page extends Component {
    render() {
        return (
            <Fragment>
                <Route path='/' exact component={Widgets}/>
                <Route path='/new-widget' component={NewWidget}/> 
            </Fragment>
        );
    }
}

export default Page;
