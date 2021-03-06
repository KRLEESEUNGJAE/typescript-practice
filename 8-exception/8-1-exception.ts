// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!π©') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents π';
}

function closeFile(fileName: string) {
  //
}

// 1
// const fileName = 'file';
const fileName = 'not exist!π©';

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`cached!!`);
} finally {
  // finallyλ μλ¬κ° λ°μνλ λ°μνμ§ μλ λ¬΄μ‘°κ±΄ μ€νλ¨
  closeFile(fileName);
  console.log('finally!!!');
}
console.log('!!!');

// 2
function run() {
  const fileName = 'not exist!π©';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
