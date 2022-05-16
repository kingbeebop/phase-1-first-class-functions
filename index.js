function receivesAFunction(test){
    test();
    return
}


function returnsANamedFunction(){
    return function iAmNamed(){return "hi"}
}

function returnsAnAnonymousFunction(){
    return function(){return 1}
}