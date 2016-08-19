import fs from 'fs';
import chai from 'chai';
import { LineToLine } from '../src/LineToLine'

let expect = chai.expect;

describe('Tests LineToLine class', () => {
  describe('Reading file line by line', () => {

    it('must emit event close', (done) => {
      let readline = new LineToLine(fs.createReadStream('./test/fixtures/MOCK_DATA.csv'));
      readline.on('close', () => {
        done();
      });
    });

    it('should to return line', (done) => {
      let readline = new LineToLine(fs.createReadStream('./test/fixtures/MOCK_DATA.csv'));
      readline.on('line', (line) => {
        expect(line).to.exist;
      });
      readline.on('close', () => done());
    });

    it('should return the row count', (done) => {
      let readline = new LineToLine(fs.createReadStream('./test/fixtures/MOCK_DATA.csv'));
      readline.on('line', (line, lineCount) => {
        expect(lineCount).to.exist;
      });
      readline.on('close', () => done());
    });

    it('should return the count of bytes read', (done) => {
      let readline = new LineToLine(fs.createReadStream('./test/fixtures/MOCK_DATA.csv'));
      readline.on('line', (line, lineCount, bytesCount) => {
        expect(bytesCount).to.exist;
      });
      readline.on('close', () => done());
    });
  });
});
