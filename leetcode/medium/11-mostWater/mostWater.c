// #define min(x, y) (x < y ? x : y)

// int maxArea(int* height, int heightSize) {
//     int result = 0;
//     int left = 0;
//     int right = heightSize - 1;

//     while (left < right) {
//         int area = (right - left) * min(height[left], height[right]);
//         result = (area > result) ? area : result;

//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return result;
// }

int maxArea(int* height, int heightSize) {
    int result = 0;
    int left = 0;
    int right = heightSize - 1;

    while (left < right) {
        int min = 0;

        if (height[left] < height[right]) {
            min = height[left];
        } else {
            min = height[right];
        }

        int area = (right - left) * min;
        result = (area > result) ? area : result;

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}
