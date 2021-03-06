export class EventList {
  type: string;
  name: string;
  eventDate: string;
  message: string;
  file: string;
  ifSee: boolean;
  appShow: boolean;
  caseId: string;
}

export class CreateNewCase {
  custno: string;
  servItem: string;
  caseTitle: string;
  caseSubtitle: string;
  appShow: boolean;
  ofContact: string;
  custContact: string;
}

export class CreateNewEvent {
  custno: string;
  eventServItem: string;
  eventTitle: string;
  eventSubtitle: string;
  appShow: boolean;
  caseId: string;
}

export class Participant {
  name: string;
  id: string;
  caseId?: string;
  eventId?: string;
}

export class FileUpload {
  fileName: string;
  fileType: string;
  caseId?: string;
  eventId?: string;
  ifFinial: boolean;
  file?: File;
}

export class CreateMeeting {
  name: string;
  location: string;
  date: string;
  time: string;
  caseId?: string;
  eventId?: string;
  notify: boolean;
  dateFormat: string;
}

export class CreateMessage {
	message: string;
	file?: File;
	fileName?: string;
	fileType?: string;
	caseId: string;
	eventId: string;
}

export class SearchProject {
  division: string;
  dpt: string;
  empno: string;
  caseTitle: string;
  eventTitle: string;
  dateTime1: string;
  dateTime2: string;
  caseType: string;
  cstatus: string;
  custno: string;
  date?: string;
}

export const InitialF318: CaseScreening = {
	BuyList: [],
	RepairList: []
};

export class CaseScreening {
	BuyList: ScreeningList[];
	RepairList: ScreeningList[];
	buyDone?: number;
	buyDoneThisMonth?: number;
	buyIngNum?: number;
	repairDone?: number;
	repairDoneThisMonth?: number;
	repairIngNum?: number;
	repairCreateNum?: number;
}

export class ScreeningList {
	caseTitle: string;
	custName: string;
	custContact: string;
	status: string;
	servItems: string;
	ofContact: string;
	begintime: string;
	caseId: string;
	newEvent: boolean;
}

export class CaseScreeningIn {
	division: string;
	dpt: string;
	empno: string;
	caseTitle: string;
	eventTitle: string;
	dateTime1: string;
	dateTime2: string;
	caseType: string;
	cstatus: string;
	custno: string;
	Buystatus: string[];
	Repairstatus: string[];
}

export class InsertCaseIn {
	custno: string;
	servItems: string;
	caseTitle: string;
	caseSubtitle: string;
	appShow: boolean;
	ofContact: string;
	custContact: string;
	caseType?: string;
}
export class Response {
	Code: number;
	Result: string;
}

export class CustInfoIn {
	custNo: string;
	custName: string;
}

export const InitialF325: CustInfo = { custList: [] };
export class CustInfo {
	custList: CustList[];
}

export class CustList {
	custNo: string;
	custName: string;
	custNoName: string;
	SD712List: any[];
}
export const InitialGetDivDptEmp: GetDivisionDptEmpno[] = [];
export class GetDivisionDptEmpno {
	DIVISION_ID: string;
	DIVISION_NAME: string;
	DptList: DptList[];
}

export class DptList {
	DIVISION_ID: string;
	DPT_ID: string;
	DPT_NAME: string;
	EmpnoList: EmpnoList[];

}

export class EmpnoList {
	DPT_ID: string;
	EMPNO_ID: string;
	EMPNO_NAME: string;
}


export const InitialF324: CustContactList = { SD712List: [] };
export class CustContactList {
	SD712List: SD712List[];
}

export class SD712List {
	loginToken: string;
	contactName: string;
	cno: number;
	joinStatus: string;
}

export class EventTypeIn {
	caseId: string;
}

export class EventType {

}

// export class CaseContent {
// 	caseName: string;
// 	caseNo: string;
// 	caseDescription: string;
// 	caseType: string;
// 	caseStatus: string;
// 	showApp: boolean;
// 	caseOfContact: string;
// 	caseCusCOntact: string;
// 	outterGroup: Participate[];
// 	innerGroup: Participate[];
// 	EventList: Event[];
// 	FIleList: FIle[];
// 	InvoiceList: Invoice[];
// 	purchaseList: FIle[];
// }

// export class Participate {
// 	name: string;
// 	Id: string;
// }

// export class Event {
// 	showApp: boolean;
// 	ifNew: boolean;
// 	EventType: string;
// 	EventDescription: string;
// 	newerMeeting: string;
// 	newerMessage: string;
// 	newerFile: string;
// 	EventId: string;
// }

// export class FIle {
// 	fileName: string;
// 	fileDescription: string;
// 	file: File;
// 	fileType: string;
// }

// export class Invoice {
// 	invoiceName: string;
// 	invoiceDate: string;
// 	invoiceMoney: string;
// 	invoiceType: string;
// }

export class CaseId {
	caseId: string;
	ExceptionMessage?: string;
}

export class F306CaseEdit {
	caseId: string;
	title: string;
	subtitle: string;
	status: string;
	ctno: string;
	caseBeginTime: string;
	caseEndTime: string;
	servEmpName: string;
	servTel: string;
	// ??????????????????
}

export class F309Input {
	page: string; // ?????????
	caseId: string;
	eventTypeList: string[]; // ?????????
}

export class F309OutputFileList {
	totalPage: string;
	page: string;
	fileList: FileList[];
}

export class FileList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
	uploadMan: string;
	uploadDate: string;
	signStatus: string;
	eventId: number;
	eventNameList: EventNameList[];
}

export class EventNameList {
	eventName: string;
	eventType: string;
}

export class F310OutputPurchaseList {
	buyInformationList: BuyInformationList[];
}

export class BuyInformationList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
}


export const InitialF328 = <F328OutputCaseContent>{
	caseId: '', caseType: '', title: '', subtitle: '', status: '', ctno: ''
	, caseBeginTime: '', caseEndTime: '', servEmpName: '', servItemName: '', servItems: '', custName: '', custno: ''
	, appShow: false, ofContactList: [], custContactList: [], eventName: []
};


export class F328OutputCaseContent {
	caseId: string;
	caseType: string;
	title: string;
	subtitle: string;
	status: string;
	ctno: string;
	caseBeginTime: string;
	caseEndTime: string;
	servEmpName: string;
	servItemName: string;
	servItems: string;
	custName: string;
	custno: string;
	appShow: boolean;
	ofContactList: F328OfContactList[];
	custContactList: F328CustContactList[];
	eventName: EventName[];
	srno: any;
	takeCaseShow: boolean;
	insertEvent: boolean;
}

export class F328OfContactList {
	name: string;
	empno: string;
	cno: string;
	contact: boolean;
	readOnly: boolean;
}

export class F328CustContactList {
	name: string;
	loginToken: string;
	cno: string;
	contact: boolean;
	readOnly: boolean;
}

export class EventName {
	eventName: string;
}

export const InitialF327 = <F327OutputEventList>{
	eventList: []
};

export class F327OutputEventList {
	eventList: E327EventList[];
}
export class E327EventList {
  appShow: boolean;
  eventId: string;
  eventName: string;
  title: string;
  meetingBeginTime: Date;
  meetingEndTime: Date;
  messageContent: string;
  newMessage: string;
  fileName: string;
}

export const InitialF309 = <F309Output>{
  totalPage: 0, page: 0, fileList: []
};
export class F309Output {
  totalPage: number;
  page: number;
  fileList: F309FileList[];
}

export class F309FileList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
	uploadMan: string;
	uploadDate: string;
	signStatus: string;
	eventId: string;
	eventNameList: F309EventNameList;
	eventTitle: string;
}

export class F309EventNameList {
	eventName: string;
	eventType: string;
}

export const InitialF301 = <F301OutputInvoiceList>{
	totalPage: 0, page: 0, invoiceList: []
};


export class F301OutputInvoiceList {
	totalPage: number;
	page: number;
	invoiceList: InvoiceList[];
}

export class F301Input {
	ctno: string;
	custno?: string;
}

export class InvoiceList {
	invoiceId: string;
	invoiceNo: string;
	invoiceYear: string;
	invoiceDate: string;
	invoiceAmount: number;
	payDate: string;
	payStatus: string;
	itemsText: string;
}

export const InitialF310 = <F310OutputbuyInformationList>{
	buyInformationList: []
};
export class F310OutputbuyInformationList {
	buyInformationList: F310BuyInformationList[];
}

export class F310BuyInformationList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
}

export class F325Input {
	custNo: string;
	custName: string;
}

export class F325OutputCustList {
	custList: F325CustList[];
}

export class F325CustList {
	custNo: string;
	custName: string;
}

export class F323Input {
	caseId: string;
	eventId: string; // ???????????????????????????
	action: string; // U ????????? D?????????
	fileList: F323FileList[];
}

export class F323FileList {
	fileName: string;
	extension: string;
	file: any;
	signBool: boolean;
	signStatus: string;
	fileId: string;
}
export class F323Output {
	caseId: string;
}

// [F320] ??????????????????????????????(?????????)
export class F320Input {
	caseId: string;
	servItems: string;
	caseTitle: string;
	caseSubtitle: string;
	appShow: boolean;
	custonName?: string;
	servEmpName?: string;
	SD701List: any[]; // ??????
	SD702List: any[]; // ??????
	caseType: string;
	custno: string;
	ctno: string;
}

export class F320SD711List {
	contact: any; // ??????????????????????????????????????????M
	empName: string;
	empNo: string;
}

export class F320SD712List {
	contact: any; // ??????????????????????????????????????????M
	loginToken: string;
	contactName: string;
	cno: string;
}

export class F320Output {
	caseId: string;
}

export class F311Input {
	caseId: string;
	eventId: number;
}

export class F311Output {
	meetingYN: boolean;
	subject: string;
	beginTime: string;
	endTime: string;
	location: string;
	meetingMoreYN: boolean;
	eventmemo: string;
	eventTitle: string;
	appShow: boolean;
	messageStatus: string; // Y: ????????? N: ???????????????
	participantList: F311participantList[];
}

export class F311participantList {
	name: string;
}

export class F311eventNameList {
	eventName: string;
}

export class F311fileList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
	signStatus: string; // N ??????????????? D????????? Y ?????????
}

// F312 ????????????
export const InitialF312 = <F312OutputMeetingList>{ meetingList: [] };

export class F312InputMeetingList {
	caseId: string;
	eventId: string;
}

export class F312OutputMeetingList {
	meetingList: MeetingList[];
}
// ??????????????????????????????
export class MeetingList {
	subject: string;
	beginTime: string;
	endTime: string;
	location: string;
	thisTime: string;
	meetingBegTime: string;
	meetingEndTime: string;
}
// ?????????????????????
export class F313Input {
	caseId: string;
	eventId: string;
}
// F313 ?????????????????????
export const InitialF313 = <F313OutputMessageList>{ messageList: [] };
export class F313OutputMessageList {
	messageList: F313MessageList[];
}

export class F313MessageList {
	messageId: number;
	messageMan: string;
	manPicUrl: string;
	messageTime: string;
	messageContent: string;
	messageDel: boolean;
	delYNL: boolean;
	myselfYN: boolean;
	fileList: F313FileList[];
}

export class F313FileList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
}
// F314 ??????/???????????? ??????????????????
export class F314Input {
	caseId: string;
	eventId: string;
	action: string; // I:???????????? D:???????????? S:????????????????????????
	messageId: number;
	messageContent: string;
	fileList: F314FileList[];
}

export class F314FileList {
	file: string;
	fileId: string;
	fileName: string;
	extension: string;
}

export class F314Output {
	alertMessage: string;
}
// F321 ??????/????????????
export class F321AddEditEventInput {
	caseId: string;
	eventId: string; // if empty add
	action: string; // I:????????????????????????eventId?????? UF:?????????????????? UI:??????/????????????????????? UO:??????/?????????????????????
	eventType: string; // A : ???????????? B : ????????? C : ?????? D : ?????? E : ?????? Z : ?????? // 20201228 ????????????????????? ??????????????????
	appShow: boolean;
	messageStatus: string; // Y: ????????? N: ???????????????
	notifyYN: string;
	eventTitle: string;
	eventmemo: string;
	SD711List: F328OfContactList[];
	SD712List: F328CustContactList[];
}

export class F321SD711List {
	empName: string;
	empNo: string;
	cno: number;
}

export class F321SD712List {
	loginToken: string;
	contactName: string;
	cno: number;
}

export class F321Oupout {
	caseId: string;
}
// F322 ??????/????????????
export class F322AddEditMeetingInput {
	caseId: string;
	eventId: string;
	meetingTitle: string;
	address: string;
	isAllDay: boolean;
	meetingDate: string;
	canlandar: string[];
	beginTime: string;
	endTime: string;
	remindTime: string; // 0,5,15,30,60
	content: string;
}

export class F322Output {
	eventId: string;
}

// F329 ??????????????????
export class F329Input {
	caseId: string;
	eventId: string;
}

export const InitialF329 = <F329Output>{
	meetingYN: false, notifyYN: '', subject: '', beginTime: '', endTime: '', location: ''
	, meetingMoreYN: false, eventTitle: '', eventBeginTime: '', eventmemo: '', appShow: false, caseType: '', messageStatus: ''
	, eventNameList: [], eventType: '', fileList: [], SD711List: [], SD712List: []
};

export class F329Output {
	meetingYN: boolean; // ???????????????
	notifyYN: string;
	subject: string;
	beginTime: string;
	endTime: string;
	location: string;
	meetingMoreYN: boolean; // ?????????????????????
	eventTitle: string;
	eventBeginTime: string;
	eventmemo: string;
	appShow: boolean;
	caseType: string; // Buy :???????????? Repair :????????????
	messageStatus: string; // Y: ????????? N: ???????????????
	eventNameList: F329EventNameList[];
	eventType: string;
	fileList: F329fileList[];
	SD711List: any[];
	SD712List: any[];
}

export class F329EventNameList {
	eventName: string;
}

export class F329fileList {
	fileId: string;
	fileName: string;
	extension: string;
	fileUrl: string;
	signStatus: string; // N:???????????? (??????) D:????????? Y:?????????
	eventTitle: string;
	uploader: string;
	uploadTime: string;
}

export class F329SD711List {
	name: string;
	empno: string;
	cno: any;
	readOnly: boolean;
}

export class F329SD712List {
	loginToken: string;
	contactName: string;
	cno: any;
	readOnly: boolean;
}
// F326 ????????????

export const InitialF326 = <F326Output>{
	eventNameList: []
};

export class F326Output {
	eventNameList: F326EventNameList[];
}

export class F326EventNameList {
	eventType: string;
	eventName: string;
}
// F317 ????????????????????????
export class F317InputGetCaseHomePag {
	division: string;
	dpt: string;
	empno: string;
}

export class F317Output {
	buyIngNum: number;
	repairCreateNum: number;
	repairIngNum: number;
	buyDone: number;
	buyDoneThisMonth: number;
	repairDone: number;
	repairDoneThisMonth: number;
}

export class F322Input {
	caseId: string;
	eventId: string;

}

// F330 ??????/????????????????????????APP???
export class F330Input {
	caseId: string;
	eventId: string;
	appShow: boolean;
}

export class F330Output {
	caseId: string;
	alertTitle?: string;
	alertMessage?: string;
	systemMessage?: string;
}

// F331 ????????????

export class F331Intput {
	caseId: string;
	endtime: string;
	ctno: string;
	caseType: string;
	srno: any;
}

export class F331Output {
	caseId: string;
	alertTitle?: string;
	alertMessage?: string;
	systemMessage?: string;
}

// F332 ????????????

export class F332Intput {
	custno: string;
}

export class F332Output {
	ctno: string;
	ctdt: string;
	ctamt: number;
	alertTitle?: string;
	alertMessage?: string;
	systemMessage?: string;
}


/** ??????????????? */
export class CompList2 {
	/** ??????????????? */
	compName: string;

	/** ??????????????? */
	compId: string;

	/** ???????????? */
	divisionList: DivisionList[];
}

/** ???????????? */
export class DivisionList {
	/** ??????????????? */
	compId: string;

	/** ???????????? */
	divisionName: string;

	/** ???????????? */
	divisionId: string;

	/** ???????????? */
	dptList: DptList2[];
}

/** ???????????? */
export class DptList2 {
	/** ??????????????? */
	// compId: string;

	/** ???????????? */
	// divisionId: string;

	/** ???????????? */
	dptName: string;

	/** ???????????? */
	dptId: string;

	EmpList?: EmpDataList[];
}

/** ???????????????????????? */
export class EmpDataList {
	/** ???????????? */
	empno: string;

	/** ???????????? */
	empName: string;

	/** ????????????(Url) */
	empPhoto: string;

	/** ???????????????????????? */
	dptName: string;

	divisionName?: string;

	ifCheck?: boolean;

	divisionId?: string;
	dptId?: string;
}

export class F334Input {
	caseId: string;
	srno: string;
	caseType: string;
}
