
import React, { Component } from 'react';
const AdultSection = (props) => {
    console.log(props)
    const { stordedRoomData, adultRoomInfo, index } = props;
    return (
        <div className='adultsSection'>
            <div>Adults</div>
            <div className="roomSection">(18+)</div>
            <div>
                <select value={stordedRoomData.length > 0 ? stordedRoomData[index].adults[0] : ''}
                    disabled={stordedRoomData.length > 0 ? stordedRoomData[index].checked : adultRoomInfo.checked}
                    onChange={(e) => {
                        e.preventDefault();
                        console.log('change');
                        props.adultChange(e, index, 'adults');
                    }}>
                    {adultRoomInfo.adults.map((adult) => <option key={adult} value={adult}>{adult}</option>)}
                </select>
            </div>
        </div>
    )
}
export default AdultSection;