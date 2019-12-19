# Imported libraries
import random
import sys

# Author: Nick Jocius
# Created: 11/20/2019
# Program name: coin_flip.py
# Purpose: uses user input to generate a given amount of coin tosses.
# Displaying the outcome in heads or tails, calculating the times landed and percentage of each

# Function: main()
# Purpose:  main game loop takes in user input for amount of flips to run
# Parameters: none
# Returns: none

def main():

    number = 0

    try:
        
        while user_flip() == True:

            number = input("Enter a number of times to flip the coin: \n")
            
            if number.isalpha():

                print("Try again, need an integer \n")

                continue

            if number.isdigit():

                number = int(number)

                coin_side(number)

            else:
                print("Something went wrong \n")
                 
    except Exception as sysMsg:

        print("This error has occurred \n")

        print(sysMsg)

    else:

        print("successful test \n")



# Function: user_flip()
# Purpose:  allows user to continue on or quit
# Parameters: none
# Returns: status

def user_flip():

    next_flip = ''
    status = True

    while True:

        next_flip = input("Enter 'y' to flip or 'q' to quit: \n")

        if (next_flip.lower() == 'y'):

            status = True

        elif (next_flip.lower() == 'q'):

            print("Thank you for playing")

            status == False

            sys.exit(0)

        elif (next_flip.lower() != 'y') or (next_flip.lower != 'q'):

            print("Not a valid input \n")

            continue

        return status


# Function: coin_side()
# Purpose:  initiates flip and counts times landed
# Parameters: times
# Returns: none

def coin_side(times):

    heads = 0
    tails = 1
    h_count = 0
    t_count = 0

    for i in range(times):

        flip = int(random.randint(0,1))

        if (flip == 0):
            print("HEADS")
            h_count += 1

        elif (flip == 1):
            print("TAILS")
            t_count += 1

        else:

            print("Error")

    print("Heads total: " + str(h_count), "Tails total: " + str(t_count))

    ratio(h_count,t_count)


# Function: ratio()
# Purpose:  figures out ratio of both heads and tails flips
# Parameters: x,y
# Returns: ratio1,ratio2

def ratio(x,y):

    ratio1 = (x / (x+y))
    ratio2 = (y / (y+x))

    print("Heads Percentage: " + "{:.2%}".format(ratio1) + '%', "Tails Percentage: " + "{:.2%}".format(ratio2))

    return ratio1,ratio2



main()




    
