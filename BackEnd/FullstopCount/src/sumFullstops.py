def sum (x):
    num_fullstops=0
    for char in x:
        if char in ".":
         num_fullstops = num_fullstops+1
    return num_fullstops
