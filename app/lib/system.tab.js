var normalize = System.normalize;
System.normalize = function(name, parentName, parentAddress) {
    console.log("normalize: " + JSON.stringify({
        name: name,
        parentName: parentName,
        parentAddress: parentAddress
    }));
    return normalize.call(this, name, parentName, parentAddress);
};

var systemLocate = System.locate;
System.locate = function(load) {
    console.log("locate: " + JSON.stringify({
        load: load
    }));
    return systemLocate.call(this, load);
};

var systemfetch = System.fetch;
System.fetch = function(load) {
    console.log("fetch: " + JSON.stringify({
        load: load
    }));
    return systemfetch.call(this, load);
};

var systemtranslate = System.translate;
System.translate = function(load) {
    console.log("translate: " + JSON.stringify({
        load: load
    }));
    return systemtranslate.call(this, load);
};

var systeminstantiate = System.instantiate;
System.instantiate = function(load) {
    console.log("instantiate: " + JSON.stringify({
        load: load
    }));
    return systeminstantiate.call(this, load);
};