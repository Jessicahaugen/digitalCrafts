
# digitalCraftsStudent = {
#     "name": "Jessica",
#     "city": "Washougal",
#     "computer": ["Mac"],
# }

# print(digitalCraftsStudent[computer][0])

# gamer = {
#     "platform": "",
#     "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
#     "skill": ''
# }
# print(gamer["gamingHours"][1]["weekends"])





# stock {
#     "name" : 'Game Doge'
#     "price": 1,
#     "denomination": "cent"
#     "volume": 5
#     "volatility":'Low'
#     "start_of_day_price": "2"
#     " end_of_day_price": "4"
#     "market": ["USA", "Europe"]
#     "shareholders" : 
   
#     {"name":James},
#     {"name": LeRon},
#     {"name": Kendall},
#     {"name":Randi},
#     {"name":Nischal},
# }


# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value


car = {
    "model": "Subaru Outback",
    "image": "https://bit.ly/3bLyoL7",
    "year": "2017",
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}

#1.    
for engine in car["engineChoices"]:
    print(engine)
#2       
for engine in car["engineChoices"]:
    for key,value in engine.items():
        print(value["horsepower"])
        

#print(car["enginechoices"][0]["v4"],(car["enginechoices"][1]["v6"],(car["enginechoices"][2]["v8"], )

# #3
if "trim" in car:
    print(True)
else: 
    print(False)

# #4
car["colors"] = ["red","blue","yellow", "green"]
print(car)










        