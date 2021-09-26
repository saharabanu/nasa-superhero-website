import React from 'react';
import './Expense.css';

const Expense = (props) => {
    const {expense} = props || {}

    // total cost using reduce method
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary
    const totalSalary = expense.reduce( totalReducer , 0)




    return (
        <div className="total-salary g-4">
         
            <h2><i className="fas fa-user text-info"></i> Persons:   
             {expense.length}
            </h2>
            <h3>Total Salary: ${totalSalary}</h3>
            <ul>
                {
                    expense.map( person => <li>{person.name}</li>)
                }
            </ul>
            <button className="btn btn-success m-2">Submit Expense</button>
        </div>
    );
};

export default Expense;