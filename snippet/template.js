const tplString = `<%for ( var i = 0; i < users.length; i++ ) { %>
    <li>
        <a href="<%=users[i].url%>">
            <%=users[i].name%>
        </a>
    </li>
<% } %>`;

let linebreakExpr = /[\n\r\t]/g;
let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;


const template = `echo('<ul>` + tplString.replace(linebreakExpr, '').replace(evalExpr, `');echo($1);echo('`).replace(expr, `'); $1 echo('`) + `')` + `;\necho('</ul>')`;

console.log(template);
const users = [
    { "name": "Kevin", "url": "http://localhost" },
    { "name": "Daisy", "url": "http://localhost" },
    { "name": "Kelly", "url": "http://localhost" }
];

let script = `(function parse(users) {
    let output = "";

    function echo(html){
        output += html;
    }
  
    ${ template };
    
    return output;
})`

const parser = eval(script);

console.log(parser(users));