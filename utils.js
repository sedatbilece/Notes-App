
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function(){
        console.log(chalk.bgGreen("Adding a new note  "));
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a  note',

    builder: {

        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }

    },

    handler: function (argv) {
        console.log(chalk.bgRed("Removing the note  "));
        console.log(argv);
    }
})

yargs.command({
    command:'list',
    describe:'List your  notes',
    handler:function(){
        console.log(chalk.bgCyan("Listing all notes  "));
    }
})

yargs.command({
    command:'read',
    describe:'Read your  note',
    handler:function(){
        console.log(chalk.bgMagenta("Reading the note  "));
    }
})