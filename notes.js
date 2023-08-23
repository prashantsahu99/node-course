const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => {
  return "Your Notes...";
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((item) => {
    return item.title === title && item.body === body;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("New Note Added!");
  } else {
    console.log("Note title taken!");
  }

  saveNotes(notes);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const Ispresent = notes.filter((item) => {
    return item.title !== title;
  });
  if (Ispresent.length === notes.length) {
    console.log(chalk.bgRed.bold.inverse("No Note Found!"));
  } else {
    saveNotes(Ispresent);
    console.log(chalk.bgGreen.inverse("Note Removed"));
  }
};

const listing = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log("No Notes exist!");
  } else console.table(notes);
};

const read = (title) => {
  const notes = loadNotes();
  const readNote = notes.find((item) => {
    return item.title === title;
  });
  if (readNote) {
    console.log("Title:- " + readNote.title);
    console.log("Body:- " + readNote.body);
  } else console.log("Note not exist!");
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listing: listing,
  readNote: read,
};
