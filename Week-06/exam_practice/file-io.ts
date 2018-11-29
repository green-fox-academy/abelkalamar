import fs from 'fs';

export default class FileIo {

  static readFile(fileName): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
      console.log('Cannot read file!');
      return null;
    }
  }

  static writeFile(fileName: string, content: string): void {
    if (fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, content);
    } else {
      console.log('File does not exist!');
    }
  }

  static appendFile(fileName: string, content: string): void {
    if (fs.existsSync(fileName)) {
      fs.appendFileSync(fileName, content);
    } else {
      console.log('File does not exist!');
    }
  }
}