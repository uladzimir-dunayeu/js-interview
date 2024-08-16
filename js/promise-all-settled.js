function allSettled(promises) {
    return new Promise((resolve) => {
        let results = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            // Оборачиваем каждый промис в новый промис, чтобы обработать результат
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = {
                        status: 'fulfilled',
                        value: value,
                    };
                })
                .catch((reason) => {
                    results[index] = {
                        status: 'rejected',
                        reason: reason,
                    };
                })
                .finally(() => {
                    // Увеличиваем счетчик завершенных промисов
                    completedPromises++;

                    // Когда все промисы завершены, резолвим основной промис
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}

// Пример использования
const promise1 = Promise.resolve('Promise 1 выполнен');
const promise2 = Promise.reject('Promise 2 отклонен');
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 выполнен через 2 секунды'), 2000));

allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    });
