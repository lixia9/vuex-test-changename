import types from '../../../type'
let action={
    [types.HOME.CHNGE_NAME](context){
           context.commit(types.HOME.CHNGE_NAME,"正在加载...")
        setTimeout(() => {
            context.commit(types.HOME.CHNGE_NAME,"我是乖宝宝")
        }, 2000);
       
    }
}
export default action;