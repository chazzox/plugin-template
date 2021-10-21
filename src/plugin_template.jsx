// useful BdApi stuff
const { React, ReactDOM } = BdApi;
import './index.scss';

function ComponentExample() {
	const [counter, setCounter] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => setCounter(counter + 1), 1000);
		return () => {
			console.log('clearing');
			clearInterval(timer);
		};
	});

	return <div id="counterContainer">{counter}</div>;
}

module.exports = class plugin_template {
	load() {
		console.log('Hello World :)');
	}
	start() {
		BdApi.showConfirmationModal(
			<h1>Title</h1>,
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
