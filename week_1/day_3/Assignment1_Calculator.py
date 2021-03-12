# exitability = input("to quit press q")
# declaring functions 
def addition(num1,num2):
    return int(num1) + int(num2)

def subtraction(num1,num2):
    return int(num1) - int(num2)

def multiplication(num1,num2):
    return int(num1) * int(num2)

def division(num1,num2):
    return int(num1) / int(num2)


while True: 

    firstinput = input("please enter a number or enter q to quit")
    if firstinput == "q":
        print("you have exited the calculator")
        break
    opperand = input(" what would you like to do? ( + , - , * , /, q)")
    if opperand == "q":
        print("you have exited the calculator")
        break
    secondinput = input("please input another number")
    if secondinput == "q":
        print("you have exited the calculator")
        break



    #finalAnswer = None

    if opperand == "+":
        print("your answer is %s" % (addition(firstinput, secondinput)))
  
        # add 2 numbers
    # def addition(firstNum, secondNum): finalAnswer = (firstinput + secondinput)
        #subtract 2 numbers
    elif opperand == "-":
        print("your answer is %s" % (subtraction(firstinput, secondinput)))
    # #     #def subtract(firstNum, secondNum): 
    #   finalAnswer = (firstinput - secondinput)
    elif opperand == "*":
        print("your answer is %s" % (multiplication(firstinput, secondinput)))
    #      #multiply 2 nums
    # #     #def multiply(firstNum, secondNum): 
    #    finalAnswer = (firstinput * secondinput)
    # #         #divide 2 nums 
    elif opperand == "/":
        print("your answer is %s" % (division(firstinput, secondinput)))
    #     #finalAnswer = (firstinput / secondinput)
    #elif opperand == "q":
    
    else:
        print("enter a valid opperand")





#print("your answer is " % (finalAnswer))







