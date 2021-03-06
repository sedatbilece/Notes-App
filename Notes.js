const fs =require('fs');
const chalk = require('chalk');

/**
 * 
 * @param {String} title 
 */
function readNotes(title){

    const notes = loadNotes();// get all item

    const note = notes.filter( (item)=>{
       return item.title==title;
    });

    if(note.length>0){//if title equal to notes in title
        console.log(chalk.bgMagenta("Your ",chalk.underline.bgWhite(title),"Note here : "));
        note.forEach((item)=>{
            console.log(item.body);
        });
        
    }else{
        console.log(chalk.bgRed("Note not found !!!"));
    }

     
}


function listNotes(){
    const notes = loadNotes();// get all item

    console.log(chalk.bgCyan("Your all notes  "));
     
    notes.forEach(element => {
        console.log("|Date: "+element.date+"| "+element.title);
    });
}

/**
 * 
 * @param {String} title 
 */
function removeNotes(title){
   
    const notes = loadNotes();// get all item

    const notesKeep= notes.filter(function(note){//same title find and remove with list
        return note.title != title
    });

     if(notes.length > notesKeep.length){
        saveNotes(notesKeep);//list writing to json
        console.log(chalk.bgYellow("Removing the note "));
     }else{
        console.log(chalk.bgRed("Note not found !!!"));
     }
    

}

/**
 * Add to notes.json a new note
 * @param {String} title 
 * @param {String} body 
 */
function addNotes(title, body) {
      
     const notes = loadNotes();// reading all notes
     const date= getDate();
     const duplicateNotes= notes.filter( function(note){//title equals
                return note.title === title
     })

     if(duplicateNotes.length==0){//if title not the same push the list

        notes.push({
            title:title,
            body:body,
            date:date

    
         });
    
         saveNotes(notes);//save list
         console.log(chalk.bgGreen("Adding the note "));

     }else{
        console.log(chalk.bgRed("Note title taken !!! "));
     }

     

}
function loadNotes() {// Get all notes 

    try {
        const buffer = fs.readFileSync('notes.json');
        const dataJson = buffer.toString();
        return JSON.parse(dataJson);

    } catch (e) {
        return [];
    }


}
/**
 * 
 * @param {Array} notes 
 */
function saveNotes(notes){// Write to json with notes(list)
   
     const dataJson=JSON.stringify(notes);
     fs.writeFileSync('notes.json',dataJson);

}


/**
 * 
 * @returns  "dd/mm/yyyy DayName" (String)
 */
 function getDate() {


    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let day = today.getDay();// Get day name
    let Week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const formattedToday = dd + '/' + mm + '/' + yyyy + " " + Week[day];

    return formattedToday;

    
}



module.exports = {
    listNotes:listNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    readNotes:readNotes

}