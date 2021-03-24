class Currency: 
    def __init__(self,name,nation,price,quantity):
        self.name = name 
        self.nation = nation
        self.price = price
        self.Quantity = quantity
        
    def print_curr(self):
        print(f"NAME: \n{self.name} \n 
         NATION:{self.nation} 
         \n PRICE:{self.price} \n QUANTITY: {self.quantity}")
       
    def addQuantity(self,amount):
        self.amount = amount 
        


class Crypto(Currency):
    # def __init__(self,name,nation,price,quantity):
    #     super() __init__(self,name,nation,price,quantity)
    def go_to_the_moon(self): 
        self.price = self.price * 1000
    def print_curr(self):
        print("emoji")
class Scam(Crypto):
    pass
yen = Currency("Yen","Japan",20,10)
yen.print_curr()

# print(yen.price)

# print(f' {yen.name} {yen.home_nation_currency}{yen.price}')

usa = Currency("Dollar", "US",1,10)
usa.print_curr()


swedish_krona = Currency("Krona", "Swedish",1,10)
swedish_krona.print_curr()



doge = Crypto("Doge Coin", "Doge Nation",5, 1000000)
doge.go_to_the_moon()
doge.print_curr()

xvg = Scam("XVG", "Secure Money", 0, 10)
xvg.go_to_the_moon()

