

class hero: 
    def__init__(self,name,attack,defense,hp,hero): 
        self.name = name 
        self.attack = attacl 
        self.defence = defence
        self.hp = hp 
        self.characterclass = hero


# classes 
# #hero
# #name 
# attack 
# defence 
# hp

class goblin: 
    def__init__(self,name,attack,defense,hp,clan): 
        self.name = name 
        self.attack = attacK 
        self.defence = defence
        self.hp = hp 
        self.characterclass = goblin
# name 
    def take_damadge(self):
        self.hp -= 5
# defenc
# hp 
# clan

class knight: 
    def__init__(self,name,attack,defense,hp,): 
        self.name = name 
        self.attack = attacK 
        self.defence = defence
        self.hp = hp 
        self.characterclass = hero

def char_attacks(char1,char2):
    print(f"{hero.name} attacks {goblin.name}")
    print(f"{goblin.name} takes 5 damage")
    print(f"{goblin.name} has {goblin.hp}")


def character_creation(): 
    char_name = input("what is your name?")
    char_class = input("are you a (g) goblin (k) knight or (h)hero")

    if char_class == "k": 
        charachter = hero(char_name,10,10,10,)
    elif char_class =="g": 
        character = goblin(char_name, 10,10,10)
    elif char_class == "h"
bob = goblin("bob",20,20,20)
phillip = hero("phillip",20,20,20)
randi = goblin("randi",20,20,20)
whitney = hero("whitney",20,20,20)
randy = goblin("randy",20,20,20)
carlo = knight("carlo"20,20,20)

print("the name of this character" , bob.name )
print("the name of this character" , whitney.name )
print("the name of this character" , phillip.name )
print("the name of this character" , randy.name )

# get ealth values 
#rint health values 
#set a global variable to be while loop condition

while char> 0: 

    char_attacks(randi,randy)
    if randy.hp == 0: 
        print