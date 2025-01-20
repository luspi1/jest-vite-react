export const filterArray = (array: any, cb: any)=> {
	const newArray = []
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
		if (cb(array[i])) newArray.push(array[i])
	}
	return newArray
}

