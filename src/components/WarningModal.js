import React, { useState } from 'react';

const WarningModal = () => {
	const [showModalStatus, setShowModalStatus] = useState(true);

	const someHandlerFunction = () => {
		setShowModalStatus((prevState) => !prevState);
	};

	return (
		<>
			{showModalStatus ? (
				<div>
					<h1>Invalid Input</h1>
					<p>Please enter a valid name and age (non-empty values).</p>
					<button
						type="button"
						onClick={someHandlerFunction}
					>
						{' Okay'}
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default WarningModal;
