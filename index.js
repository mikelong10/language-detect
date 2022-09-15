import { setDefaultResultOrder } from 'dns';
import { franc, francAll } from 'franc';

// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const langs = require('langs');
const colors = require("colors")

const input = process.argv[2];
const lang = franc(input);

if (lang === "und" || langs.where("3", lang) === undefined) {
  console.log("I'm dog water, I couldn't tell what language that was.".red)
} else {
  const guess = langs.where("3", lang);
  console.log(`Best guess: ${guess.name.green}`);
}