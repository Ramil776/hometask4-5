function printWithDashes(name) {
    console.log("_______");
    console.log(name);
    console.log("_______");
}
    
    
    

const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];


function printWithHearts(name) {
    const hearts = "<3".repeat(7); 
    console.log(hearts, name ,hearts);
}


function printWithIndex(name, index) {
    console.log(index + "-" + name);
}


names.forEach(printWithDashes)
names.forEach(printWithHearts);
names.forEach(printWithIndex);