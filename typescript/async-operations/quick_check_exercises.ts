// Run the file with the command:
// npx ts-node typescript/async-operations/quick_check_exercises.ts
// npx tsx typescript/async-operations/quick_check_exercises.ts

// =============================================================
// Quick Check: predict the output!
// =============================================================

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- Quiz 1 -----------------------------------------------------
async function quiz1(): Promise<void> {
  console.log('--- Quiz 1 ---');
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  await Promise.resolve();
  console.log('3');
  await delay(10);
  console.log('4');
}

// --- Quiz 2 -----------------------------------------------------
async function quiz2(): Promise<void> {
  console.log('\n--- Quiz 2 ---');
  const slow = delay(300).then(() => console.log('slow'));
  const fast = delay(100).then(() => console.log('fast'));
  console.log('started');
  await slow;
  console.log('after slow');
  await fast;
  console.log('after fast');
}

// --- Quiz 3 -----------------------------------------------------
async function quiz3(): Promise<void> {
  console.log('\n--- Quiz 3 ---');
  try {
    console.log('A');
    await Promise.reject(new Error('boom'));
    console.log('B');
  } catch {
    console.log('C');
  } finally {
    console.log('D');
  }
  console.log('E');
}

// --- Quiz 4: find the bug --------------------------------------
// This function is supposed to print "Total: 30", but it prints
// "Total: [object Promise]10". Why? How do you fix it?
async function getPrice(): Promise<number> {
  await delay(50);
  return 20;
}

async function quiz4(): Promise<void> {
  console.log('\n--- Quiz 4 ---');
  const price = getPrice(); // 🐞 bug is on this line
  console.log('Total: ' + price + 10);
}

async function main(): Promise<void> {
  await quiz1();
  await quiz2();
  await quiz3();
  await quiz4();
}

main();
