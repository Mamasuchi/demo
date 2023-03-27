function Card({item, id, checkClick, flipped}){
    const itemClass= item.stat? " active "+ item.stat : ""

    return (<div className= {"card"+ itemClass} onClick={()=> checkClick(id)}> <img src = {item.img} alt=""></img></div>)
}
export default Card