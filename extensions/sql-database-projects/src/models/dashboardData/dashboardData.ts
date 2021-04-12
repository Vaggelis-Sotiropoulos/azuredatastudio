/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class DashboardData {
	public projectFile: string;
	public status: Status;
	public target: string;
	public timeToCompleteAction: string;
	public startDate: string;

	constructor(projectFile: string, status: Status, target: string, startDate: string) {
		this.projectFile = projectFile;
		this.status = status;
		this.target = target;
		this.timeToCompleteAction = '';
		this.startDate = startDate;
	}
}

export enum Status {
	success,
	failed,
	inProgress
}
