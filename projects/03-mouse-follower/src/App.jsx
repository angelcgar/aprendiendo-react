import { useEffect, useState } from 'react';

function App() {
	const [enable, setEnable] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	console.log(position);

	useEffect(() => {
		console.log('Efect', { enable });

		const handleMove = (event) => {
			const { clientx, clienty } = event;
			console.log('cursor', clientx, clienty);
			setPosition({ x: clientx, y: clienty });
		};

		if (enable) {
			window.addEventListener('pointermove', handleMove);
		}

		return () => {
			console.log('cleanup');
			window.removeEventListener('pointermove', handleMove);
		};
	}, [enable]);

	useEffect(() => {
		document.body.classList.toggle('no-cursor', enable);

		return () => {
			document.body.classList.remove('no-cursor');
		};
	}, [enable]);

	return (
		<main>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#09f',
					borderRadius: '50%',
					opacity: 0.8,
					pointerEvents: 'none',
					left: -25,
					top: -25,
					width: 50,
					height: 50,
					transition: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
			<button onClick={() => setEnable(!enable)}>
				{enable ? 'desactivar' : 'activar'} seguir puntero
			</button>
		</main>
	);
}

export default App;
