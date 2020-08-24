function parse(req){
    var arreglo_parametros = [], parametros = {};

    if(req.url.indexOf("?") > 0){
        // /?nombre=elnombre
        var url_data = req.url.split("?");  // /?nombre=rox => ['/','nombre=rox'];
        var arreglo_parametros = url_data[1].split("&");  //[nombre=algo,data=algomas]
        
    }

    for (let i = arreglo_parametros.length - 1; i >= 0; i--) {
        var parametro = arreglo_parametros[i];  //nombre = elnombre
        var param_data = parametro.split("=");  //[nombre,elnombre]
        parametros[param_data[0]] = param_data[1];  //{nombre : elnombre}
    }

    return parametros;
}

module.exports.parse = parse;