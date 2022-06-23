/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    let day = 0;
    let taken = [];
    const oc = courses.sort((a, b) => a[1] - b[1]);
    for (const c of oc) {
        if (day + c[0] <= c[1]) {
            pushTaken(taken, c);
            day += c[0]
        } else if (taken.length > 0) {
            const lt = taken[taken.length - 1];
            if (lt[0] > c[0]) {
                day = day - lt[0] + c[0];
                taken.pop();
                pushTaken(taken, c);
            }
        }
    }
    return taken.length;
};

var pushTaken = function (taken, current) {
    
    let isPushed = false;
    for(let i = 0; i < taken.length; i++) {
        if (current[0] < taken[i][0]) {
            taken.splice(i, 0, current);
            isPushed = true;
            break;
        }
    }
    if (!isPushed) {
        taken.push(current);   
    }
}