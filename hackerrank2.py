import readline
from textwrap import wrap
import math


def merge_the_tools(string, k):
    # your code goes here
    stringLength = len(string)

    # nk = stringLength / k

    arr = wrap(string, k)

    for ele in arr:
        # print(dict.fromkeys(ele))
        print("".join(dict.fromkeys(ele)))


if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)
