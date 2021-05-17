import React from 'react'

const NewExpenseButton = (props) => {
    const toggleForm = (event) => {
        props.onToggle(event)
    }
    return (
        <div>
            <button onClick={toggleForm}>
                Add New Expense
            </button>
        </div>
    )
}

export default NewExpenseButton
