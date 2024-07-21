#!/usr/bin/env node

import inquirer from "inquirer";

class Person {
  private personality: string;

  constructor() {
    this.personality = "Mystery";
  }

  public async askQuestion(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "quietOrSpeak",
        message: "You are in a group discussion. Do you prefer to:",
        choices: ["Stay quiet", "Speak up"],
      },
      {
        type: "list",
        name: "goOutOrStay",
        message: "It's the weekend. Do you prefer to:",
        choices: ["Go out with friends", "Stay at home"],
      },
    ]);

    const isQuiet = answers.quietOrSpeak === "Stay quiet";
    const isStayAtHome = answers.goOutOrStay === "Stay at home";

    if (isQuiet && isStayAtHome) {
      this.personality = "Introvert";
    } else {
      this.personality = "Extrovert";
    }
  }

  public getPersonality(): string {
    return this.personality;
  }
}

// Example usage
async function main() {
  const person = new Person();
  await person.askQuestion();
  console.log("Personality:", person.getPersonality());
}

main();