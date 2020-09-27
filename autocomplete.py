from fast_autocomplete import AutoComplete
from flask import request

AUTOCOMPLETE = None

def init():
    names = None
    with open("names.txt") as file:
        names = file.readlines()

    words = dict(zip(names, [dict()] * len(names)))
    return AutoComplete(words=words)


def search(s):
    global AUTOCOMPLETE
    if AUTOCOMPLETE is None:
        AUTOCOMPLETE = init()
    return sorted(AUTOCOMPLETE.search(word=s, max_cost=3, size=10))

def main():
    AUTOCOMPLETE = init()
    s = input("::>")
    while s != "exit":
        print(*search(s), sep='\n')
        s = input("::>")




if __name__ == "__main__":
    main()
