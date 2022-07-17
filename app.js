

const  yargs  = require('yargs');
const notes =require('./Notes.js');

//    CREATE
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {

        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:'string'
        },

        

    },
    
    handler:function(argv){// calling add notes func on here
        
        notes.addNotes(argv.title,argv.body);
    }
})


// DELETE
yargs.command({
    command: 'remove',
    describe: 'Remove a  note',

    builder: {

        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        

    },

    handler: function (argv) {// calling remove notes func on here
        notes.removeNotes(argv.title);
    }
})

//  GET ALL
yargs.command({
    command:'list',
    describe:'List your  notes',
    handler:function(){
        notes.listNotes();
    }
})

// GET 
yargs.command({
    command:'read',
    describe:'Read your  note',
    builder: {

        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        

    },
    handler:function(argv){
        notes.readNotes(argv.title)
    }
})

//console.log(yargs.argv);

yargs.parse();