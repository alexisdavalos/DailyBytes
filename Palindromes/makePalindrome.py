# Given a string, return whether or not you can arrange the string to make a Palindrome.

# Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

# Your function does the following:
# Take in a string, any set of chars
# Returns Boolean

def makePalindrome(string):
    charCount = {}

    for char in string:
        if char in charCount:
            charCount[char] += 1
        else:
            charCount[char] = 1

    charValues = charCount.values()
    odd = 0
    even = 0

    for value in charValues:
        if value % 2 == 0:
            even += 1
        else:
            odd += 1

    return odd <= 1


# Test Cases
print(makePalindrome('addbb'))  # aabb => true (abba)
print(makePalindrome('alkdjsfdsa'))  # asdf => false
print(makePalindrome('asdfasdf'))  # asdfasdf => true (asdffdsa)
print(makePalindrome('racecar'))  # racecar => true (racecar)
