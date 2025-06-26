/** 🧩 Sliding Window — задача 3: Max Consecutive Ones III (з фліпом 0 → 1)
 📌 Умова:
 Дано масив numbers, що містить лише 0 та 1. Можна "перевернути" максимум k нулів на 1.
 Знайти найдовший підмасив, що містить лише 1 після фліпів.

 maxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0], 2) // → 6
 // Найкращий підмасив: [1,1,1,0,0,1] (фліпнули два 0)


 **/

const maxConsecutiveOnes = (numbers, k) => {
  // Максимальна довжина підмасиву, який можна отримати
  let maxValue = 0;

  // Кількість нулів, які ми вже "перевернули" на 1
  let countFlip = 0;

  // Ліва межа вікна
  let left = 0;

  // Рухаємо праву межу вікна
  for (let right = 0; right < numbers.length; right++) {
    // Якщо бачимо 0 — рахуємо його як перевернутий
    if (numbers[right] === 0) {
      countFlip++;
    }

    // Якщо кількість фліпів перевищує ліміт — зменшуємо вікно зліва
    while (countFlip > k) {
      // Якщо елемент, який прибираємо, був 0 — зменшуємо лічильник фліпів
      if (numbers[left] === 0) {
        countFlip--;
      }

      // Зсуваємо ліву межу вікна вправо
      left++;
    }

    // Оновлюємо максимальну довжину валідного вікна
    maxValue = Math.max(maxValue, right - left + 1);
  }

  return maxValue;
};

const result = maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);

console.log('result', result);
