let steps = 1;

const a = (m, n) => {
    if (m === 0) {
        postMessage(steps + " Ackermann 1: a(0," + n + ")");
        steps++;
        return n + 1
    }
    if (n === 0) {
        postMessage(steps + " Ackermann 2: a(" + m + "," + n + ")");
        steps++;
        return a((m - 1), 1);
    }
    if (m !== 0 && n !== 0) {
        postMessage(steps + " Ackermann 3: a(" + m + "," + n + ")");
        steps++;
        return a((m - 1), a(m, (n - 1)))
    }
}

self.addEventListener('message', e => {

    console.log("worker");
    console.log(e);

    let res = 0;
    res = a(e.data.x, e.data.y);

    self.postMessage("Ackermann Resultat: " + res);

});