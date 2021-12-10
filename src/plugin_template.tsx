// useful BdApi stuff
import * as React from 'react';
import './index.scss';

function ComponentExample() {
	const [counter, setCounter] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => setCounter((prev) => prev + 1), 1000);
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div id="counterContainer">
			<h1>{counter}</h1>
			<button onClick={() => setCounter((prev) => ++prev)}>Increase</button>
			<button onClick={() => setCounter((prev) => --prev)}>Decrease</button>
		</div>
	);
}

module.exports = class plugin_template {
	load() {
		console.log('%cExample-Plugin', 'background:#5865f2;padding:4px;border-radius:8px;', 'Hello World :)');
	}
	start() {
		BdApi.showConfirmationModal(
			// @ts-expect-error
			<h1>Hello world</h1>,
			[
				'Hi!',
				' please free to take a look at the readme for instructions on where to get started',
				<ComponentExample />
			],
			{
				danger: false,
				confirmText: 'Start to develop :)',
				cancelText: 'Im scared, pls help'
			}
		);
	}
	stop() {}
};
