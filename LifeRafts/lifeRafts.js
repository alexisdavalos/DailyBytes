// This question is asked by Amazon. A ship is about to set sail and you are responsible for its safety precautions. More specifically, you are responsible for determining how many life rafts to carry onboard. You are given a list of all the passengers’ weights and are informed that a single life raft has a maximum capacity of limit and can hold at most two people. Return the minimum number of life rafts you must take onboard to ensure the safety of all your passengers. Note: You may assume that a the maximum weight of any individual is at most limit.

const lifeRafts = (weights, limit) => {
	let total = 0;
	for (weight of weights) {
		total += weight;
	}
	return Math.ceil(total / limit);
};

// Ex: Given the following passenger weights and limit…
console.log(lifeRafts([1, 3, 5, 2], 5)); // => return 3
console.log(lifeRafts([1, 2], 3)); // => return 1
console.log(lifeRafts([4, 2, 3, 3], 5)); // => return 3
