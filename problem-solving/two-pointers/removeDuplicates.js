/** 🧩 Two Pointers — задача 3: Remove Duplicates from Sorted Array
 📌 Умова:
 Дано відсортований масив nums. Потрібно in-place видалити дублікати, так щоб залишити лише унікальні елементи. Повернути нову довжину.
 Додаткову пам’ять не використовуємо.


 removeDuplicates([1,1,2]) → 2 → [1,2,_]
 removeDuplicates([0,0,1,1,1,2,2,3,3,4]) → 5 → [0,1,2,3,4,_,_,_,_,_]


 **/
function removeDuplicates(nums) {
  let left = 0; // Вказівник для "унікальної частини"
  let right = 1; // Вказівник для сканування

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      // Знайшли новий унікальний елемент
      left++; // Готуємо місце для нього
      nums[left] = nums[right]; // Записуємо його
    }
    right++; // Продовжуємо сканування
  }

  return left + 1; // Довжина унікальної частини
}

console.log(removeDuplicates([1, 1, 2]));
/**
 Input: nums = [1,1,2]
 Output: 2 // бо масив стає [1,2,_]

 **/

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/**
 Input: nums = [0,0,1,1,1,2,2,3,3,4]
 Output: 5 // бо масив стає [0,1,2,3,4,_,_,_,_,_]

 **/
