import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditable, setIsEditable] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const cancelHandler = () => {
        setIsEditable(false);
    }

    const addNewExpenseHandler = () => {
        setIsEditable(true);
    }

    return (
        <div className='new-expense'>
            {!isEditable && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {isEditable && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
        </div>
    );
}

export default NewExpense;