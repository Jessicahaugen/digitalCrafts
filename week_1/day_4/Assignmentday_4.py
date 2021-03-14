

taskList = [] 

def welcome():
    message = ("""
    Press 1 to add task,
    Press 2 to delete task, 
    Press 3 to view task, 
    Press q to quit task """)
    
    print(message)
#creating an empty list to add too  outside of functions

# defining a function to add tasks
def addTask():
    #initializing prompts
    taskDic = {}
    prompt1 = input("What task will you be adding?")
    prompt2 = input("what is the priority level?  High,  Medium, or Low ")
    
    if prompt2 not in ["High", "Medium", "Low"]:
        print("invalid priority")
    #creating a dictionary to easily append to my list
    taskDic["title"] = prompt1, 
    taskDic["priority"] =  prompt2
    taskList.append(taskDic)

    print("Your %s is added and is at a %s priority" % (prompt1, prompt2) )
   

def deleteTask(): 
    if len(taskList) == 0:
        print("no tasks to delete")
    else:
        for item, task in enumerate(taskList, start=0):
            print(item + 1,task)
        tasktoDelete = int(input("Enter the number of the item you would like to delete"))
        taskList.pop(tasktoDelete)
    print(taskList)
    
    

def viewTask():
    print("here are your To Dos")
    if len(taskList) == 0:
        print("no tasks to view")
    else:
        for item, task in enumerate(taskList, start=0):
            print(item + 1, task)
    print("Tasks above")

    
    # taskList.append(listDic)
    # returning to user    
# creating input that gives 4 commands; 
def choices(userinput): 
    if userinput == "1": 
        addTask()
    elif userinput == "2":
        deleteTask()
    elif userinput == "3":
        viewTask()
    elif userinput != "q":
        print("please enter a valid response")


while True:
    welcome()
    choice = input("Press 1 to add task, Press 2 to delete task, Press 3 to view task, Press q to quit task " )
    if choice == "q":
        break
    choices(choice)