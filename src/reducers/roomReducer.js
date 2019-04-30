
const initialState = {
	 hiltonRoomData: [
	 {
	 	 roomName: 'Room 1',       
            adults: [1, 2],
            childrens: [0, 1, 2],
              checked: false
	 },
	  {
	 	 roomName: 'Room 2',       
            adults: [1, 2],
            childrens: [0, 1, 2],
            checked: true
	 },
	  {
	 	 roomName: 'Room 3',       
            adults: [1, 2],
            childrens: [0, 1, 2],
            checked: true
	 },
	  {
	 	 roomName: 'Room 4',       
            adults: [1, 2],
            childrens: [0, 1, 2],
            checked: true
	 }
	 ],
	 savedData: [],

}

const roomReducer  =  (state = initialState, action) => {
	console.log(action,'123')
  switch (action.type) {
    case 'CHECK_ROOM': 
      localStorage.removeItem('stordedRoomData');      
    return {
    	...state,
			hiltonRoomData: [...state.hiltonRoomData].map((room, ind)=>{
    	 	     if(action.target.checked){
                    if (ind <= action.ind) {
                    	  room.checked = !action.target.checked;
                    	}
    	 	     }else{
                    		if(ind>=action.ind){
                    			 room.checked = true
                    		}
                    	}
    	 	     return room;
    	 }),
    	 savedData: [...state.hiltonRoomData]
    }
    case 'CHANGE_ADULT_CHILDREN_VALUE': 
    
    let data = state.hiltonRoomData;
       if(action.str === 'adults'){
       	 data[action.ind].adults = [action.target.value]
       }
        if(action.str === 'children'){
        	  data[action.ind].childrens = [action.target.value]     	  
        }
        return {
        	...state,
        	savedData: [...data]
        }

    case 'SUBMIT_INFO': 
      localStorage.setItem('stordedRoomData', JSON.stringify(state.savedData))
    default:
      return state
  }
}

export default roomReducer