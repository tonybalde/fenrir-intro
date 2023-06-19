
const today = new Date();
let thisYear = today.getFullYear(); // output: "2023"

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

copyright.innerHTML='Tony Baldessari © ' + thisYear;

footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript", "Git", "Github", "Linux"];

let skillSection = document.querySelector("#skills");

let skillList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerHTML= skills[i];
    skillList.appendChild(skill);
}