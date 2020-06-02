# Enter your code here. Read input from STDIN. Print output to STDOUT

# Read stuff
howManyWords = int(input(""))
words = {}

while howManyWords:
    word = input("")

    howManyWords -= 1

    if word in words:
        words[word] += 1
    else:
        words[word] = 1


print(len(words))

nums = ""
for key, value in words.items():
    nums += str(value) + " "


print(nums)
