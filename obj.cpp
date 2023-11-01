#include <iostream>
#include<list>
using namespace std;

class Student {
    public:
    string name;
    int age ;
    int grade ;
};
int main (){
    Student Student;
    Student.name = "michel";
    Student.age = 23;
    Student.grade = 10;

    cout<<"name is " << Student.name << endl;
    cout<<"age is " << Student.age << endl;
    cout<<"grade is " << Student.grade << endl;
}