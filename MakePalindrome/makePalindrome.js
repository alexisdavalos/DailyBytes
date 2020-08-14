// Take in a string, any set of chars
// Returns Boolean

// aabb => true (abba)
// asdf => false
// asdfasdf => true (asdffdsa)
// aaabb => true (baaab)
// racecar => true

const makePalindrome = (string) =>{

	let stringCount = {};

	for (let i = 0; i < string.length; i++){
		if (stringCount[string[i]]){
			stringCount[string[i]] += 1;
		}else{
			stringCount[string[i]] = 1
		}
	}
	// at most 1 odd count
	const counts = Object.values(stringCount)
	let odd = 0;
	let even = 0;
	for (let i = 0; i < counts.length; i++){
		if (counts[i] % 2 == 0){
			even += 1;
		}else{
			odd +=1;
		}
	}
	return odd <= 1
}

// Driver Code
console.log(makePalindrome('aabb'))
console.log(makePalindrome('asdf'))
console.log(makePalindrome('asdfasdf'))
console.log(makePalindrome('aaabb'))
console.log(makePalindrome('racecar'))
