const counter = id => {
    let count = 0;

    // return () => {
    //     console.log(`Id:${id}, Count:${count}`);
    //     count++;
    // }

    return () => ({
        getId: () => id,
        getCount: () => count,
        count: () => {
            count++;
            console.log(`Id:${id}, Count:${count}`);
        },
    });
}

export { counter };