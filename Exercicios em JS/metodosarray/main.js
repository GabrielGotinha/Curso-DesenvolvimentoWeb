const arrayobj = (
    {a: 2, b: 3},
    {
        a:5, b:51
    },
    {
        a:42, b:541
    }
);

const filterme = arrayobj.filter(el => el.a > 2) /*vai filtrar e me rotorna so quando a propriedade a for maior q 2 com o filtro vai passar por todos*/

const findme = arrayobj.find(el => el.a > 10)/*ele so vai encontrar o primeiro item e parar */

const foremet = arrayobj.forEach() /* ele vai fazer uma acao para cada elemento */

const mapmet = arrayobj.map(el => el.a += 1) /* vai mapear e pode incrementar em cada elemento a */

const redmet = arrayobj.reduce() /* reduzir todo o array */