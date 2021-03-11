# var assignments for inputs
firstinput = int(input("please enter a number"))
opperand = input(" what would you like to do? ( + , - , * , /)")
secondinput = int(input("please input another number"))


finalAnswer = None

if opperand == "+":
    # add 2 numbers
# I coulf use functions declared above instead but instead bypassing using a variable 
# def addition(firstNum, secondNum): 
    finalAnswer = (firstinput + secondinput)
    #subtract 2 numbers
elif opperand == "-":
#     #def subtract(firstNum, secondNum): 
    finalAnswer = (firstinput - secondinput)
elif opperand == "*":   #multiply 2 nums
#     #def multiply(firstNum, secondNum): 
    finalAnswer = (firstinput * secondinput)
#         #divide 2 nums 
elif opperand == "/":
    finalAnswer = (firstinput * secondinput)
# else:
    finalAnswer =  print("enter a valid opperand")

#     #def divide(firstNum, secondNum): 




print("your answer is %s" % (finalAnswer))







