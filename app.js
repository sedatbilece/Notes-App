
const chalk = require('chalk');
const  yargs  = require('yargs');


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
    
    handler:function(argv){
        console.log('Title:',argv.title);
        console.log('Body:',argv.body);
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

    handler: function (argv) {
        
    }
})

//  GET ALL
yargs.command({
    command:'list',
    describe:'List your  notes',
    handler:function(){
        console.log(chalk.bgCyan("Listing all notes  "));
    }
})

// GET 
yargs.command({
    command:'read',
    describe:'Read your  note',
    handler:function(){
        console.log(chalk.bgMagenta("Reading the note  "));
    }
})

//console.log(yargs.argv);

yargs.parse();