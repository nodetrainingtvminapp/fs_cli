// fileCommands.js

import {
  checkIfFileExists,
  writeTextToFile,
  readDirectory,
  deleteFile,
  appendTextToFile,
} from '../services/fileService.js';

export async function handleCheckIfFileExists(fileName) {
  const result = await checkIfFileExists(fileName);
  console.log(result.message);
}

export async function handleWriteTextToFile(fileName, text) {
  const result = await writeTextToFile(fileName, text);
  console.log(result.message);
}

export async function handleReadDirectory() {
  const result = await readDirectory();
  if (result.success) {
    console.log('Directory contents:', result.files);
  } else {
    console.error(result.message);
  }
}

export async function handleDeleteFile(fileName) {
  const result = await deleteFile(fileName);
  console.log(result.message);
}

export async function handleAppendTextToFile(fileName, text) {
  const result = await appendTextToFile(fileName, text);
  console.log(result.message);
}
