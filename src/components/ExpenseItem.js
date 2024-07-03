import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ name, id, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = (ids) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: ids });
  };

  const increaseAllocation = (name) => {
    const expense = { name: name, cost: 10 };
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>£{cost}</td>
      <td>
        <button onClick={() => increaseAllocation(name)}>+</button>
      </td>
      <td>
        <button onClick={() => handleDeleteExpense(id)}>
          <TiDelete size="1.5em" />
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
