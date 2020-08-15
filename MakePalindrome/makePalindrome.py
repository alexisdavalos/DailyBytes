# Take in a string, any set of chars
# Returns Boolean


# addbb => true(abba)
# asdf => false
# asdfasdf => true (asdffdsa)
# aaabb => true (baaab)

def makePalindrome(string):
    charCount = {}

    for char in string:
        if char in charCount:
            charCount[char] +=1
        else:
            charCount[char] = 1

    charValues = charCount.values()
    odd = 0
    even = 0

    for value in charValues:
        if value % 2 == 0:
            even +=1
        else:
            odd +=1

    return odd <= 1

print(makePalindrome('addbb'))
print(makePalindrome('alkdjsfdsa'))
print(makePalindrome('asdfasdf'))
print(makePalindrome('racecar'))

