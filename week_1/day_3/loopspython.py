nameOfUser = input("what is your name")
lenOfUser = len(nameOfUser)
while(lenOfUser < 2): 
    nameOfUser = input("what is your name")
    lenOfUser = len(nameOfUser)


nameOfUserLast = input("what is your last name")
lenOfUserLast = len(nameOfUserLast)
while(lenOfUserLast < 2): 
    nameOfUserLast = input("what is your name")
    lenOfUser = len(nameOfUser)
print( "this is the username %s %s" % (nameOfUser, nameOfUserLast))

firstNameOfriend = input("what is your friends name")
lenOfFirstFriend = len(firstNameOfriend)
while(lenOfFirstFriend < 2): 
    firstNameOfriend = input("what is your friends name")
    lenOfFirstFriend = len(firstNameOfriend)

lastNameOfriend = input("what is your friends name")
lenOfLastFriend = len(lastNameOfriend)
while(lenOfLastFriend < 2): 
    firstNameOfriend = input("what is your friends name")
    lenOfLastFriend = len(lastNameOfriend)

print( "%s %s is friends with %s %s" % (nameOfUser,nameOfUserLast,firstNameOfriend,lastNameOfriend))


