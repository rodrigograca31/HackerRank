const minimumSwaps = (arr: number[]): number => {
	// arr.forEach((ele) => {
	// 	console.log(ele);
	// });
	let swaps: number = 0;
	for (let i = 0; i < arr.length; ) {
		const element = arr[i];
		// if its not in the correct place
		if (element !== i + 1) {
			// console.log("diff: ", element, i + 1, i + 1 - element);
			swaps++;
			// swap to the correct place
			const temp = arr[arr[i] - 1];
			arr[arr[i] - 1] = arr[i];
			arr[i] = temp;
		} else {
			// only move to the next one if the current one is correct
			i++;
		}
	}
	// console.log(arr);

	return swaps;
};

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log();
console.log(minimumSwaps([4, 3, 1, 2]));
console.log();
console.log(minimumSwaps([2, 3, 4, 1, 5]));
console.log();
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
