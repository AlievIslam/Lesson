var FIZZBUZZ = []
for(var i = 0; i <= 100; i++) {
    FIZZBUZZ.push(i+1);
    }
    console.log(FIZZBUZZ);

    for(var i= 0; i<100; i++){
        if(FIZZBUZZ [i]%3==0 && FIZZBUZZ[i]%5==0){
            FIZZBUZZ[i] = "fizzbuzz";
        }
        if(FIZZBUZZ[i]%3==0){
            FIZZBUZZ[i] = "fizz";
        }
        if(FIZZBUZZ[i]%5==0){
            FIZZBUZZ[i] = "buzz";
        }
    
    }
    
    for(var i= 0; i<100; i++){
        console.log(FIZZBUZZ[i]);
    }

