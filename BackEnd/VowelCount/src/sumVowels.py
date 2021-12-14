def sum (x):
    num_vowels=0
    for char in x:
        if char in "aeiouAEIOU":
         num_vowels = num_vowels+1
    return num_vowels
