/**
 *
 * Author: Saad Irfan
 * GitHub: https://github.com/msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

/**
 * Promisify a callback function
 *
 *
 * @param {Function} callback function
 * @returns {Promise} Promise
 */
const promiseIt = callback => {
	return new Promise((resolve, reject) => {
		callback(resolve, reject);
	});
};

/**
 * Convert the given callback functions to promises
 *
 *
 * @param {Function} callback function
 */
const convertToPromise = promises => {
	const promiseArray = [];

	promises.forEach(promise => {
		promiseArray.push(promiseIt(promise));
	});

	return promiseArray;
};

/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 *
 *
 * @param {Array} promises callback functions to promisify
 * @returns {Promise} Array of resolved or rejected promises
 */
const promiseItAll = (...promises) => {
	const generatePromisesList = convertToPromise(promises);

	return Promise.all(generatePromisesList);
};

/**
 * Promisify any of the given callback functions
 *
 *
 * @param {Array} promises callback functions to promisify
 * @returns {Promise} Array of resolved or rejected promises
 */
const promiseItAny = (...promises) => {
	const generatePromisesList = convertToPromise(promises);

	return Promise.any(generatePromisesList);
};

/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.
 *
 *
 * @param {Array} promises callback functions to promisify
 * @returns {Promise} Array of resolved or rejected promises
 */
const promiseItAllSettled = (...promises) => {
	const generatePromisesList = convertToPromise(promises);

	return Promise.allSettled(generatePromisesList);
};

module.exports = { promiseIt, promiseItAll, promiseItAny, promiseItAllSettled };
