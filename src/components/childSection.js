
import React, { Component } from 'react';
const ChildSection = (props) => {
   const { stordedRoomData, childRoomInfo, index } = props;
   return (
      <div className='childSelection'>
         <div>Children</div>
         <div className="roomSection">(0-17)</div>
         <div>
            <select value={stordedRoomData.length > 0 ? stordedRoomData[index].childrens[0] : ''}
               disabled={childRoomInfo.checked}
               onChange={(e) => {
                  e.preventDefault();
                  props.childrenChange(e, index, 'children');
               }}>
               {childRoomInfo.childrens.map((chid, ind) => <option key={ind} value={chid}>{chid}</option>)}
            </select>
         </div>
      </div>

   )
}
export default ChildSection;