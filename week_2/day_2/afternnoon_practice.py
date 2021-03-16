# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that as you to give the user a name, and give the user an age,
#  and will then create the user for you, and print it to the screen. 
# The user will have a choice to either be a temp user or a User


class user_class:
    def __init__(self,name,age): 
        self.name = name 
        self.age = age
        self.type = "permananent"
    
    def printuser(self):
        print(self.name)
        print(self.age)
        print(self.type)



    

class temp_user: 
    def __init__(self, name):
        self.name = name 
        self.type = "temporary"
    
    def printtemp(self,):
        print(self.name)
        print(self.type)

    


def user_name(): 
    user = ''
    enter_name = input(" what is you name?")
    enter_age = input("what is your age?")
    user_type = input("are you a temp user or a user?")
    
    if  user_type == "user": 
        user = user_class(enter_name,enter_age)
        user.printuser()
        
    elif user_type == "temp":
        user == temp_user(enter_name)
       
    else : 
        print("invalid response")
    

 
user_name()


# Create a building class
# buildilng class will have 
# height
# capacity
# sqft
# # commercial or residential
# commercial
# ask the user to create a building (new instance of the building class)
# they will enter in height
# capacity (people)
# sqft
# 5 instances of a building
# print out the specs of the buildilng everytime a building is made
# print statement needs to be a method

# message = "can you tell me about your building?"


# class building: 
#     def __init__(self, height, capacity,sqft):
#         self.height = height 
#         self.capacity = capacity
#         self.sqft = sqft
#         self.type = "commercial"

#     def printb(self):
#         print(self.height)
#         print(self.capacity)
#         print(self.sqft)
#         print(self.type)


 
# def new_building():

#     newbuild = ''
#     message = print("can you tell me about your building?")
#     building_height = input("what is your building height?")
#     building_capacity = input("how many people can your building hold?")
#     build_sqft = input("what is the sqft of your building?")

    
#     newbuild = building(building_height,building_capacity,build_sqft)
#     newbuild.printb()
#     #building.printb()


# count = 0
# while count < 5: 
#     new_building()
#     count += 1












