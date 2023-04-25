const NewUserCard = (props) => {
	return (
		<div>
            <p>{`${props.userName} (${props.age} years old)` }</p>
		</div>
	);
};

export default NewUserCard;
