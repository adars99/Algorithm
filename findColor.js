/* var colors = ['testred', 'bluesdtar', 'thomas','davidbravore']; */

function findColor(col){
    var colors = ['testred', 'bluesdtar', 'thomas','davidbravore'];
    let result = [];

    if(colors.length === 0 ) { return result; }

    outer: 
    for(let color of colors) {

    let set = new Set(color.split(''));
    console.log(set);

    for(let i=0;i<col.length;i++){
     if(!set.has(col[i])) {
      continue outer;
     }
    }
    console.log(color)

    result.push(color);
    }
    return result;
}


console.log(findColor('red'));
