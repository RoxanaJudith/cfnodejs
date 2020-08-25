function render(html_string, parametros_string){
    var variables = html_string.match(/[^\{\}]+(?=\})/g); //almacena un array con todas las incidencias de expresion regular en index

    for (let i = 0; i < variables.length; i++) {
        html_string = html_string.replace("{"+variables[i]+"}",parametros_string[variables[i]]);
        return html_string;
        
    }
}

module.exports.render = render;