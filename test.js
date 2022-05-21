const { promiseIt, promiseItAll, promiseItAny } = require('./index');
const { exec } = require('child_process');

(async () => {
	const callback = (resolve, reject) => {
		exec(`networkQuality`, error => {
			if (error) {
				handleError(error);
				reject(error);
			}
			resolve('All good. Ran networkQuality.');
		});
	};

	const callback2 = (resolve, reject) => {
		exec(`networkQuality -v`, error => {
			if (error) {
				reject(error);
			}
			resolve('All good. Ran networkQuality -v.');
		});
	};

	try {
		const promise = await promiseIt(callback);
		const allPromises = await promiseItAll(callback, callback2);
		const anyPromise = await promiseItAny(callback, callback2);
		console.log(promise);
		console.log(allPromises);
		console.log(anyPromise);
	} catch (err) {
		console.log(err);
	}
})();
