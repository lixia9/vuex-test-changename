import types from '../../../type'
let mutations={
    [types.HOME.CHNGE_NAME](state,value){
        state.name=value
    },
    [types.HOME.CHNGE_AGE](state,value){
        state.age= state.age+value
    }
}
export default mutations;