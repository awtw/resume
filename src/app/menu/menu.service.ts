import { Injectable } from '@angular/core';
import { MenuInfo, MenuPgInfo, ModuleList, OTTypeInfo, ProgramInfo } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  programList:ProgramInfo[] = [
    {
        'PRG': '熱線服務         ',
        'PRG_DESC': '===熱線服務====',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 1
    },
    {
        'PRG': '倉儲管理         ',
        'PRG_DESC': '===倉管系統===      ',
        'APPRVID': '    ',
        'FWID': null,
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 1
    },
    {
        'PRG': '營業系統         ',
        'PRG_DESC': '===營業系統===      ',
        'APPRVID': '    ',
        'FWID': null,
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 1
    },
    {
        'PRG': '50週年慶  ',
        'PRG_DESC': '50週年慶',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '檔案傳輸系統-同仁專用',
        'PRG_DESC': '檔案傳輸系統',
        'APPRVID': '    ',
        'FWID': null,
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '檔案傳輸系統',
        'PRG_DESC': '檔案傳輸系統',
        'APPRVID': 'AD01',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '新增地址功能',
        'PRG_DESC': '新增地址功能',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': 'ADAD005S01     ',
        'PRG_DESC': '新增地址查詢',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': 'E-Mail通知訂閱',
        'PRG_DESC': 'E-Mail通知訂閱',
        'APPRVID': '    ',
        'FWID': null,
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '寄件功能  ',
        'PRG_DESC': '寄件功能',
        'APPRVID': '    ',
        'FWID': null,
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': 'ADAD099S99     ',
        'PRG_DESC': '簽呈測試檔',
        'APPRVID': 'AD99',
        'FWID': null,
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '機管理系統',
        'PRG_DESC': '----主機管理系統----',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 1
    },
    {
        'PRG': '主機管理基本檔',
        'PRG_DESC': '主機管理基本檔',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '主機類型檔配置',
        'PRG_DESC': '主機類型檔配置',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '網域資訊檔配置',
        'PRG_DESC': '網域資訊檔配置',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '硬體資訊檔配置',
        'PRG_DESC': '硬體資訊檔配置',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': 'ADAD114S00     ',
        'PRG_DESC': '主機用途檔配置',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '帳密設定',
        'PRG_DESC': '帳密設定',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
    {
        'PRG': '特殊帳號檔配置',
        'PRG_DESC': '特殊帳號檔配置',
        'APPRVID': '    ',
        'FWID': '    ',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'COMP': null,
        'DBNM': null,
        'PRG_FLAG': 0
    },
  ];
  moduleList: ModuleList[] = [
    {
        'CLASS_ITEM': 'AD',
        'CLASS_NAME_T': '研發模組',
        'CLASS_NAME_C': '研发模组'
    },
    {
        'CLASS_ITEM': 'FI',
        'CLASS_NAME_T': '財務模組',
        'CLASS_NAME_C': '财务模组'
    },
    {
        'CLASS_ITEM': 'HR',
        'CLASS_NAME_T': '人事模組',
        'CLASS_NAME_C': '人事模组'
    },
    {
        'CLASS_ITEM': 'MM',
        'CLASS_NAME_T': '後勤模組',
        'CLASS_NAME_C': '後勤模组'
    },
    {
        'CLASS_ITEM': 'SD',
        'CLASS_NAME_T': '營業模組',
        'CLASS_NAME_C': '营业模组'
    },
    {
        'CLASS_ITEM': 'SM',
        'CLASS_NAME_T': '服務模組',
        'CLASS_NAME_C': '服务模组'
    },
    {
        'CLASS_ITEM': 'WM',
        'CLASS_NAME_T': '倉管模組',
        'CLASS_NAME_C': '仓管模组'
    }
  ];
  oneMenuProgramList: MenuPgInfo[] = [
    {
        'MENU': 'AD01 ',
        'MENU_DESC': '簽呈補單',
        'PRG': 'ADAD060S00     ',
        'PRG_NO': 1,
        'EDU_Show': true,
        'IT_Show': true,
        'SYS_Show': true,
        'EDU_ROnly': true,
        'IT_ROnly': ' ',
        'SYS_ROnly': ' ',
        'MODULE': 'AD',
        'PRG_DESC': '簽呈補單作業',
        'APPRVID': 'AD60',
        'FWID': 'AD07',
        'MG_EDU': 0,
        'MG_IT': 0,
        'MG_SYS': 0,
        'OTTYPE': 0,
        'APRTBN': '                    ',
        'SEND_EMPNO': '00042852',
        'EMPNO': '00042852',
        'EMP_NAME': '測試人員',
        'PRG_FLAG': 0,
    }
  ];

  menuInfo: MenuInfo[] = [
    {
        'MENU': 'AVVVDAM ',
        'MENU_DESC': 'ERP訊息通知設定',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADBSSSI ',
        'MENU_DESC': 'BI資料驗證管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADCFFFFG',
        'MENU_DESC': '主機管理參數設定',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADCWWWU ',
        'MENU_DESC': '地址資料維護',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDFFFB ',
        'MENU_DESC': '資料庫管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDE ',
        'MENU_DESC': '雲端資料交換',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDCCCE ',
        'MENU_DESC': '資料交換系統',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADFFFEM ',
        'MENU_DESC': '異常指標管控系統',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADMSSSG ',
        'MENU_DESC': 'SMR後台管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADVVVPP ',
        'MENU_DESC': '個人化系統',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADPQQQQ ',
        'MENU_DESC': '個人化系統測試2',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADWWWPZ ',
        'MENU_DESC': '個人化系統測試專用',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADSSSSV ',
        'MENU_DESC': '主機監控管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDDDTE ',
        'MENU_DESC': 'TEST',
        'MODULE': 'AD'
    }
  ];

  getProgramList(): ProgramInfo[] {
    return this.programList;
  }
  getModuleList(): ModuleList[] {
    return this.moduleList;
  }
  getOneMenuProgramList(): MenuPgInfo[] {
    return this.oneMenuProgramList;
  }

  getMenuList(){
    return this.menuInfo;
  }




  constructor() { }
}
