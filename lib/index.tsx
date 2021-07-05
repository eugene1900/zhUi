import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';

ReactDOM.render(<div>
  <Icon name="qq"
    onMouseEnter={()=>{console.log('enter')}}
    onMouseLeave={()=>{console.log('Leave')}}
  />
  <Icon name="wechat"/>
</div>, document.querySelector('#root'));
