const Handle = (state, action)=>{

    switch (action.type) {
        case 'DO_TODO':
            return state.map(a=>{
                if(a.id === action.id){
                    return {...a, complete: true};
                }else{
                    return a;
                }
        });

        case 'UNDO_TODO':
            return state.map(a=>{
                if(a.id === action.id){
                    return {...a, complete: false};
                }else{
                    return a;
                }
        });
            
    
        default:
            return state;
    }
}
 export default Handle;

  