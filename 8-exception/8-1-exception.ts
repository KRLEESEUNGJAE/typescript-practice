// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!💩') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents 📑';
}

function closeFile(fileName: string) {
  //
}

// 1
// const fileName = 'file';
const fileName = 'not exist!💩';

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`cached!!`);
} finally {
  // finally는 에러가 발생하던 발생하지 않던 무조건 실행됨
  closeFile(fileName);
  console.log('finally!!!');
}
console.log('!!!');

// 2
function run() {
  const fileName = 'not exist!💩';

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
