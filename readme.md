![cover](assets/cover.png)

<div align="center">
	<img src="https://img.shields.io/npm/v/@msaaddev/promise-it?color=%230F2345" alt="version">
	<img src="https://img.shields.io/npm/l/@msaaddev/promise-it?color=%230F2345" alt="license">
	<img src="https://img.shields.io/npm/dt/@msaaddev/promise-it?color=%230F2345" alt="downloads">
	<a href="https://stars.github.com/nominate/">
		<img src="https://img.shields.io/badge/GitHub%20Star-Nominate%20%40msaaddev-%230F2345" alt="nominate @msaaddev for GitHub Star" />
	</a>
</div>
<br>

<p align="center">
<strong>A simple Node.js package that helps you not to look up JavaScript promise syntax every time you use it.</strong>
</p>

![separator](assets/separator.jpeg)

-   **Simple**: Provides abstraction of the promise syntax from you
-   **Easy to use**: No need to learn JavaScript promise syntax
-   **Promise**: Turns any function into a promis
-   **All promises**: Provides a way to chain all promises and returns the result collectively
-   **Any promise**: Takes array of promise and returns a promise that resolves when any of the promise is resolved
-   **All settled promises**: Takes array of promise and returns a promise that resolves when all promises are settled

<br>

<img src="./assets/suitcase.png" width="10%" />

## Install

```sh
# install the package
npm install @msaaddev/promise-it
```

<br>

<img src="./assets/api.png" width="10%" />

## API

#### promiseIt()

Promisify a callback function

#### promiseItAll()

Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

#### promiseItAny()

Promisify any of the given callback functions

#### promiseItAllSettled()

Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

<br>

<img src="./assets/rocket.png" width="10%" />

## Usage

-   promiseIt()

```js
const { promiseIt } = require('@msaaddev/promise-it');

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

	try {
		const promise = await promiseIt(callback);
		console.log(promise);
	} catch (err) {
		console.log(err);
	}
})();
```

-   promiseItAll()

```js
const { promiseItAll } = require('@msaaddev/promise-it');
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
		const allPromises = await promiseItAll(callback, callback2);
		console.log(allPromises);
	} catch (err) {
		console.log(err);
	}
})();
```

-   promiseItAny()

```js
const { promiseItAny } = require('@msaaddev/promise-it');
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
		const anyPromise = await promiseItAny(callback, callback2);
		console.log(anyPromise);
	} catch (err) {
		console.log(err);
	}
})();
```

-   promiseItAllSettled()

```js
const { promiseItAllSettled } = require('@msaaddev/promise-it');
const { exec } = require('child_process');

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
		const allSettledPromise = await promiseItAllSettled(
			callback,
			callback2
		);
		console.log(allSettledPromise);
	} catch (err) {
		console.log(err);
	}
})();
```

## 👨🏻‍💻 Contributing

Make sure you read the [contributing guidelines](https://github.com/msaaddev/new-tailwind-app/blob/master/contributing.md) before opening a PR.

## ⚡️ Other Projects

I have curated a [detailed list](https://github.com/msaaddev/open-source) of all the open-source projects I have authored. Do take out a moment and take a look.

## 🔑 License & Conduct

-   MIT © [Saad Irfan](https://github.com/msaaddev)
-   [Code of Conduct](https://github.com/msaaddev/new-tailwind-app/blob/master/code-of-conduct.md)
