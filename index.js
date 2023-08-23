const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

const command = process.argv[2];
//customize yargs version
yargs.version("1.1.0");
// console.log(process.argv);
// add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "My description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
// list a note command
yargs.command({
  command: "list",
  describe: "Lists a note",
  handler: function () {
    notes.listing();
  },
});
//read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});
yargs.parse();
// console.log(yargs.argv);
// if(command === 'add'){
//     console.log('Adding Note!');
// }
// else if(command === 'remove'){
//     console.log('Removing Note!');
// }
