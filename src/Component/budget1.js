import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './budjettracker/Budget'
import ExpenseTotal from './budjettracker/ExpenseTotal';
import ExpenseList from './budjettracker/ExpenseList';
import AddExpenseForm from './budjettracker/AddExpenseForm';
import RemainingBudget from './budjettracker/Remaining';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'> Department Transactions</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col mx-5'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;