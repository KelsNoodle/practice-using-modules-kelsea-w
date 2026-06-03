//node_modules are where any installed NPM package is downloaded to. 
// This should be excluded with gitignore because the dependencies 
// are already listed in the package.json, allowing anyone to install 
// the dependencies themselves, greatly reducing your source code's size. 
// The npm install command allows other developers to install what's
// listed in the package.json, which is why we do not need to include node_modules in our repository.



import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';


const weather = {
    "los angeles": `The weather in Los Angeles is ${chalk.yellow.bold("77")} and ${chalk.grey("partly cloudy")}!`,
    "chicago": `The weather in Chicago is ${chalk.green.bold("61")} and ${chalk.grey("partly cloudy")}!`,
    "st. louis": `The weather in St. Louis is ${chalk.bold.red("84")} and ${chalk.yellow("sunny")}!`,
    "denver": `The weather in Denver is ${chalk.bold.yellow("78")} and ${chalk.grey("mostly cloudy")}!`,
    "seattle": `The weather in Seattle is ${chalk.bold.green("69")} and ${chalk.blue("rainy")}! `,
    "houston": `The weather in Houston is ${chalk.bold.yellow("74")} and ${chalk.yellowBright("stormy")}! `,
    "new york": `The weather in New York is ${chalk.bold.green("63")} and ${chalk.green("clear")}!`

}

const argv = yargs(hideBin(process.argv)).argv
const city = argv.city || "Unknwon City";
console.log(weather[city.toLowerCase()]);
