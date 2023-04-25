import React, { useState } from 'react';
import UserForm from './components/UserForm';
import NewUserCard from './components/NewUserCard';
import WarningModal from './components/WarningModal';
import './App.css';

const users = [];

const App = () => {
	const [userStateData, setUserStateData] = useState(users);
	const [formErrorStatus, setFormErrorStatus] = useState();

	const userData = (userName, userAge) => {
		setUserStateData((prevState) => {
			return [...prevState, { username: userName, age: userAge }];
		});
	};

	const formError = (error) => {
		setFormErrorStatus(error);
	};

	return (
		<div className="App">
			<UserForm
				userData={userData}
				formError={formError}
			/>
			{!formErrorStatus ? userStateData.map((user) => {
				return (
					<NewUserCard
						key={Math.random().toString()}
						userName={user.username}
						age={user.age}
					/>
				);
			}): <WarningModal/>}
		</div>
	);
};

export default App;
