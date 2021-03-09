import { Injectable } from '@angular/core';
import { MenuInfo, MenuPgInfo, ModuleList, OTTypeInfo, ProgramInfo } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  programList:ProgramInfo[] = [
    {
        'PRG': '90服務         ',
        'PRG_DESC': '===服務系統====',
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
        'PRG': '90倉管         ',
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
        'PRG': '90營業         ',
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
        'PRG': 'ACTIVITY_PAGE  ',
        'PRG_DESC': '50週年禮品員購優惠',
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
        'PRG': 'ADAD000S00     ',
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
        'PRG': 'ADAD000S10     ',
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
        'PRG': 'ADAD005S00     ',
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
        'PRG': 'ADAD020S00T01  ',
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
        'PRG': 'ADAD023S00T01  ',
        'PRG_DESC': '發信編號與規則維護',
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
        'PRG': 'ADAD11         ',
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
        'PRG': 'ADAD110S00     ',
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
        'PRG': 'ADAD111S00     ',
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
        'PRG': 'ADAD112S00     ',
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
        'PRG': 'ADAD113S00     ',
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
        'PRG': 'ADAD115S00     ',
        'PRG_DESC': '共同帳號檔配置',
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
        'PRG': 'ADAD116S00     ',
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
        'MENU': 'AD01 ',
        'MENU_DESC': '簽呈補單',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADAM ',
        'MENU_DESC': 'ERP訊息通知設定',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADBI ',
        'MENU_DESC': 'BI資料驗證管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADCFG',
        'MENU_DESC': '主機管理參數設定',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADCU ',
        'MENU_DESC': '地址資料維護',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDB ',
        'MENU_DESC': '資料庫管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDE ',
        'MENU_DESC': '雲端資料交換',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADDE ',
        'MENU_DESC': '異質系統資料交換',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADEM ',
        'MENU_DESC': '異常指標管控系統',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADEMA',
        'MENU_DESC': '異常指標管控系統SA',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADMG ',
        'MENU_DESC': 'SMR後台管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADPP ',
        'MENU_DESC': '個人化系統',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADPQ ',
        'MENU_DESC': '個人化系統測試2',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADPZ ',
        'MENU_DESC': '個人化系統測試專用',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADSV ',
        'MENU_DESC': '主機監控管理',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADTE ',
        'MENU_DESC': 'TEST',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADTR ',
        'MENU_DESC': '資訊組新員程式作業',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADUP ',
        'MENU_DESC': '程式管理發佈',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADUQ ',
        'MENU_DESC': '程式管理發佈 (Chrome優化)',
        'MODULE': 'AD'
    },
    {
        'MENU': 'ADUT ',
        'MENU_DESC': '程式管理發佈 (測試不發布)',
        'MODULE': 'AD'
    },
    {
        'MENU': 'AS   ',
        'MENU_DESC': '檔案簽呈',
        'MODULE': 'AD'
    },
    {
        'MENU': 'AU   ',
        'MENU_DESC': '權限管理作業',
        'MODULE': 'AD'
    },
    {
        'MENU': 'AU01 ',
        'MENU_DESC': '資訊申請作業',
        'MODULE': 'HR'
    },
    {
        'MENU': 'AUAD ',
        'MENU_DESC': '智能化ERP申請',
        'MODULE': 'AD'
    },
    {
        'MENU': 'AUMG ',
        'MENU_DESC': 'M化權限管理作業',
        'MODULE': 'AD'
    },
    {
        'MENU': 'BI-HR',
        'MENU_DESC': 'BI 人資系統',
        'MODULE': ''
    },
    {
        'MENU': 'CM00 ',
        'MENU_DESC': '系統公告',
        'MODULE': 'AD'
    },
    {
        'MENU': 'CM01 ',
        'MENU_DESC': '閱讀公告',
        'MODULE': 'AD'
    },
    {
        'MENU': 'FI   ',
        'MENU_DESC': '財務系統',
        'MODULE': 'FI'
    },
    {
        'MENU': 'FIAF ',
        'MENU_DESC': '融資系統',
        'MODULE': 'FI'
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
