
import React, { Component } from 'react';
import { connect } from "react-redux";

import classNames from 'classnames'
import { handleCheck, handleChange, handleSubmit } from '../actions'
import AdultSection from './adultsSection';
import ChildSection from './childSection';
export class Rooms extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const stordedRoomData = JSON.parse(localStorage.getItem("stordedRoomData") || "[]");
    const { hiltonRoomData } = this.props;
    return (
      <div className="roomDetails">
        {
          hiltonRoomData.map((room, key) => {
            let isAddClass = stordedRoomData.length > 0 ? stordedRoomData[key].checked : room.checked;
            return (
              <div key={key} className={classNames("room", { "roomInfo": isAddClass })}>
                <div className="roomHeading">
                  {key !== 0 && <div>
                    <input type='checkbox'
                      checked={stordedRoomData.length > 0 ? !stordedRoomData[key].checked : !room.checked}
                      onChange={(e) => {
                        this.props.handleCheck(key, e, room)
                      }}
                    />
                  </div>
                  }
                  <div>{room.roomName}</div>
                </div>
                <div className={'room-container'} style={{ display: "flex" }}>
                  <AdultSection
                    adultRoomInfo={room}
                    stordedRoomData={stordedRoomData} index={key}
                    adultChange={(e, ind, str) => this.props.handleAdultChange(e, ind, str)}
                  />
                  <ChildSection
                    childRoomInfo={room}
                    stordedRoomData={stordedRoomData} index={key}
                    childrenChange={(e, ind, str) => this.props.handleChildrenChange(e, ind, str)}
                  />

                </div>
              </div>
            )
          })
        }

        <div className="submitBtn"><button onClick={this.props.handleSubmit}>submit</button></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { hiltonRoomData, isSubmit, savedData } = state.roomReducer
  return {
    hiltonRoomData,
    isSubmit,
    savedData
  }
}
const mapDispatchToProps = dispatch => ({

  handleCheck: (id, event) => dispatch(handleCheck(id, event)),
  handleAdultChange: (e, ind, str) => dispatch(handleChange(e, ind, str)),
  handleChildrenChange: (e, ind, str) => dispatch(handleChange(e, ind, str)),
  handleSubmit: () => dispatch(handleSubmit())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms)