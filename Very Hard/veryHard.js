class person {
  constructor(name, job, age) {
    this.excercise = (p) => console.log(p);
    this.fetchJob = () => console.log(`${name} is a ${job}`);
  }
}

class programmer {
  constructor(name, job, age, languages, busy = true) {
    this.completeTask = () => (busy = false);
    this.acceptNewTask = () => (busy = true);
    this.offerNewTask = () => {
      busy === true
        ? console.log(`${name} can't accept ant new tasks right now.`)
        : console.log(`${name} would love to take on a new responsibility.`);
    };
    this.learnLanguage = (ln) => languages.push(ln);
    this.listLanguages = () => console.log(languages);
  }
}
const elijah = new programmer("Elijah", "Coding Wizard", 22, [
  "HTML",
  "CSS",
  "JavaScript",
]);

elijah.completeTask();
elijah.offerNewTask();
elijah.learnLanguage("Latin");
elijah.listLanguages();

const erebus = new programmer("Erebus", "Adventurer", 24, [
  "Elvish",
  "Latin",
  "Dwarvish",
]);

erebus.completeTask();
erebus.offerNewTask();
erebus.learnLanguage("Korean");
erebus.listLanguages();

const jamie = new programmer(
  "Jamie",
  "Director of the Magic Society, American Branch",
  32,
  ["Array Magic", "Runic", "Arithmancy"]
);

jamie.completeTask();
jamie.offerNewTask();
jamie.learnLanguage("Celestial");
jamie.listLanguages();
