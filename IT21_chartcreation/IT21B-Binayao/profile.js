class profile{
    constructor (Name, Age, Birthday, Gender){
        this.Name = Name;
        this.Age = Age;
        this.Birthday = Birthday;
        this.Gender = Gender;
    }
    displayprofile(){
        console.log("Name:      " + this.Name);
        console.log("Age:       " + this.Age);
        console.log("Birthday:  " + this.Birthday);
        console.log("Gender:    " + this.Gender);

    }
    
}
const profile1 = new profile ('Jaspher' , 20 , "05/14/04" , "Male");
const profile2 = new profile ('Rimond' , 19 , "08/20/04" , "Male");
const profile3 = new profile ('Precelle' , 20 , "01/08/04" , "Female");

profile1.displayprofile();
profile2.displayprofile();
profile3.displayprofile();
  

