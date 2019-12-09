import random
import time
import sys


# Program name: Spinsational Carnage
# File name: final_slot.py
# Author: Nicholas Jocius
# Class: Programming Fundamentals 1 (85811)/ COSC 1336-009

# --------  This program is a slot machine game, the objective is for the user to
# not lose their initial bankroll and win by matching symbols on the slot wheels.  Each
# combination paysout differently.  The bankroll is saved after exiting to be used again
# the next time the user plays.  This program imports the random, time, and sys libraries which should all come standard.


#Constants
WHEELS = ["Hearts", "Clovers", "Cherries", "Diamonds", "Bar"]


# Function: main()
# Function purpose: main game function
# Parameters: none
# returns: none

def main():

    intro()
    game_body()


    

# Function: newUser()
# Function purpose: asks if new or returning user, if new creates fresh balance of $500, if returning it loads balance.
# Parameters: none
# returns: balance


def newUser():

    print("Are you a new or returning user? \n")
    
    user_status = input("Enter 'n' for new or 'r' for returning: \n")
    
    try:
        
        if (user_status.lower() == 'n'):

            balance = 500

            save_game(str(balance))

        elif (user_status.lower() == 'r'):

            balance = bank_balance()

        else:

            print("Input not recognized \n")

            newUser()

        return balance

    except Exception as sysMsg:

        print("Error in new user confirmation: \n")

        print(sysMsg)


# Function: bank_balance()
# Function purpose: retrieves balance saved on my_bank.txt file to use as bank in game
# Parameters: none
# returns: bank


def bank_balance():

    try:
            
        with open('my_bank.text', 'r') as b:
            contents = b.readlines()

            bank = int(contents[0])
            
            return bank
        
    except Exception:

        print("Balance Error")
        



# Function: save_game()
# Function purpose: saves current bank balance to my_bank.txt file
# Parameters: bank
# returns: none

def save_game(bank):

    try:
        
        with open('my_bank.text', 'w') as b:
            b.write(bank)
        
    except Exception:

        print("Save Error")


# Function: reset_game()
# Function purpose: resets bank balance to $500 and saves to my_bank.txt file
# Parameters: bank
# returns: none

def reset_game(bank):

    try:
        
        with open('my_bank.text', 'w') as b:

            bank = str(500)
            
            b.write(bank)
        
    except Exception:

        print("Reset Error")


# Function: intro()
# Function purpose: display intro text and current balance
# Parameters: none
# returns: none

def intro():

    bank = newUser()
    begin_game = ''
    proceed = True

    intro = ("Welcome to Spinsational Carnage!\n\n"\
             "This Slot Machine will either make your wildest dreams come true\n\n"\
             "or your worst Nightmares a reality!!!!!!\n\n\n"\
             "You will start with a set amount in your bank or load your saved balance.\n\n"\
             "The objective is clear, you must match 2 or 3 symbols to win and each combination offers a different prize.\n\n"\
             "You may choose to quit at any time, but be careful, if you run out of funds you will be kicked out.\n\n\n")

    for letter in intro:

        time.sleep(0.03)
        print(letter,end='')
    

    try:

         while proceed:
            
            begin_game = input("Are you brave enough to enter? Enter 'y' to continue: \n")
            
            if (begin_game == "y") or (begin_game == "Y"):

                print("We have deposited", "${0:,.2f}".format(bank), "in your wallet \n")

                print("Let's start the carnage! \n")

                proceed = False

            
            elif (begin_game != "y") or (begin_game != "Y"):

                print("Unacceptable!  I can't let you leave \n")
                
                proceed = True

            else:

                print("Error")
                proceed = False

    except Exception:

        print("Failure to proceed from intro")




# Function: spin_again()
# Function purpose: user input to continue playing or to save balance and quit game
# Parameters: bank
# returns: spin_again

def spin_again(bank):

    spin_again = ''

    print("You have", "${0:,.2f}".format(bank), "in your wallet \n")

    spin_again = input("Enter 'y' to Spin or 'n' to quit: \n")


    while (spin_again != "n") or (spin_again != "N"):
        
        try:

            if (spin_again == "y") or (spin_again == "Y"):

                break

            elif (spin_again == "n") or (spin_again == "N"):
                
                print("Your wallet has been saved for next time \n")
                print("Come back and see us \n")
                
                bank = str(bank)
                
                save_game(bank)

                sys.exit(0)

            else:

                print("wrong input, try again \n")

                spin_again = input("Enter 'y' to Spin or 'n' to quit: \n")
                
                continue
            
        except Exception:

            print("Ooops! Something went wrong there")

            sys.exit(0)

    return spin_again

            
    
        


# Function: game_body()
# Function purpose: major game loop, adds wins and losses, quits and resets bank if balance goes to zero and displays main game
# Parameters: none
# Calls: spin_again, reset_game
# returns: none

def game_body():
    
    command = 'y'
    bank = bank_balance()
    bet = ''
    
    
    while (command == 'y') and (bank > 0):

        command = spin_again(bank)
        
        try:
            bet = int(input("How much would you like to bet? \n"))
        
            if (bet < bank) and (bank > 0) and (bet > 0):

                print("Nice bet! \n")
        
            elif (bet > bank) and (bank > 0):

                print("You wish you had cash like that. Try another amount please\n")
                
                continue

            elif (bet == bank):

                print("Last dollar in\n")

            elif (bet < 0) or (bet == 0):

                print("You really think that will work, try again \n")

                continue

            else:
                
                print("The carnage has broken reality, WAKE UPPPP!!!!")
                
                reset_game(bank)
                
                break
        
        except Exception:

            print("Need to bet a whole number please \n")

            continue
        
        bank = (bank - bet)

        reel1 = random.choice(WHEELS)
        reel2 = random.choice(WHEELS)
        reel3 = random.choice(WHEELS)
        

        for i in reel1:

            time.sleep(0.1)
            print(" ", i , end='')
        print("   ", end="")


        for i in reel2:

            time.sleep(0.1)
            print(" ",i , end='')
        print("   ", end="")
        
        for i in reel3:

            time.sleep(0.1)
            print(" ",i , end='')
        print("\n")
        print("-------------------------------------------------------------------------\n ")
        

        
        if (reel1 == reel2) and (reel2 == reel3):

            if (reel1 == "Cherries"):
                print("Jackpot 3 Cherries! \n")
                bank += (100 + bet)
                print("You won $100 \n")
                
            elif (reel1 == "Clovers"):
                print("Jackpot 3 Clovers! \n")
                bank += (bet + 200)
                print("You won $200 \n")

            elif (reel1 == "Bar"):
                print("Jackpot 3 Bar! \n")
                bank += (bet + 250)
                print("You won $250 \n")

            elif (reel1 == "Hearts"):
                print("Jackpot 3 Hearts! \n")
                bank += (bet + 300)
                print("You won $300 \n")

            elif (reel1 == "Diamonds"):
                print("Jackpot 3 Diamonds! \n")
                bank += (bet + 400)
                print("You won $400 \n")

            else:

                pass

        if (reel1 == reel2) and (reel2 != reel3):

            if (reel1 == "Cherries"):
                print("Winner 2 Cherries! \n")
                bank += (bet + 25)
                print("You won $25 \n")

            elif (reel1 == "Clovers"):
                print("Winner 2 Clovers! \n")
                bank += (bet + 35)
                print("You won $35 \n")

            elif (reel1 == "Bar"):
                print("Winner 2 Bar! \n")
                bank += (bet + 45)
                print("You won $45 \n")

            elif (reel1 == "Hearts"):
                print("Winner 2 Hearts! \n")
                bank += (bet + 55)
                print("You won $55 \n")

            elif (reel1 == "Diamonds"):
                print("Jackpot 2 Diamonds! \n")
                bank += (bet + 65)
                print("You won $65 \n")

            else:

                pass
            
        if (reel1 == reel3) and (reel3 != reel2):

            if (reel3 == "Cherries"):
                print("Winner 2 Cherries! \n")
                bank += (bet + 25)
                print("You won $25 \n")

            elif (reel3 == "Clovers"):
                print("Winner 2 Clovers! \n")
                bank += (bet + 35)
                print("You won $35 \n")

            elif (reel3 == "Bar"):
                print("Winner 2 Bar! \n")
                bank += (bet + 45)
                print("You won $45 \n")

            elif (reel3 == "Hearts"):
                print("Winner 2 Hearts! \n")
                bank += (bet + 55)
                print("You won $55 \n")

            elif (reel3 == "Diamonds"):
                print("Jackpot 2 Diamonds! \n")
                bank += (bet + 65)
                print("You won $65 \n")

            else:

                pass
            
        if (reel1 != reel3) and (reel3 == reel2):

            if (reel2 == "Cherries"):
                print("Winner 2 Cherries! \n")
                bank += (bet + 25)
                print("You won $25 \n")

            elif (reel2 == "Clovers"):
                print("Winner 2 Clovers! \n")
                bank += (bet + 35)
                print("You won $35 \n")

            elif (reel2 == "Bar"):
                print("Winner 2 Bar! \n")
                bank += (bet + 45)
                print("You won $45 \n")

            elif (reel2 == "Hearts"):
                print("Winner 2 Hearts! \n")
                bank += (bet + 55)
                print("You won $55 \n")

            elif (reel2 == "Diamonds"):
                print("Jackpot 2 Diamonds! \n")
                bank += (bet + 65)
                print("You won $65 \n")

            else:

                pass

        if (reel1 != reel2) and (reel1 != reel3) and (reel2 != reel3):

            print("Too bad.  Better luck next time \n")
            

    print("You have succumb to the carnage and have been bankrupted, sorry, goodbye")
    
    reset_game(bank)
    
    

main()






  

