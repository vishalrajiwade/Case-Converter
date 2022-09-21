let input = document.querySelector("#text");
let btn = document.querySelector("#convert-btn");

let camelCase = document.querySelector("#camel-case");
let pascalCase = document.querySelector("#pascal-case");
let snakeCase = document.querySelector("#snake-case");
let screamingSnakeCase = document.querySelector("#screaming-snake-case");
let kebabCase = document.querySelector("#kebab-case");
let screamingKebabCase = document.querySelector("#screaming-kebab-case");


function toCamelCase(string){
    return string.replace(/\s(.)/g, function(s1) { return s1.toUpperCase(); })
    .replace(/\s/g, '')
    .replace(/^(.)/, function($1) { return $1.toLowerCase(); });

}

function toPascalCase(string) {
    return string
      .toLowerCase()
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w*)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`
      )
      .replace(new RegExp(/\w/), s => s.toUpperCase());
}

function toSnakeCase(string){
    return string.replace(/([a-z])([A-Z]+)/g, (m, s1, s2) => s1 + ' ' + s2)
    .replace(/([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/, (m, s1, s2, s3) => s1 + s2.toLowerCase() + s3)
    .replace(/([A-Z]+)([A-Z][a-z])/g, (m, s1, s2) => s1.toLowerCase() + ' ' + s2)
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
}

function toScreamingSnakeCase(string){
    return string.replace(/([a-z])([A-Z]+)/g, (m, s1, s2) => s1 + ' ' + s2)
    .replace(/([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/, (m, s1, s2, s3) => s1 + s2.toUpperCase() + s3)
    .replace(/([A-Z]+)([A-Z][a-z])/g, (m, s1, s2) => s1.toUpperCase() + ' ' + s2)
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toUpperCase())
    .join('_');
}

function toKebabCase(string){
    return string.replace(/([a-z])([A-Z]+)/g, (m, s1, s2) => s1 + ' ' + s2)
    .replace(/([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/, (m, s1, s2, s3) => s1 + s2.toLowerCase() + s3)
    .replace(/([A-Z]+)([A-Z][a-z])/g, (m, s1, s2) => s1.toLowerCase() + ' ' + s2)
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}

function toScreamingKebabCase(string){
    return string.replace(/([a-z])([A-Z]+)/g, (m, s1, s2) => s1 + ' ' + s2)
    .replace(/([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/, (m, s1, s2, s3) => s1 + s2.toUpperCase() + s3)
    .replace(/([A-Z]+)([A-Z][a-z])/g, (m, s1, s2) => s1.toUpperCase() + ' ' + s2)
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toUpperCase())
    .join('-');
}

btn.addEventListener("click", ()=> {
    camelCase.innerText = toCamelCase(input.value);
    pascalCase.innerText = toPascalCase(input.value);
    snakeCase.innerText = toSnakeCase(input.value);
    screamingSnakeCase.innerText = toScreamingSnakeCase(input.value);
    kebabCase.innerText = toKebabCase(input.value);
    screamingKebabCase.innerText = toScreamingKebabCase(input.value);
})
                          
