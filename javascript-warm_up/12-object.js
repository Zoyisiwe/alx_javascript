let lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("value:12")) {
    lines[i] = lines[i].replace("value:12", "value:89");
  }
  console.log(lines[i]);
}

