var Promise = require('es6-promise').Promise;

/**
 * Synchronous Promise iteration
 * @param arr. Array with promise-functions to iterate over.
 * @returns {Promise}
 *
 */

var seqPromise = function(promiseArray) {
    return new Promise(function(resolve, reject) {
        var pArrayLen = promiseArray.length,
            p = promiseArray[0]();
        for (var i = 1; i < (pArrayLen + 1); i++) {
            if (i < pArrayLen) {
                p = p.then(promiseArray[i]);
            } else {
                p = p.then(resolve).catch(reject);
            }
        }
    });
};

module.exports = {
    seqPromise: seqPromise
};
