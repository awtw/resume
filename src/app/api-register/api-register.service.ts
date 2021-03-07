import { Injectable } from '@angular/core';
import { CheckCn, EmpInfo, HierarchicalApiInfo, OwnerInfo, UserInfo } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiRegisterService {

  MaintainerList: EmpInfo[] = [
    {
        "EMPNO": "00046959",
        "EMP_NAME": "王崇宇",
        "DPT": null
    }
  ]

  apiList: HierarchicalApiInfo[] = [
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "服務系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "服務系統部對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "服務系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "服務系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "野百合",
                "ProjectDescription": "野百合專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管管理系統",
                "ProjectDescription": "主管管理系統專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "30910205-4a83-49b3-9d8b-002adaf6c3b9",
        "API_NAME": "聯絡人清單",
        "ApiDescription": "聯絡人清單api",
        "API_URL": "ErpNextSdApi/api/Equipment/DeleteExisted",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "        ",
        "ApiCreateTime": "              ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 2
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營業系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "營業系統部-對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "營業系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "營業系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "營業2.0",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "a12b347e-a27a-4759-a992-004a22219ae5",
        "API_NAME": "getUnreadList",
        "ApiDescription": "取得我的頁面各功能未讀數量",
        "API_URL": "ErpNextSdApi/api/OASmMyCenter/getUnreadList",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20170607000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
         "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "服務系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "服務系統部對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "服務系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "服務系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "野百合",
                "ProjectDescription": "野百合專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管管理系統",
                "ProjectDescription": "主管管理系統專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c48d37ce-0f18-4681-bb3d-02dec58a6351",
        "API_NAME": "PS012-取得留言板資料",
        "ApiDescription": "取得留言板資料",
        "API_URL": "/site/getcontactusdata",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038832",
        "ApiCreateTime": "20181121100730",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "服務系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "服務系統部對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "服務系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "服務系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "野百合",
                "ProjectDescription": "野百合專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管管理系統",
                "ProjectDescription": "主管管理系統專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "14335c87-edc3-4d55-bf6b-035b57ed0b31",
        "API_NAME": "取得同仁帳密驗證",
        "ApiDescription": "取得同仁帳密驗證",
        "API_URL": "ErpNextHrApi/api/OASalesCloud/EmployeeValidPassword",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00033567",
        "ApiCreateTime": "20191115093701",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 2
    },
    {
         "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "服務系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "服務系統部對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "服務系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "服務系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "7139e64c-0b75-4f17-96c6-d9a254c6f09f",
                "PROJECT_NAME": "野百合",
                "ProjectDescription": "野百合專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00043821",
                "ProjectCreateTime": "20180207143643"
            },
            {
                "PROJECT_TOKEN": "bd58e410-613a-48ee-b3ba-b7e24bbe2aa9",
                "PROJECT_NAME": "主管管理系統",
                "ProjectDescription": "主管管理系統專案",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00036761",
                "ProjectCreateTime": "20190724110909"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "N"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "6981495b-356d-4b4d-9c3a-03dc16609496",
        "API_NAME": "P04006 查詢已下單狀態資訊",
        "ApiDescription": "P04006 查詢已下單狀態資訊",
        "API_URL": "ErpNextSdApi/api/OACuPromotion/getOrderInfo",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200706093129",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 2
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營業系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "營業系統部-對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "營業系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "營業系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "營業2.0",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "ad15f962-f544-4c76-8b40-0408dc79d1f1",
        "API_NAME": "取得服務日報API",
        "ApiDescription": "取得服務日報API",
        "API_URL": "ErpNextAdApi/api/mobile/MGMDGetSMCKDoc",
        "REQUEST_METHOD": "GET",
        "ApiIsEnable": "Y",
        "ApiCreator": "00037313",
        "ApiCreateTime": "20200304120031",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營業系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "營業系統部-對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "營業系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "營業系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "營業2.0",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": " "
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c53112b9-bf36-4f86-bacc-049e6489c8c7",
        "API_NAME": "DR005 已閱讀主管回覆",
        "ApiDescription": "同仁閱讀主管回覆回壓閱讀時間",
        "API_URL": "ErpNextSdApi/api/DailyReport/ReplyDailyReport",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00046428",
        "ApiCreateTime": "202012101404  ",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 1,
        "ProjectCount": 1
    },
    {
       "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營業系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "營業系統部-對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "營業系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "營業系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "營業2.0",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "c06db0b3-be40-4b0b-bddf-068bacbae32f",
        "API_NAME": "updateProblemLike",
        "ApiDescription": "SM004\t對故障問題按讚",
        "API_URL": "ErpNextSdApi/api/OASmSmartBox/updateProblemLike",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00038972",
        "ApiCreateTime": "20170126000000",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    },
    {
        "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營業系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "營業系統部-對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "營業系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "營業系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "營業2.0",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [
            {
                "ApiHeaderKey": "loginToken",
                "ApiHeaderKeyRequired": "Y"
            },
            {
                "ApiHeaderKey": "targetEmpno",
                "ApiHeaderKeyRequired": "Y"
            }
        ],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "9a5384cd-2356-478e-9fa1-068d485cdf1b",
        "API_NAME": "BOSS707顧客資料-服務歷程",
        "ApiDescription": "BOSS707顧客資料-服務歷程",
        "API_URL": "ErpNextSdApi/api/AuroraBossCustomer360/GetCustomerServiceHistory",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00044584",
        "ApiCreateTime": "20190903162214",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 2,
        "ProjectCount": 1
    },
    {
       "OwnerInfo": {
            "OWNER_TOKEN": "69c4bdee-afac-4788-abc9-c961c30b21ea",
            "OwnerISENABLE": "Y",
            "OwnerCreator": "        ",
            "OwnerCreateTime": "              ",
            "OWNER_NAME": "營業系統部",
            "OwnerIsInternal": "Y",
            "OwnerEnvList": [
                {
                    "OWNER_ENV_TOKEN": "c04677e5-6035-4987-ac58-0d4298ffc38a",
                    "OWNER_ENV": "IT",
                    "ENV_BaseUrl": "http://211.21.7.24/NextIT/",
                    "EnvDescription": "營業系統部-對外測試環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "2f2d5e36-139f-468c-9b28-3f357e94a8c7",
                    "OWNER_ENV": "EDU",
                    "ENV_BaseUrl": "http://211.21.7.24/NextEDU/",
                    "EnvDescription": "營業系統部-對外封測環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                },
                {
                    "OWNER_ENV_TOKEN": "ea8bd434-5a33-480f-8f4a-b5619688c9b8",
                    "OWNER_ENV": "SYS",
                    "ENV_BaseUrl": "http://211.21.7.24/",
                    "EnvDescription": "營業系統部-對外正式環境API站點",
                    "EnvIsEnable": "Y",
                    "EnvCreator": "        ",
                    "EnvCreateTime": "              "
                }
            ]
        },
        "ProjectInfo": [
            {
                "PROJECT_TOKEN": "a96e3741-2c9d-41b8-af58-1737bebcbf2e",
                "PROJECT_NAME": "營業2.0",
                "ProjectDescription": "",
                "ProjectIsENABLE": "Y",
                "ProjectCREATOR": "00038832",
                "ProjectCreateTime": "20181114143926"
            }
        ],
        "ApiHeaderInfo": [],
        "ApiQueryStringInfo": [],
        "API_TOKEN": "f142e5e2-7392-42c8-bfd0-07b35c0ab099",
        "API_NAME": "M01007 取得機器相關資訊(僅用在輸入驗證碼時使用)",
        "ApiDescription": "M01007 取得機器相關資訊(僅用在輸入驗證碼時使用)",
        "API_URL": "ErpNextSdApi/api/OACuMember/getMachineInfoByKeyIn",
        "REQUEST_METHOD": "POST",
        "ApiIsEnable": "Y",
        "ApiCreator": "00036761",
        "ApiCreateTime": "20200421113603",
        "EduCount": 1,
        "ItCount": 1,
        "SysCount": 1,
        "QueryStringCount": 0,
        "HeaderCount": 0,
        "ProjectCount": 1
    }
  ]

  OwnerInfoList: OwnerInfo[] = [
    {
        "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
        "OWNER_NAME": "服務系統部",
        "DESCRIPTION": "服務系統部",
        "IS_INTERNAL": "N",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20181121100211",
        "EDITOR": "余X倫",
        "EDIT_TIME": null,
        "ProjectCount": "1",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
                "OWNER_NAME": "服務系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00038832",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20190225100224",
                "EnvCreateTime": "20181121100439",
                "EnvCreator": "00038832",
                "EnvDescription": "服務系統部測試封測",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "f664367e-3057-416f-910a-63a4cda91bba"
            },
            {
                "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
                "OWNER_NAME": "服務系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00038832",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20190225100224",
                "EnvCreateTime": "20181121100439",
                "EnvCreator": "00038832",
                "EnvDescription": "服務系統部正式",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "http://119.81.165.141/aurora_api/api",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "41ed9b91-3747-4397-9d61-6919be39b458"
            },
            {
                "OWNER_TOKEN": "09b15b94-da29-4986-9e7c-04b42df28f94",
                "OWNER_NAME": "服務系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "N",
                "IS_ENABLE": "Y",
                "CREATOR": "00038832",
                "CREATE_TIME": null,
                "EDITOR": "00038832",
                "EDIT_TIME": "20190225100224",
                "EnvCreateTime": "20181121100439",
                "EnvCreator": "00038832",
                "EnvDescription": "服務系統部測試測試",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "https://dev.iifun.com.tw/aurora_group_xweb/aurora_api/api",
                "OWNER_ENV": "IT",
                "OWNER_ENV_TOKEN": "2892b3be-9a5c-4df7-a59d-89638b179167"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    },
    {
        "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
        "OWNER_NAME": "營業系統部",
        "DESCRIPTION": "營業系統部",
        "IS_INTERNAL": "Y",
        "IS_ENABLE": "Y",
        "CREATOR": null,
        "CREATE_TIME": "20210107175830",
        "EDITOR": "王崇宇",
        "EDIT_TIME": null,
        "ProjectCount": "0",
        "OwnerEnvList": [
            {
                "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
                "OWNER_NAME": "營業系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175830",
                "EnvCreateTime": "20210107175830",
                "EnvCreator": "00046959",
                "EnvDescription": "營業系統部的 封測 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "cb0a7ff5-a002-4c7b-8063-07c215ba0cb9"
            },
            {
                "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
                "OWNER_NAME": "營業系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175830",
                "EnvCreateTime": "20210107175830",
                "EnvCreator": "00046959",
                "EnvDescription": "營業系統部的 正式 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "SYS",
                "OWNER_ENV_TOKEN": "a68bd2f4-37f8-4799-807c-e664e9423893"
            },
            {
                "OWNER_TOKEN": "72d8b7a6-f9a9-4b63-a6ed-0e521835522e",
                "OWNER_NAME": "營業系統部",
                "DESCRIPTION": null,
                "IS_INTERNAL": "Y",
                "IS_ENABLE": "Y",
                "CREATOR": "00046959",
                "CREATE_TIME": null,
                "EDITOR": "00046959",
                "EDIT_TIME": "20210107175830",
                "EnvCreateTime": "20210107175830",
                "EnvCreator": "00046959",
                "EnvDescription": "營業系統部的 測試 環境",
                "EnvIsEnable": "Y",
                "ENV_BaseUrl": "",
                "OWNER_ENV": "EDU",
                "OWNER_ENV_TOKEN": "a68bd2f4-37f8-4799-807c-e664e9423893"
            }
        ],
        "ProjectList": null,
        "checkIfCN": false
    }
  ]

  constructor() { }

  GetAPiInfoListRequest(check: CheckCn) {
		return this.apiList;
	}
  GetOwnerListRequest(check: CheckCn) {
    return this.OwnerInfoList;
  }

  getMaintainerInfoRequest(){
    return this.MaintainerList;
  }

}
