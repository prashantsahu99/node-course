const fs = require("fs");
const getNotes = () => {
  return "Your Notes...";
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(item =>{
    return (item.title === title && item.body === body);
  });

  if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
      });
      console.log('New Note Added!');
  } else{
    console.log('Note title taken!');
  }
  
  saveNotes(notes);
};

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const Ispresent = notes.filter(item=>{
        return item.title !== title; 
    });
    if(Ispresent.length === notes.length){
        console.log('Note not exist!');
    }
    else{
        saveNotes(Ispresent);
        console.log('Note Removed');
    }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = { getNotes: getNotes, addNote: addNote, removeNote: removeNote };
