#user first name
name_of_user = input("What is your name")
# store user first name into a number
length_username = len(name_of_user)

while (length_username < 1 ): 
     name_of_user = input("What is your name")
     length_username = len(name_of_user)

last_name_user = input("last name")
length_username_last = len(last_name_user)
while (length_username_last): 
    last_name_user = input("last name")
    length_username_last = len(last_name_user)

print("the user name is %%", (name_of_user, last_name_user))

# if statements do something if something happens or doesnt. 
# syntax if condition: else: code belongs below
if length_username > 0: 
    name_of_friend = input("what is your friends name")
    print("your friends name is", name_of_friend)
    print("valid username")
else: 
    print("type anything")
# # While loop continues happeinging while condition is true. if condition is false then it can stop. 


# take the users last name
last_name_user = input("last name")
# #store usser last name 
length_username_last = len(last_name_user)


#printing commands and variables from above
print("this is the length of the user last name", (length_username))
print("this is the length of the user last name",(length_username_last))
print("the user name is %s %s" % (name_of_user, last_name_user))
# if statements do something if something happens or doesnt. 
# syntax if condition: else: code belongs below
