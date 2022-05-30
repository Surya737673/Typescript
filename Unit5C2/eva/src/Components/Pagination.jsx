export const Pagination = ({ total, selected, onPageChange }) => {
  const arr=[]
  for(let i=1; i<=total ; i++){
    arr.push(i)
  }
  return <div className="pageContainer">
        <button data-testid="pre" >Pre</button>
        {arr.map((e)=>(
          <button >{e}</button>
        ))
        }
        <button data-testid="next" >Next</button>
         </div>
};
