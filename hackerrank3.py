#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the sockMerchant function below.


def sockMerchant(n, ar):

    pairs = {}

    for x in range(0, 1000000):

        # for item in ar:
        #     pairs[item] = 0
        # for item in ar:
        #     pairs[item] += 1

        for color in ar:
            if color in pairs:
                pairs[color] += 1
            else:
                pairs[color] = 1

        pairs = {}

    return 2


if __name__ == '__main__':

    n = int(input())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)
