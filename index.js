// Mapping a javascript Array

const pepole = [
  { id: 1, first_name: "Ajith", last_name: "kumar" },
  { id: 2, first_name: "Anbu", last_name: "Selvan" },
  { id: 3, first_name: "Trisha", last_name: "Grace" },
  { id: 4, first_name: "Seetha", last_name: "Raman" },
];

let final = pepole.map((val) => {
    let fullName = [val.id , val.first_name, val.last_name].join(" ");
    let obj = { id: val.id , fullName}
    return obj;
});
console.log(final);
