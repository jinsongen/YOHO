export default function(state=[],action){
	switch(action.type){
		case "MAIN":
			return action.payload;
		default:
			return state;
	}
}
