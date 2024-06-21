const { readFile, writeFile } = require("fs");

// print "start" first
console.log("start");

// because readFile is ASYNC then print log in this process will be the last
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    // console.log(result);

    const first = result;

    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }

                // console.log("result");
                console.log("done with this task");
            }
        );
    });
});

// print this second while executing above commands
console.log("starting next task");
