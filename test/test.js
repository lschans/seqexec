/* Require node_module */
var assert = require('assert');
/* Sequential */
var sequential = require('../index.js');

describe('sequential promises', function() {
    it('execute the promises in sequence', function () {

        var a = function() {
            return new Promise(function(resolve, reject){
                setTimeout(function(resolve){
                    console.log('a');
                    resolve();
                }, 1000, resolve);
            });
        };

        var b = function() {
            return new Promise(function(resolve, reject){
                setTimeout(function(resolve){
                    console.log('b');
                    resolve();
                }, 333, resolve);
            });
        };

        var c = function() {
            return new Promise(function(resolve, reject){
                setTimeout(function(resolve){
                    console.log('c');
                    resolve('Done');
                }, 666, resolve);
            });
        };

        sequential.seqPromise([a,b,c]).then(function(result){
            assert(result, "Done");
        }).catch(function(err){
            console.log("Error", err);
        });

    });
});