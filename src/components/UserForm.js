import React, { useState } from 'react';


const UserForm = (props) => {
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');


	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (userName === '' || age === '') {
            props.formError(true)
			return;
		}
        props.formError(false);
		props.userData(userName, age);

		setUserName('');
		setAge('');
	};

	const nameInputChangeHandler = (event) => {
		setUserName(event.target.value.toString().trim());
	};
	const ageInputChangeHandler = (event) => {
		setAge(event.target.value.toString().trim());
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<label>Username</label>
			<input
				type="text"
				onChange={nameInputChangeHandler}
				value={userName}
			/>
			<label>Age (Years)</label>
			<input
				type="text"
				onChange={ageInputChangeHandler}
				value={age}
			/>
			<button type="submit">Add User</button>
		</form>
	);
};

export default UserForm;
