
def user_input_validation(keyed_in):
   

    # Strip White space
    keyed_in=keyed_in.strip()

    # Convert user input into lower case
    keyed_in=keyed_in.lower()

    #Get the first character of user input
    keyed_in=keyed_in[0]
    print(keyed_in)
    return keyed_in

if __name__ == "__main__":
    # Ask for input
    answer = input("Enter yes or no y/n or Y/N  : ")
    user_answer = user_input_validation(answer)
    while user_answer not in ["y","n"]:
        print("Please input y or n ")
        answer = input("Enter yes or no y/n or Y/N  : ")
        user_answer = user_input_validation(answer)
    

    print("User entered Y or N ")




