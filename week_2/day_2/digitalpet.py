class spider: 
    def __init__(self, name, strength, defense, hp):
        self.name = name 
        self.strength = strength
        self.defense = defense
        self.hp = hp
        
    def feed_peter(self):
        print("omm nom nom")
        self.strength += 5
        self.hp += 5
        return 

    def played_with_peter(self):
        print("he is getting angry")
        self.defense += 5

    def how_is_peter(self):
        print(pet_spider)


    def welcome():
        int(input(message = """
        1. Feed Peter
        2. Play with Peter
        3.Check on Peter 
        4. Press 5 to quit
        """))
        return messsage
            
class omega_spider(spider):
    def __init__(self, name, size):
        super(name, 20, 10, 0, size)

    
# class omega_spider:
#     def __init__(self, name, strenght, defense, hp,size):
#         self.name = name 
#         self.strength = strength
#         self.defense = defense
#         self.hp = hp
#         self.size = size

# peter = spider("peter", 20, 10,100)
# print("we fed peter, " , peter.strength)

# peter.feed_peter():

# mercado = spider("mercado",20,10,100)
# print("we fed peter, " , mercado.strength)
# billybob = spider("Billy",0,4,5)
b_bub = spider.omega_spider("beelzebubb",100)

print(b_bub.size)
        



# pet_spider = {
#     "name" :" peter",
#     "strength":20,
#     "defense" :10, 
#     "hp": 100
# }
# other_spider = {
#     "name" :" Mercado",
#     "strength":20,
#     "defense" :10, 
#     "hp": 100
# }

choice = ""

while choice != 5: 
    choice = welcome()

    if choice == 1:
        feed_peter()
    elif choice == 2:
        played_with_peter()
    elif choice == 3:
        played_with_peter()
    else: 
        pass 

    


