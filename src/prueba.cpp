
#include <iostream>

using namespace std;

class List{
    private:
        int *data;
        int size;
        int capacity;
    public:
        List(int capacity);
        ~List();
        void add(int value);
        void remove(int index);
        int get(int index);
        int getSize();
        void print();
};


main()
{
    List = new List(10);

}


