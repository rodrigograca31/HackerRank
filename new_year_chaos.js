const minimumBribes = (q) => {
	let count = 0;
	for (let i = 0; i < q.length; i++) {
		const element = q[i];
		let diff = element - i - 1;
		// console.log(element, diff);
		if (diff > 2) {
			console.log("Too chaotic");
			return;
		}
		if (diff <= 0) {
			for (let j = Math.max(0, q[i] - 2); j < i; j++) {
				if (q[j] > q[i]) {
					count++;
				}
			}
		}
	}
	console.log(count);
};
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
// minimumBribes([2, 1, 5, 3, 4]);
// minimumBribes([2, 5, 1, 3, 4]);
// console.log();
// minimumBribes([1, 2, 3, 4, 5, 8, 7, 6]);
// console.log();
// minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]);
// minimumBribes([1, 2, 5, 3, 7, 8, 4, 6]);
// 1,2,3,4,5,6,7,8
// minimumBribes([1, 2, 5, 4, 3, 6, 7, 8]);
// minimumBribes([1, 5, 2, 4, 3, 6, 7, 8]);
