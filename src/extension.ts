// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { createSearchForm } from './form'

// handler for command: wx command
function wxCommandHander(type: string,e: vscode.Uri) {
	const stat = fs.statSync(e.fsPath);
	console.log(stat, stat.isDirectory(), e)
	// fixed bug in windows
	// https://github.com/diveDylan/vs-wx-command/issues/1
	const dir = path.normalize(e.fsPath);
	
	if (stat.isDirectory()) {
		
	} else {
		fs.readFile(e.fsPath,'utf8', (err, fileData) => {
			const json = JSON.parse(fileData)
			const pathList = e.fsPath.split('/')
			pathList.pop()
			createSearchForm(pathList.join('/'), json.form)
		})
	}
}



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "wx" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.useList', async (e: vscode.Uri) => {
		// The code you place here will be executed every time your command is executed
		wxCommandHander('useList', e);
			// Display a message box to the user
		
		// console.log('page');
		
	
	});

	context.subscriptions.push(disposable);
	disposable = vscode.commands.registerCommand('extension.wxComponents', (e: vscode.Uri) => {
		// The code you place here will be executed every time your command is executed
		wxCommandHander('components', e);
		// Display a message box to the user
	});
	context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
export function deactivate() {}
