const initState = {
    listData:[],
    detailData:{}
}
const goshopping = (state = initState,action)=>{
    switch(action.type){
        case "LISTDATA":
        return Object.assign({}, state, {

            listData: action.payload

        });
        case "SELECT":
        return Object.assign({}, state, {

            detailData: action.payload

        });
        default:
        return state;
    }
}
export default goshopping