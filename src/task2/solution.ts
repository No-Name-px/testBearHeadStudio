export default function all(promises: Promise<unknown>[]) {
    const allData: unknown[] = [];

    return new Promise((res, rej) => {
        promises.forEach((promise) => {
            promise
                .then((data) => {
                    allData.push(data);
                    if (allData.length === promises.length) {
                        res(allData);
                    }
                })
                .catch((err) => {
                    rej(err);
                });
        });
    });
}
