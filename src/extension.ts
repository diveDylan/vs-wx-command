// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { files } from './files';

const { page, components } = files('index');
const fileTypes: Array<string> = [ 'js', 'wxss', 'wxml', 'json' ];
// handler for command: wx command
function wxCommandHander(type: string,e: vscode.Uri) {
	const stat = fs.statSync(e.fsPath);
	// fixed bug in windows
	// https://github.com/diveDylan/vs-wx-command/issues/1
	const dir = path.normalize(e.fsPath);
	
	if (stat.isDirectory()) {
		try {
			fileTypes.map(async(i: string) => {
				const data =  new Uint8Array(Buffer.from( type === 'page' ? page[i] : components[i]));
				fs.writeFileSync(`${dir}/index.${i}`, data);
			});
			vscode.window.showInformationMessage(`create ${type} success!`);
		} catch (error) {
			vscode.window.showErrorMessage('create page files failed');
		}
	} else {
		vscode.window.showErrorMessage('please choose a folder');
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
	let disposable = vscode.commands.registerCommand('extension.wxPage', async (e: vscode.Uri) => {
		// The code you place here will be executed every time your command is executed
		wxCommandHander('page', e);
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
