// Interface to make the fill method available
// https://stackoverflow.com/questions/29785881/how-to-create-an-array-of-zeros-in-typescript
interface Array<T> {
	fill(value: T): Array<T>;
}

const arrayManipulation = (
	n: number,
	queries: Array<Array<number>>
	// queries: number[][]
): number => {
	// const zeros: number[] = Array(n);
	const zeros: Array<number> = Array(n);
	zeros.fill(0); // 😮

	let maximumValueFound = 0;

	// Solution 1: O(queries*n)
	// queries.forEach((element, pos) => {
	// 	console.log(element);

	// 	const a = element[0];
	// 	const b = element[1];
	// 	const k = element[2];

	// 	for (let zeroIndex = a; zeroIndex <= b; zeroIndex++) {
	// 		zeros[zeroIndex - 1] += k;

	// 		if (zeros[zeroIndex - 1] > maximumValueFound) {
	// 			maximumValueFound = zeros[zeroIndex - 1];
	// 		}
	// 	}
	// 	console.log(zeros);
	// });

	// Solution 2: O(n*queries) 🤦🏻‍♂️
	// for (let i = 0; i < n; i++) {
	// 	console.log(i);

	// 	queries.forEach((querie) => {
	// 		const a = querie[0];
	// 		const b = querie[1];
	// 		const k = querie[2];

	// 		if (i + 1 >= a && i + 1 <= b) {
	// 			zeros[i] += k;
	// 		}
	// 	});
	// 	if (zeros[i] > maximumValueFound) {
	// 		maximumValueFound = zeros[i];
	// 	}
	// }

	// Solution 3: O(queries + n)
	queries.forEach((query) => {
		// -1 because the positions are 0 based
		const a = query[0] - 1;
		const b = query[1] - 1;
		const k = query[2];

		zeros[a] += k;
		zeros[b + 1] -= k;
	});

	let slopeSum = 0;
	for (let i = 0; i < zeros.length; i++) {
		slopeSum += zeros[i];
		if (slopeSum > maximumValueFound) {
			maximumValueFound = slopeSum;
		}
	}

	return maximumValueFound;
};

// console.log([1, 2, 3, 4, 5, 6].slice(0, 5));

// console.log(
// 	arrayManipulation(10, [
// 		[1, 2, 100],
// 		[2, 5, 100],
// 		[3, 4, 100],
// 	])
// );
console.log(
	arrayManipulation(10, [
		[2, 6, 8],
		[3, 5, 7],
		[1, 8, 1],
		[5, 9, 15],
	])
);
