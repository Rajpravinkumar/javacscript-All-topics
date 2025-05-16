const user = {
    name: "anbu",
    getFullName() {
        console.log(`Hi My Name is ${this.name}`);
        
    }
}



for(let key in user){
    console.log(key, user[key]);
    
}

for (let key of Object.keys(user)) {
    console.log(key);
    
}

for (let entry of Object.entries(user)) {
    console.log(entry);
    
} 

if ("name" in user) {
    console.log("Yes!");
    
}