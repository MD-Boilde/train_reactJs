import React, { Component } from 'react';

class NotFoundPage extends Component {
  render () {
    return (
      <div className='container'>
        
        <div class="alert alert-warning">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Trang không tồn tại</strong> 
        </div>
        
      </div>
      
      
    );
  }
}

export default NotFoundPage;