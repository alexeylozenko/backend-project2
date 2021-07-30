import genDiff from "../src/gendiff";

import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { file } from "@babel/types";
import { expect, test } from "@jest/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturesPath(filename), 'utf-8');

describe('stylish', () => {

	test('flat json', () => {
		const filename1 = getFixturesPath('flat-tree1.json');
		const filename2 = getFixturesPath('flat-tree2.json');
		const result = readFile('flat-stylish.txt');
		expect(genDiff(filename1, filename2)).toBe(result);
	});

	test('nested json', () => {
		const filename1 = getFixturesPath('nested-tree1.json');
		const filename2 = getFixturesPath('nested-tree2.json');
		const result = readFile('nested-stylish.txt');
		expect(genDiff(filename1, filename2)).toBe(result);
	})

	test('flat yaml', () => {
		const filename1 = getFixturesPath('flat-tree1.yaml');
		const filename2 = getFixturesPath('flat-tree2.yml');
		const result = readFile('flat-stylish.txt');
		expect(genDiff(filename1, filename2)).toBe(result);
	});

	test('nested yaml', () => {
		const filename1 = getFixturesPath('nested-tree1.yaml');
		const filename2 = getFixturesPath('nested-tree2.yml');
		const result = readFile('nested-stylish.txt');
		expect(genDiff(filename1, filename2)).toBe(result);
	})

});

describe('plain', () => {

	test('flat json', () => {
		const filename1 = getFixturesPath('flat-tree1.json');
		const filename2 = getFixturesPath('flat-tree2.json');
		const result = readFile('flat-plain.txt');
		expect(genDiff(filename1, filename2, 'plain')).toBe(result);
	});

	test('nested json', () => {
		const filename1 = getFixturesPath('nested-tree1.json');
		const filename2 = getFixturesPath('nested-tree2.json');
		const result = readFile('nested-plain.txt');
		expect(genDiff(filename1, filename2, 'plain')).toBe(result);
	});

	test('flat yaml', () => {
		const filename1 = getFixturesPath('flat-tree1.yaml');
		const filename2 = getFixturesPath('flat-tree2.yml');
		const result = readFile('flat-plain.txt');
		expect(genDiff(filename1, filename2, 'plain')).toBe(result);
	});

	test('nested yaml', () => {
		const filename1 = getFixturesPath('nested-tree1.yaml');
		const filename2 = getFixturesPath('nested-tree2.yml');
		const result = readFile('nested-plain.txt');
		expect(genDiff(filename1, filename2, 'plain')).toBe(result);
	})

});

describe('json', () => {
	
	test('flat json', () => {
		const filename1 = getFixturesPath('flat-tree1.json');
		const filename2 = getFixturesPath('flat-tree2.json');
		const result = readFile('flat-json.txt');
		expect(genDiff(filename1, filename2, 'json')).toBe(result);
	});

	test('nested json', () => {
		const filename1 = getFixturesPath('nested-tree1.json');
		const filename2 = getFixturesPath('nested-tree2.json');
		const result = readFile('nested-json.txt');
		expect(genDiff(filename1, filename2, 'json')).toBe(result);
	});

	test('flat yaml', () => {
		const filename1 = getFixturesPath('flat-tree1.yaml');
		const filename2 = getFixturesPath('flat-tree2.yml');
		const result = readFile('flat-json.txt');
		expect(genDiff(filename1, filename2, 'json')).toBe(result);
	});

	test('nested yaml', () => {
		const filename1 = getFixturesPath('nested-tree1.yaml');
		const filename2 = getFixturesPath('nested-tree2.yml');
		const result = readFile('nested-json.txt');
		expect(genDiff(filename1, filename2, 'json')).toBe(result);
	});

});
