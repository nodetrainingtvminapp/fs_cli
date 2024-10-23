import { promises as fs } from 'node:fs';
import path from 'node:path';

// Service to check if a file exists
export async function checkIfFileExists(fileName) {
  try {
    const filePath = path.join(process.cwd(), 'files', fileName); // Process current working directory
    await fs.access(filePath);
    return { exists: true, message: `File "${fileName}" exists.` };
  } catch {
    return { exists: false, message: `File "${fileName}" does not exist.` };
  }
}

// Service to write text to a file
export async function writeTextToFile(fileName, text) {
  try {
    const filePath = path.join(process.cwd(), 'files', fileName);
    await fs.writeFile(filePath, text);
    return {
      success: true,
      message: `File "${fileName}" has been written successfully.`,
    };
  } catch (error) {
    throw new Error(`Error writing to file: ${error.message}`);
  }
}

// Service to read directory contents
export async function readDirectory() {
  try {
    const dirPath = path.join(process.cwd(), 'files');
    const files = await fs.readdir(dirPath);
    return { success: true, files };
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
}

// Service to delete a file
export async function deleteFile(fileName) {
  try {
    const filePath = path.join(process.cwd(), 'files', fileName);
    await fs.unlink(filePath);
    return { success: true, message: `File "${fileName}" has been deleted.` };
  } catch (error) {
    throw new Error(`Error deleting file: ${error.message}`);
  }
}

// Service to append text to a file
export async function appendTextToFile(fileName, text) {
  try {
    const filePath = path.join(process.cwd(), 'files', fileName);
    await fs.appendFile(filePath, text);
    return { success: true, message: `Text appended to file "${fileName}".` };
  } catch (error) {
    throw new Error(`Error appending text: ${error.message}`);
  }
}
