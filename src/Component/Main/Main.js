import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Expense from '../Expense/Expense';
import './Main.css';

const Main = () => {

    const [cards, setCards] = useState([])
    //expense
    const [expense, setExpense] = useState([])

    //handeler
    const addedPerson = (card) => {
        
        const newExpense = [...expense, card]
        
        setExpense(newExpense);
        console.log(newExpense);
    }

    useEffect ( () => {
        fetch('./cards.JSON')
    .then(res => res.json())
    .then(data => setCards(data))
    }, [])






    return (
        <div className="m-5">
           
            <div className="row">
               <div className="col-md-9">

                  <div className="row">
                  {
                       cards.map(card => <Cards 
                        key={card.key}
                        card={card}
                       addedPerson= {addedPerson}
                       ></Cards> )
                   }


                  </div>
                   
                    
                     


                    </div>
               
               <div className="col-md-3 g-4">
                   <Expense 
                   expense= {expense}
                   >

                   </Expense>
               </div>
               </div>
               <h2 className="copy-right">Copyright &copy; Alltights reserved </h2>
        </div>
        
    );
};

export default Main;