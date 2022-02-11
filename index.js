for (i = 1; i <= 1000; i++) {
    let mult3 = (i % 3 === 0);
    let mult5 = (i % 5 === 0);

    if (mult3 && mult5) {
        console.log("fizzbuzz");
    } else if (mult3) {
        console.log("fizz");
    } else if (mult5) {
        console.log("buzz");
    } else {
        console.log(i);
    }

}


