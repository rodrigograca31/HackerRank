const flatlandSpaceStations = (n, c) => {
    let list = {};
    // make a list/object so that a lookup is faster (to avoid O(n^2) with 2 for loops)
    for (let i = 0; i < c.length; i++) {
        list[c[i]] = 1;
    }
    // let last_space_station_index: number = null;
    // let maximum_distance: number = 0;
    // for (let i = 0; i < n; i++) {
    // 	// const element = c[i];
    // 	// console.log(i in list);
    // 	// console.log(c.includes(i));
    // 	// if current city has a station
    // 	if (i in list) {
    // 		// console.log(i - last_space_station_index);
    // 		if (last_space_station_index === null) {
    // 		}
    // 		if (i - last_space_station_index > maximum_distance) {
    // 			maximum_distance = i - last_space_station_index;
    // 		}
    // 		last_space_station_index = i;
    // 	}
    // }
    // // it slices the length in half because the astronaut can go in both directions.
    // // return maximum_distance - 1;
    // // if (maximum_distance % 2 === 0) {
    // // 	return maximum_distance / 2;
    // // } else {
    // // }
    // if (maximum_distance % 2 === 0) {
    // 	return maximum_distance / 2;
    // } else {
    // 	if (maximum_distance == 1) {
    // 		return 0;
    // 	} else {
    // 		return Math.floor(maximum_distance / 2) + 1;
    // 	}
    // }
    if (c.length === n) {
        return 0;
    }
    // solution 2:
    // order space stations
    // check difference between them to get max distance
    c.sort((a, b) => a - b);
    let prev = 0;
    let maximum_distance = null;
    c.forEach((element) => {
        // console.log(`${element}, ${prev}`, element - prev);
        if (element - prev > maximum_distance) {
            maximum_distance = element - prev;
        }
        prev = element;
    });
    console.log(maximum_distance);
    // check if the last element of the array is the number of cities minus one. (5 cites, index 0-4)
    // in other words: if the last city has a space station
    const has_last = !!(c[c.length - 1] === n - 1);
    const has_first = !!(c[0] === 0);
    if (has_first && has_last) {
        return Math.ceil(maximum_distance / 2);
    }
    else {
        // console.log("aaaa");
        // calculate the tips
        // console.log(c[0]);
        // console.log(n - c[c.length - 1]);
        console.log(c[0], n - 1 - c[c.length - 1], maximum_distance / 2);
        return Math.max(c[0], n - 1 - c[c.length - 1], // n - 1 because the number of elements is e.g. 20 but element indexes go up to 19
        Math.floor(maximum_distance / 2));
    }
};
console.log("result: ", flatlandSpaceStations(6, [0, 5]));
console.log("result: ", flatlandSpaceStations(42, [0, 5, 10, 39]) == 14);
console.log("result: ", flatlandSpaceStations(100, [93, 41, 91, 61, 30, 6, 25, 90, 97]) === 14);
console.log("result: ", flatlandSpaceStations(20, [1, 6, 10, 11, 13]) === 6);
console.log("result: ", flatlandSpaceStations(50, [0, 11, 20, 30, 40, 50]) === 6);
console.log("result: ", flatlandSpaceStations(6, [2, 3, 4, 5]) === 2);
console.log("result: ", flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]) == 0);
console.log("result: ", flatlandSpaceStations(95, [
    68,
    81,
    46,
    54,
    30,
    11,
    19,
    23,
    22,
    12,
    38,
    91,
    48,
    75,
    26,
    86,
    29,
    83,
    62,
]) == 11);
// console.log(
// 	"result: ",
// 	flatlandSpaceStations(95, [
// 		11,
// 		12,
// 		19,
// 		22,
// 		23,
// 		26,
// 		29,
// 		30,
// 		38,
// 		46,
// 		48,
// 		54,
// 		62,
// 		68,
// 		75,
// 		81,
// 		83,
// 		86,
// 		91,
// 	])
// );
