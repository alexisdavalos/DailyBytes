# time O(n) | space O(1)
def isPalindrome(string):
	if string == string[::-1]:
		return True
	else:
		return False

#Driver Code
strings = ['red rum sir is murder', 'was it a cat i saw', 'is this a palindrome', 'no lemon no melon', 'check this string too']

for string in strings:
    print(f'{string}\npalindrome: {isPalindrome(string)}\n')
