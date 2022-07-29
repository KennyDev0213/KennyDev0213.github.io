import random

iterations = 0

pulls = 0

three_star = 0
four_star = 0
five_star = 0
six_star = 0

pull_possibilities = (3,4,5,6)
pull_weights = (0.2,0.4,0.08,0.02)
for _ in range(iterations):
    pull = random.choice(pull_possibilities, weights = [])
    if pull == 3:
        three_star += 1
    elif pull == 4:
        four_star += 1
    elif pull == 5:
        five_star += 1
    elif pull == 6: 
        six_star += 1


print("total pulls: " + pulls)
print("3 stars: " + three_star)
print("4 stars: " + four_star)
print("5 stars: " + five_star)
print("6 stars: " + six_star)