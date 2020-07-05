function promiseAll(promises) {

  return promises.reduce((allPromiseResult, promise ) => {
		return promise
		.then(resultPromise => {
			return allPromiseResult
			.then(acc => {
				acc.push(resultPromise)
				return acc
			})
		})
	}, Promise.resolve([]))
}
