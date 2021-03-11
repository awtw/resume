import { Injectable } from '@angular/core';
import { Content, RoleType, ProjectType, ToolType, ExpByYear, LicenseType, CardContent } from './content';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  content: Content[] = [
  {
    title: '震旦家具客戶管理',
    Date: new Date(2021 , 1, 5),
    project: ProjectType.CRM系統,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      ],
      cardContent: {
        StartDate: new Date(2021 , 1, 5),
        Situation: '震旦家具希望能夠管理聯絡的客戶，因為業務性質通常與客戶的互動期間很長，希望能開發一個專案管理系統，提供給同仁使用',
        Task: '擔任此專案PM，同時開發前端及部分後端程式',
        Action: '協助開發資料架構，開發前端使用介面及部分後端API',
        Result: '於2021年3月正式上線，前期也進行了三個月的測試，順利結案'
    },
    content:
    '開發家具事業部所使用的客戶管理程式，包含客戶資料登記，會議紀錄，合約簽名等等，提供給家具同仁與客戶間最即時的回饋，同時也將每次拜訪及購買紀錄集中管理，讓資料更有效的運用。'
    },
  {
    title: '程式發布流程',
    Date: new Date(2020, 12, 12),
    project: ProjectType['CI/CD'],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType.Git,
        toolName: ToolType[ToolType.Git],
        ifClick: false
      },
      {
        toolID: ToolType.Jenkins,
        toolName: ToolType[ToolType.Jenkins],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
      {
        toolID: ToolType.exe,
        toolName: ToolType[ToolType.exe],
        ifClick: false
      },
    ],
    cardContent: {
        StartDate: new Date(2020, 12, 12),
        Situation: '因為公司的程式編譯及部屬是配合AzureDevops及jenkins，但流程建立上遇到困難，沒辦法解決如果遇到失敗的情境，及希望除了既有的排程還有能夠緊急上傳的排程能夠使用',
        Task: '全程負責此任務',
        Action: '分析既有的排程，分析目前問題，並建立slave站台及新的排程，並將排程整理，提高Jenkins master主機的效能，有效資源分配',
        Result: '於2021年1月完成排程分類及將不同服務的排程分流到slave主機上運行，降低服務效能降低或無法啟用的狀況'
    },
    content:
    '整合 AzureDevops 及 Jenkins，將每次分支合併到主分支時透過 Jenkins Hooks 觸發，建置及發布到各個環境。 建立 Jenkins slave 避免排程過於繁重導致站台速度緩慢及工作失敗。'
  },
  {
    title: '異地備援專案',
    Date: new Date(2020, 11, 26),
    project: ProjectType.APP專案,
    role: [RoleType.SA],
    tool: [
      {
        toolID: ToolType.MSSQL,
        toolName: ToolType[ToolType.MSSQL],
        ifClick: false
      },
      {
        toolID: ToolType.Azure,
        toolName: ToolType[ToolType.Azure],
        ifClick: false
      },
      {
        toolID: ToolType['站台/VM'],
        toolName: ToolType[ToolType['站台/VM']],
        ifClick: false
      },
    ],
     cardContent: {
        StartDate: new Date(2020, 11, 26),
        Situation: '例行隔年會進行的災難復原演練，及配合建立異地備援的主機服務及排程，能夠讓災難發生時，服務依然能夠運行',
        Task: '測試及部分服務的排程設計及使服務能夠運行在雲端',
        Action: '利用window server原有的監控機制，建立備援啟用功能，同時將部分服務部屬到雲端，連線地端整合，若遇到地端服務無法啟用時，雲端服務會自動接手公司ERP服務',
        Result: '於2020年11月完成建立及測試。'
    },
    content:
    '協助 DBA 及各部門資料庫及站台備援，進行災難復原的測試及啟動異地備援計畫。'
  },
  {
    title: '震旦家具APP',
    Date: new Date(2020, 10, 20),
    project: ProjectType.APP專案,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.MSSQL,
        toolName: ToolType[ToolType.MSSQL],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
    ],
    cardContent: {
        StartDate: new Date(2020, 10, 20),
        Situation: '擔任震旦家具APP專案的PM，訪問用戶的需求，同時開發與APP串接的 API，優化作業流程，協助調整資料結構及程式測試',
        Task: '擔任震旦家具APP專案的PM，訪問用戶的需求，同時開發與APP串接的 API，優化作業流程，協助調整資料結構及程式測試',
        Action: '與震旦家具密集分析需求及痛點，開發新的功能可以符合震旦家具所需且能夠與既有的流程配合，與廠商接洽並且開發後端所需API，協助測試及開發，推播，留言，預約參觀等功能，與震旦家具客戶管理專案整合',
        Result: '於2021年1月完成所有功能，測試，驗收'
    },
    content:
    '擔任震旦家具APP專案的PM，訪問用戶的需求，同時開發與APP串接的 API，優化作業流程，協助調整資料結構及程式測試。'
  },
  {
    title: '版本控管流程',
    Date: new Date(2020, 8, 12),
    project: ProjectType['CI/CD'],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
    ],
    cardContent: {
        StartDate: new Date(2020, 8, 12),
        Situation: '程式館控系統的新功能開發，除了平常的程式管控外，也需要滿足主管操作程式維護人移轉的功能，及批次操作多筆程式的需求',
        Task: '滿足新功能',
        Action: '與主管訪談所需功能並且開發，協助大量程式的資訊移轉及此功能的程式開發',
        Result: '於2020年9月完成所有功能，測試，驗收'
    },
    content:
    '協助新舊版控的上傳流程及簽核流程，開發ERP專用程式，將公司所有程式進行分類管理，並且協助批次作業流程，協助各部門程式更新及上傳。'
  },
  {
    title: 'GIT版控系統',
    Date: new Date(2020, 6, 20),
    project: ProjectType['CI/CD'],
    role: [RoleType.PM, RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
    ],
    cardContent: {
        StartDate: new Date(2020, 6, 20),
        Situation: '公司新架構的程式使用git的版控機制，但有些功能不想與其他部門一起發布，且同時有兩個專案同時開發，但想在不同時間點上到站台上',
        Task: '研究 gitflow 架構，配合公司開發習慣，提出解決辦法及開發git版控系統',
        Action: '研究gitflow後建立不同環境分支，同時建立 release 分支，讓專案能夠在不同時間點上到站台上，同時配合各部門需求建立不同儲存體及元件專屬的儲存體，開發整套流程讓公司能夠使用同一元件但又在不同時間點或不同站台上發布',
        Result: '於2020年9月完成所有功能，及後續調整，持續到2021年1月，目前於封測階段'
    },
    content: '建立 gitflow 流程，整合AzureDevOps版本控管，協助程式簽呈作業，串接 Azure DevOps api 整合回 ERP ，並且協助解決衝突及合併主分支。'
  },
    {
    title: '資料交換系統',
    Date: new Date(2020, 6, 5),
    project: ProjectType.ERP功能開發,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      }
      ],
      cardContent: {
        StartDate: new Date(2020, 6, 5),
        Situation: '公司原有資料交換並沒有前端畫面可以操作，需要透過與研發部申請才能使用，但需求量很大且流程並不方便於使用者',
        Task: '研究既有流程，協助資料正規化，開發前後端程式，使用新架構 ( C# MVC API 與 Angular )，滿足使用者需求',
        Action: '參考既有邏輯，將髒資料清理掉，同時正規化相關資料表，開發前後端程式，建立專案導向資料類型分類，同時功能能夠提供給兩岸使用者，並且開發打包功能能夠將篩選後的資料打包成excel，將敏感訊息屏蔽掉，能夠直接匯出提供給廠商使用',
        Result: '於2020年8月完成所有功能，且使用者反應良好，2020年10月添加新需求功能，並提供技術文件及使用方法 ( 公司元件使用方法 ) 提供給使用者使用'
    },
    content:
    '開發資料交換系統，提供良好介面讓工程師能夠新增提供給廠商的API及驗證資訊，提供篩選及匯出功能及使用說明，使兩岸同仁都能順利且快速將開發的API提供給廠商使用。'
  },
  {
    title: '目錄發布系統',
    Date: new Date(2020, 3, 5),
    project: ProjectType.ERP功能開發,
    role: [RoleType.PM, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
    ],
    cardContent: {
        StartDate: new Date(2020, 3, 5),
        Situation: '公司原有架構為每個不同站點有獨立的目錄系統，同時又有超過30個站台以上，沒有明確的紀錄所有站台的位置及目錄設定方法，大部分時候都是由資深同仁知道站台位置並給予設定。',
        Task: '整合所有站台位置，並且將兩岸站台能在同一程式設定，並須要使用新架構開發 (  C# MVC API 與 Angular )',
        Action: '與同仁及主管們確認所有站點位置，並開新表儲存在資料庫，並且開發目錄發布及設定程式，若今天有新增或修改連線位置，都可以直接在程式中修改不須直接對資料庫做修正。同時開發目錄設定系統，使用Angular原生拖拉 ( Drag ) 套件，讓使用者能夠輕鬆且快速設定完目錄，同時製作及提供使用說明手冊，以便於新同仁的使用。',
        Result: '於2020年5月完成所有功能，且使用者反應良好'
    },
    content:
    '開發ERP專用目錄設定程式，協助集團底下公司的ERP目錄發布，及不同職等使用的程式管控，優化及簡化目錄設定流程，直覺的操作體驗，拖拉程式即可放進目錄。'
  },
   {
    title: '程式館控系統',
    Date: new Date(2020, 1, 30),
    project: ProjectType.ERP功能開發,
    role: [RoleType.SA, RoleType.軟體開發],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Axure,
        toolName: ToolType[ToolType.Axure],
        ifClick: false
      },
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
     ],
      cardContent: {
        StartDate: new Date(2020, 1, 30),
        Situation: '公司舊版的ERP程式管控程式 ( VSS版控 ) 的功能太少，且功能不符合現在所需，需開發新的程式來取代此程式',
        Task: '利用新架構開發此程式 ( C# MVC API 與 Angular )',
        Action: '與使用者訪談詢問會使用到什麼功能，及最在意什麼功能，並且將這些功能實現，並且利用新架構開發程式',
        Result: '於2020年3月完成所有功能，測試，驗收'
    },
    content:
    '開發ERP專用程式，管理在VSS版控中的程式，開發新功能-程式維護人批次更新作業，協助部門輪調的程式管控設定，同時提供登記下架程式，排程固定檢查異常程式。'
  },
  {
    title: '資安掃描升級專案',
    Date: new Date(2020, 1, 28),
    project: ProjectType.資安,
    role: [RoleType.PM, RoleType.軟體開發, RoleType.SA],
    tool: [
      {
        toolID: ToolType['C#'],
        toolName: ToolType[ToolType['C#']],
        ifClick: false
      },
      {
        toolID: ToolType.Angular,
        toolName: ToolType[ToolType.Angular],
        ifClick: false
      },
      {
        toolID: ToolType.Jenkins,
        toolName: ToolType[ToolType.Jenkins],
        ifClick: false
      },
    ],
     cardContent: {
        StartDate: new Date(2020, 1, 28),
        Situation: '公司資安配合程式更換，協助廠商安裝程式及平日保養，同時開發資安掃描排成API及查找資安程式',
        Task: '利用新架構開發此程式 ( C# MVC API 與 Angular ) 開發資安查找程式，及資安掃描排成API',
        Action: '使用新架構開發程式，並且與 checkmarx 資安掃描軟體 API 串接，建立 Jenkins 排程，建立所有部門程式掃描時間，並於每月提供資安掃描報告，及結算修正資安個數',
        Result: '於2020年3月完成所有功能，測試，驗收'
    },
    content:
    '協助公司導入 checkmarx 資安掃描軟體，協助每日資安掃描及提供資安修正寫法，每月提供各部門資安風險報告，開發專用ERP程式，提供資安查詢及風險數量。'
  },
  {
    title: '客服滿意度分析專案',
    Date: new Date(2019, 12.25),
    project: ProjectType.PowerBI數據分析,
    role: [RoleType.PM, RoleType.SA],
    tool: [
      {
        toolID: ToolType['stored procedure'],
        toolName: ToolType[ToolType['stored procedure']],
        ifClick: false
      },
      {
        toolID: ToolType.MSSQL,
        toolName: ToolType[ToolType.MSSQL],
        ifClick: false
      },
      {
        toolID: ToolType.PowerBI,
        toolName: ToolType[ToolType.PowerBI],
        ifClick: false
      },
    ],
     cardContent: {
        StartDate: new Date(2019, 12.25),
        Situation: '協助公司導入PowerBI，並且擔任各幕僚單位的服務窗口',
        Task: '擔任各幕僚單位的窗口，與客服部門訪談需求，清理資料庫髒資，製作PowerBI報表',
        Action: '協助資料表正規化，建立數據中台，協助各部門開發 SSIS，協助資料正確性，提供滿意度分析演算法',
        Result: '於2020年10月完成所有功能，測試，驗收'
    },
    content: '協助公司導入 PowerBI，擔任各幕僚單位的窗口，與客服部門訪談需求，清理資料庫髒資料，協助資料正確性，提供滿意度分析演算法，製作 PowerBI 報表'
  }
];

  ExpList: ExpByYear[] = [
    {
      year: new Date(2020, 8).getFullYear(),
      License: [
         {
          month: new Date(2020, 8).getMonth(),
          License: [
            {
              content: 'Certificate of Checkmarx',
              type: LicenseType.證照
            }
          ]
        },
      ]
    },
    {
      year: new Date(2018, 2).getFullYear(),
      License: [
         {
          month: new Date(2018, 9).getMonth(),
          License: [
            {
              content: '兵役 南投醫院-醫療役',
              type: LicenseType.經歷
            }
          ]
        },
        {
          month: new Date(2018, 8).getMonth(),
          License: [
            {
              content:  '交大畢業-碩論: 慢性腎臟病菌相檢測套組開發',
              type: LicenseType.學歷
            }
          ]
        },
        {
          month: new Date(2018, 2).getMonth(),
          License: [
            {
              content: '新創公司網站架設形象設計',
              type: LicenseType.經歷
            },
            {
              content: '交大程式設計課助教（ Python ）',
              type: LicenseType.經歷
            },
            {
              content: '交大創業學程結業',
              type: LicenseType.證照
            },
          ]
        },
      ]
    },
    {
      year: new Date(2017, 6).getFullYear(),
      License: [
        {
          month: new Date(2017, 8).getMonth(),
          License: [
            {
              content: '交大科法所網站架設及設計',
              type: LicenseType.經歷
            },
            {
              content: 'miRTarBase database paper 共同作者 (Impact Facter: 11.501)',
              type: LicenseType.學歷
            }
          ]
        },
        {
          month: new Date(2017, 6).getMonth(),
          License: [
            {
              content: 'SNMG交大生科院網管小組',
              type: LicenseType.經歷
            }
          ]
        },
      ]
    },
    {
      year: new Date(2011, 5).getFullYear(),
      License: [
        {
          month: new Date(2011, 5).getMonth(),
          License: [
            {
              content: '造園丙級技術士',
              type: LicenseType.證照
            }
          ]
        }
      ]
    },
    {
      year: new Date(2010, 7).getFullYear(),
      License: [
        {
          month: new Date(2010, 7).getMonth(),
          License: [
            {
              content: '澳洲遊學 TAFE',
              type: LicenseType.學歷
            },
            {
              content: '園藝丙級技術士',
              type: LicenseType.證照
            }
          ]
        },
      ]
    },
    {
      year: new Date(2009, 11).getFullYear(),
      License: [
        {
          month: new Date(2009, 11).getMonth() + 1,
          License: [
             {
              content: '日本遊學 巨摩高校',
              type: LicenseType.學歷
            },
          ]
        },
      ]
    },
  ];

  constructor() { }

  getContent(): Content[] {
    return this.content;
  }

  getExpList(): ExpByYear[] {
    return this.ExpList;
  }

}
