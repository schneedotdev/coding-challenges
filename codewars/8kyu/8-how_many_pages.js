/**
 * Name: How many pages in a book?
 * Description: Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers. Task: Given the summary, find the number of pages n the book has. If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
 */

function amountOfPages(summary) {
    let nums = [];
    let str = '';

    while (str.length !== summary) {
        str += nums.length + 1;
        nums.push(nums.length + 1);
    }

    return nums[nums.length - 1];
}