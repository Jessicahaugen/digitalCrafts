# create a chess board " " # " " #  8x8
# alternating starting # " "
# chessboard ("blank string","pound"):

# append to a list?
# loop through a list?
chesboard = """ '' # '' # '' # '' # \n # '' # '' # '' # ''\n '' # '' # '' # '' # \n # '' # '' # '' # ''\n '' # '' # '' # '' # \n # '' # '' # '' # ''\n '' # '' # '' # '' # \n # '' # '' # '' # ''\n """
print(chesboard)


chessboard = (" ", "#") * 4
for chessline in range(8):
    if chessline % 2 == 0:
        print(chessboard[::-1])
    else:
        print(chessboard)

    print(chessline)


# chessboard = """ ' ' # '' # '' # '' #  """
# for chessline in range(8):
#     # for chess in range(8):
#     if chessline % 2 == 0:
#         print(chessboard[::-1])
#     else:
#         print(chessboard)


#     print(chessline)


# chesboard2 = [("" "#")*4]
# for board in range(8)
