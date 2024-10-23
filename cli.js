import {
  handleCheckIfFileExists,
  handleWriteTextToFile,
  handleReadDirectory,
  handleDeleteFile,
  handleAppendTextToFile,
} from './commands/fileCommands.js';

// Command-line arguments
const args = process.argv.slice(2);

// Show usage if no arguments are provided
if (args.length === 0) {
  console.log('Usage: cli.js <command> <args>\n');
  console.log('Commands:');
  console.log('  exists <filename>            - Check if a file exists');
  console.log('  write <filename> <text>      - Write text to a file');
  console.log('  list                         - List files in the directory');
  console.log('  delete <filename>            - Delete a file');
  console.log('  append <filename> <text>     - Append text to a file');
  process.exit(1);
}

// Parse commands
const command = args[0];
switch (command) {
  case 'exists':
    handleCheckIfFileExists(args[1]);
    break;
  case 'write':
    handleWriteTextToFile(args[1], args.slice(2).join(' '));
    break;
  case 'list':
    handleReadDirectory();
    break;
  case 'delete':
    handleDeleteFile(args[1]);
    break;
  case 'append':
    handleAppendTextToFile(args[1], args.slice(2).join(' '));
    break;
  default:
    console.error(
      'Unknown command. Use "exists", "write", "list", "delete", or "append".'
    );
    break;
}



