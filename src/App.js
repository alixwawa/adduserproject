import React, { useState } from 'react';
import UserForm from './components/UserForm';
import NewUserCard from './components/NewUserCard';
import './App.css';

const users = [
	{ username: 'test user 1', age: '31' },
	{ username: 'test user 2', age: '32' },
];

const App = () => {
	const [userStateData, setUserStateData] = useState(users);

	const userData = (userName, userAge) => {
		setUserStateData((prevState) => {
			return [...prevState, { username: userName, age: userAge }];
		});
	};

	return (
		<div className="App">
			<UserForm userData={userData} />
			{userStateData.map((user) => {
				return (
          <NewUserCard
            key={Math.random().toString()}
						userName={user.username}
						age={user.age}
					/>
				);
			})}
		</div>
	);
};

export default App;
