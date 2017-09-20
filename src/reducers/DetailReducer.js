const DetailReducer = (state=[], action) => {
	switch(action.type) {
		case 'ADD_CAR':
			var newstate=[...state]
			newstate.push(action.payload)
			return newstate;
		default:
			return state;
	}
}

export default DetailReducer;