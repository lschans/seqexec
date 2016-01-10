# seqexec
Sequenced promises for ES5

To install:   
```
npm install seqexec
```

To use:
```
var seqexec = require('seqexec');

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
            resolve();
        }, 666, resolve);
    });
};

seqexec.seqPromise([a,b,c]).then(function(){
    console.log("Done");
}).catch(function(err){
    console.log("Error", err);
});

```

