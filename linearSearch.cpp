#include <iostream>
#include <vector>

int linearSearch(std::vector<int> list, int item);

int main(void)
{
    std::vector<int> myList = {1, 2, 3, 4, 5, 6, 7, 8};
    int target = 5;

    // if the target is found in the list
    if (linearSearch(myList, target) != -1)
        std::cout << "Target found at index: " << linearSearch(myList, target) << std::endl;
    else
        std::cout << "Target not found in list" << std::endl;

    return 0;
}

int linearSearch(std::vector<int> list, int item)
{
    for (size_t i = 0; i < list.size(); i++)
    {
        // if the item is found in the list
        if (list[i] == item)
            return i; // return the index of the item
    }

    return -1;
}