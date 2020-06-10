#!/bin/python3

import math
import os
import random
import re
import sys
import math
# Complete the repeatedString function below.


def repeatedString(s, n):
    sLen = len(s)
    a = 0

    # counsts number of a's in the string
    for i in range(sLen):
        if s[i] == "a":
            a += 1

    # multiply the number of a's byt the number of times it fits into n
    # for example if n is 10 and s = "abc", sLen = 3, then 10//3, 3 (because of floor division)
    a = a*(n//sLen)

    # that said theres still a remainder from 10/3 because its 3.333333...., 10%3 is 1 so it runs 1 times with index 0
    for i in range(n % sLen):
        if s[i] == "a":
            a += 1

    return a


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()
