import React from 'react'

const MyInput = (props) => {
    
    
    return (
    <div id={props.id}>
      <div className="group group-block" >
        <div className="label-help">
          <span className="logo fa fa-question-circle fa-2x"></span>
          <span className="text">{props.msgText}</span>
        </div>
        <div className="label-input" >
          <span className="logo fa fa-tag fa-2x" ></span>
          <input type="text" placeholder={props.msgPlaceHolder} className="input" />
        </div>                                             
      </div>
    </div>
    )
}
export default MyInput;