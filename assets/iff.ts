const Iff = function <ReturnValue>(conditions: any[] | any) {
    conditions = conditions instanceof Array ? conditions : [conditions];
    let call: boolean;
    for (let i = 0; i < conditions.length; i++) {
        if (
            conditions[i] === false ||
            conditions[i] === null ||
            typeof conditions[i] === 'undefined'
        ) {
            call = false;
        } else {
            call = true;
        }
    };
    return {
        then(callback: () => void) {
            if (call) {
                callback()
            } else {
                return this;
            }
        },
        elif(conditions: any[]) {
            return call ? Iff(conditions) : this;
        },
        else(callback: () => void) {
            if (call) {
                call = false;
                this.then(callback);
            }
            return this;
        }
    };
};

// example
let one = 1;
Iff(one === 3)
    .then(() => {
        console.log("Titty");
    })
    .elif(one === 1)
    .then(() => {
        console.log();
    })
    .Else(() => {
        console.log('no match');
    });