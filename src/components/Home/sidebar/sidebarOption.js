import React from 'react';
import "./SidebarOption.css";

const SidebarOption = ({ Icon, text }) => {
  return (
    <div className='sidebarOption'>
      <Icon className='icons' />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
