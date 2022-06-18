
import * as C  from './style';

interface showModalProps{
    showModalSearch:boolean;
    setShowModalSearch(modal:boolean):void
}

const Search=({showModalSearch,setShowModalSearch}:showModalProps)=>{

    const changeModalState=():void=>{
        setShowModalSearch(showModalSearch?false:true);
    }
    return(
    <C.FormContainer showModal={showModalSearch}>
         <form action="">
            <input type="search" placeholder='search here...' name="" id="search-box" />
            <label htmlFor="search-box" id="search-icon" className='fas fa-search'></label>
            <div onClick={changeModalState}>
                <i className="fas fa-times" id="close"></i>
            </div> 
         </form>
    </C.FormContainer>);
}
export default Search;