/**
 * Created by lh on 2017/2/13.
 * 输入namespace({a: {test: 1, b: 2}}, 'a.b.c.d'),输出{a: {test: 1, b: {c: {d: {}}}}}
 */
//这样可以通过，但是输出和要求不符合
function namespace(oNamespace, sPackage) {
    var package = sPackage.split('.');
    // var child = oNamespace;
    var i, len = package.length;
    for(i=0; i < len; i++){
        if(typeof (oNamespace[package[i]]) !== "object"){
            oNamespace[package[i]] = {};
        }
        oNamespace = oNamespace[package[i]];
    }
    return oNamespace;
}

//用递归的办法才是正道
function namespace2(oNamespace, sPackage) {
    var index = sPackage.indexOf('.');
    var path = sPackage.slice(0, index);
    if(index === -1){
        return oNamespace[sPackage] = {};
    }
    if(typeof (oNamespace[path]) !== "object"){
        oNamespace[path] = {};
    }
    namespace2(oNamespace[path], sPackage.slice(index+1));
    return oNamespace;

}
console.log(namespace2({a: {test: 1, b: 2}}, 'a.b.c.d'));