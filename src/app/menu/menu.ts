export class ProgramInfo {
	PRG: string;
	PRG_DESC: string;
	APPRVID: string;
	FWID: string;
	MG_EDU: number;
	MG_IT: number;
	MG_SYS: number;
	OTTYPE: number;
	APRTBN: string;
	COMP: string;
	DBNM: string;
	PRG_FLAG: number;
}

export class ModuleList {
	CLASS_ITEM: string;
	CLASS_NAME_T: string;
	CLASS_NAME_C: string;
}

export class MenuPgInfo {
	MENU: string;
	MENU_DESC: string;
	PRG: string;
	PRG_NO: number;
	EDU_Show: boolean;
	IT_Show: boolean;
	SYS_Show: boolean;
	EDU_ROnly: boolean;
	IT_ROnly: string;
	SYS_ROnly: string;
	MODULE: string;
	SEND_EMPNO: string;
	EMP_NAME: string;
	EMPNO: string;
	PRG_DESC: string;
	APPRVID: string;
	FWID: string;
	MG_EDU: number;
	MG_IT: number;
	MG_SYS: number;
	OTTYPE: number;
	_OTTYPE?: string;
	APRTBN: string;
	PRG_FLAG: number;
}
export class OTTypeInfo {
	OTTYPE_ID: number;
	OTTYPE_DESC: string;
}
export class MenuListProgram {
	MENU: string;
	PRG_NO: string;
	MENU_DESC: string;
	PRG: string;
	PRG_DESC?: string;
	RONLY: string; // 正式
	ENV1: number;
	ENV2: number;
	ENV3: number;
	SEND_EMPNO: string;
	RONLY1: string; // EDU
	RONLY2: string; // IT
	MODULE: string;
	COMP: string;
	DBNM: string;
	FLAG_PRG: string;
	APRTBN?: string;
	FWID?: string;
	OTTYPE?: string;
	_OTTYPE?: string;
	COUNTRY: string;
	select?: boolean;
}
export class UpdateRoleMenuInfo {
	SERIAL_NO: string;
	UpdateSNO: string;
	NegativeUpdateSNO: string;
	ENV1: number;
	_ENV1?: string;
	ENV2: number;
	_ENV2?: string;
	MODI_EMPNO: string;
	SEND_EMPNO: string;
	OPER_CLASS: string;
	MENU: string;
	MENU_DESC?: string;
	BUPRP: number;
	COMP: string;
	DBNM: string;
}
export class MenuInfo {
	MENU: string;
	MENU_DESC: string;
	MODULE: string;
}
export class GetOneMenuPgList {
	MENU: string;
	COMP: string;
	DBNM: string;
	COUNTRY: string;
}
