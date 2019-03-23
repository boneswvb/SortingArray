const array = ["1", 2, 4,591, "392",'392', 392, 391, 2, 5, 10, 2, "1", 1, 1, 20, 20];
const answer = array.sort((a, b) => a - b);

grouped = answer.reduce((r, v, i, a) => {
    if (v === a[i - 1]) {
        r[r.length - 1].push(v);
    } else {
        r.push(v === a[i + 1] ? [v] : v);
    }
    return r;
}, []);
    
console.log(grouped);