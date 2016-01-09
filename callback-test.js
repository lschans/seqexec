var a = function (err, callback) {
    if(err) {
        console.log(err);
        return;
    }
    setTimeout(function(){
        console.log('a');
        if(typeof(callback) == 'function') callback();
    },999);
};

var b = function (err, callback) {
    if(err) {
        console.log(err);
        return;
    }
    setTimeout(function(){
        console.log('b');
        if(typeof(callback) == 'function') callback();
    },333);
};

var c = function (err, callback) {
    if(err) {
        console.log(err);
        return;
    }
    setTimeout(function(){
        console.log('c');
        if(typeof(callback) == 'function') callback();
    },666);
};

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

var seqCallback = function(callbackArray) {
    var cArrayLen = callbackArray.length;
    for (var i = 0; i < cArrayLen; i++) {
        callbackArray[i]();
    }
};

//seqCallback([a,b,c]);

a(null, b.bind(null, c));