import React, { Component } from 'react';

import './Modal.css'

class Modal extends Component {
    render() {
      return (
          this.props.show &&
            <div className='modal'>
              {this.props.children}
            </div>
      );
    }
  }

  export default Modal;
  