#include <iostream>
#include <vector>

int binarySearch(std::vector<int> list, int item);

int main(void)
{
    std::vector<int> myList = {1, 2, 3, 4, 5, 6, 7, 8};
    int target = 5;

    // if the target is found in the list
    if (binarySearch(myList, target) != -1)
        std::cout << "Target found at index: " << binarySearch(myList, target) << std::endl;
    else
        std::cout << "Target not found in list" << std::endl;

    return 0;
}

int binarySearch(std::vector<int> list, int item)
{
    int low = 0;                // the lowest index
    int high = list.size() - 1; // the highest index

    // while the lowest index is less than or equal to the highest index
    while (low <= high)
    {
        int mid = (low + high) / 2; // the middle index
        int guess = list[mid];      // the middle item

        // if the item is found in the list
        if (guess == item)
            return mid; // return the index of the item

        if (guess > item)
            high = mid - 1; // the highest index is now the middle index - 1
        else
            low = mid + 1; // the lowest index is now the middle index + 1
    }

    return -1;
}