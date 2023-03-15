process.stdout.write('abcdefg good hello from spinner1.js... \rheyyy\n');

let spinner = ["|","/","-","\\"];
let timer = -100;

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
    if (i === 3) {
      console.log(" ");
    }
  }, timer += 200);
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
//   console.log(" ");
// }, 700);
