#define min(x, y) (x < y ? x : y)

int maxArea(int* height, int heightSize) {
    int result = 0;
    int left = 0;
    int right = heightSize - 1;

    while (left < right) {
        int area = (right - left) * min(height[left], height[right]);
        result = (area > result) ? area : result;

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}