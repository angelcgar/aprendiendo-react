export const Square = ({ children, isSelected, index, updateBoard }) => {
	const className = `square ${isSelected ? 'is-selected' : ''}`;

	const handleClick = () => {
		updateBoard(index);
	};

	return (
		<div onClick={handleClick} className={className}>
			{children}
		</div>
	);
};

// Square.prototype = {
// 	children: '',
// 	isSelected: true,
// };
