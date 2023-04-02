import { useState } from 'react'
import Card from './Card'

function Cards(){
    const initialItems = [ {id: 1, img: '../../public/img/batmanlaugh.jpg', stat: ""},
    {id: 1, img: '/img/batmanlaugh.jpg', stat: ""},
    {id: 2, img: '/img/joker.jpg', stat: ""},
    {id: 2, img: '/img/joker.jpg', stat: ""},
    {id: 3, img: '/img/flash.jpg', stat: ""},
    {id: 3, img: '/img/flash.jpg', stat: ""},
    {id: 4, img: '/img/superman.jpg', stat: ""},
    {id: 4, img: '/img/superman.jpg', stat: ""},
    {id: 5, img: '/img/harley.jpg', stat: ""},
    {id: 5, img: '/img/harley.jpg', stat: ""},
    {id: 6, img: '/img/redhood1.jpg', stat: ""},
    {id: 6, img: '/img/redhood1.jpg', stat: ""},]

    const [items, setItems]= useState(initialItems.sort(()=> Math.random() -0.5))
    const [prev, setPrev] = useState(-1)
    const [flipped, setFlipped] = useState(false);
    const [turns, setTurns] = useState(0);
    const [matchedCards, setMatchedCards] = useState(0);

    
    function check(current){
        if(items[current].id=== items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setMatchedCards(matchedCards + 1);
            setPrev(-1)
        }
        else{
            items[current].stat= "wrong"
            items[prev].stat= "wrong"
            setItems([...items])
            setFlipped(true);
            setTimeout(()=> {
                items[current].stat= ""
                items[prev].stat=""
                setItems([...items])
                setPrev(-1)
                
            },1000)
            
        }
        setTurns(turns + 1);
    }

    function checkClick(id){
        if(prev === -1 && !flipped && matchedCards !== totalMatches){
            setItems([...items])
            setPrev(id)
        }
        else if(!flipped && matchedCards !== totalMatches){
            setFlipped(true)
            check(id)
            setTimeout(() => setFlipped(false), 1000)
        }
    }

    function handleResetClick() {
        setFlipped(true);
        setTimeout(() => {
        setItems(initialItems.sort(() => Math.random() - 0.5));
        setFlipped(false);},1000);
        setTurns(0);
        setMatchedCards(0);
    }

    function handleResfreshClick() {
        return window.location.reload()
    }

    const totalMatches = initialItems.length / 2

    function Victory(){
       if( matchedCards=== totalMatches){
        return <div className="victory-message">Congratulations, you won in {turns} turns!</div>;
       }
    }
    
    return (
     <><div className="container">
            {items?.map((item, index) => (<Card key={index} item={item} id={index} checkClick={checkClick} flipped={flipped} />
            ))}
        </div>
        <div className="buttoncontainer"> <button onClick={ handleResfreshClick}> New Game</button> </div>
        <div className="turn-counter">Turns: {turns}</div>
        {Victory()}</>
        
    )   
}
export default Cards
