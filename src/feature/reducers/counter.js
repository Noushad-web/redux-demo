const initialState = 0;
const counterHandler = (state = initialState, action)=>{
  if(action.type === 'INCREMENT'){
    return state++;
  }else if( action.type === 'DECREMENT'){
    return state--;
  }else{
    return state;
  }
}
export default counterHandler