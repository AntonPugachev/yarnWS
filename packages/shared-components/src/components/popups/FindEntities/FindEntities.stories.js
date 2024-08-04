"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAPI = exports.Positions = exports.Async = exports.Users = void 0;
var react_1 = require("react");
var storybook_1 = require("../../storybook");
var FindEntities_1 = require("./FindEntities");
var FindEntitiesPosition_1 = require("../FindEntitiesPosition");
var positions_mocks_1 = require("../FindEntitiesPosition/positions.mocks");
var FindEntitiesUser_1 = require("../FindEntitiesUser");
var users_mocks_1 = require("../FindEntitiesUser/users.mocks");
var index_1 = require("../../../index");
var indexIcon_1 = require("../../../indexIcon");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
exports.default = {
    title: 'components/withTest/FindEntities',
    component: FindEntities_1.FindEntities,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A17987'
        }
    }
};
var USERS_FILTERS = [
    {
        label: 'Все',
        value: 'all'
    },
    {
        label: 'Моя команда',
        value: 'team'
    }
];
var getMockedUsers = function (search, filter, skip) {
    if (skip === void 0) { skip = 0; }
    var LIMIT = 5;
    var promise = new Promise(function (resolve) {
        setTimeout(function () {
            var users = (users_mocks_1.usersMocks).filter(function (_a) {
                var fullName = _a.fullName;
                return fullName.toLocaleLowerCase().includes(search.toLowerCase());
            });
            resolve(users.slice(skip, skip + LIMIT));
        }, 1000);
    });
    return [promise, null];
};
var getAsyncEntries = function (search, filter, skip) {
    if (skip === void 0) { skip = 0; }
    var LIMIT = 10;
    var req = fetch("https://jsonplaceholder.typicode.com/todos?_start=".concat(skip, "&_limit=").concat(LIMIT))
        .then(function (response) { return response.json(); })
        .then(function (json) {
        var resList = json.map(function (item) { return ({
            id: item.id,
            fullName: item.title,
            department: item.title
        }); });
        return resList;
    });
    return [req, null];
};
var Users = function () {
    var _a = (0, react_1.useState)([]), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(false), isDialogVisible = _b[0], setDialogVisible = _b[1];
    var onChange = function (v) {
        setValue(v);
    };
    var onDialogToggle = function () {
        setDialogVisible(!isDialogVisible);
    };
    return (<storybook_1.StoryDocs>
      <storybook_1.StoryDocsH1>Поиск по пользователям</storybook_1.StoryDocsH1>
      <div>
        <react_router_dom_1.BrowserRouter>
          <index_1.Button onClick={onDialogToggle}>Выбрать сотрудника</index_1.Button>
          {isDialogVisible && (<FindEntities_1.FindEntities title='Выберите сотрудника' getEntities={getMockedUsers} entityKey='id' value={value} filters={USERS_FILTERS} onChange={onChange} onClose={onDialogToggle} lazy multiple emptyStateIcon={<indexIcon_1.AllUser />} emptyStateInitialText='Найдите нужных вам сотрудников'>
              {function (_a) {
                var entity = _a.entity, isSelected = _a.isSelected, onChange = _a.onChange;
                return (<FindEntitiesUser_1.FindEntitiesUser user={entity} isSelected={isSelected} onChange={onChange}/>);
            }}
            </FindEntities_1.FindEntities>)}
        </react_router_dom_1.BrowserRouter>
      </div>
    </storybook_1.StoryDocs>);
};
exports.Users = Users;
var Async = function () {
    var _a = (0, react_1.useState)([]), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(false), isDialogVisible = _b[0], setDialogVisible = _b[1];
    var onChange = function (v) {
        setValue(v);
    };
    var onDialogToggle = function () {
        setDialogVisible(!isDialogVisible);
    };
    return (<storybook_1.StoryDocs>
      <storybook_1.StoryDocsH1>Пагинация с Jsonplaceholder</storybook_1.StoryDocsH1>
      <div>
        <react_router_dom_1.BrowserRouter>
          <index_1.Button onClick={onDialogToggle}>Выбрать сотрудника</index_1.Button>
          {isDialogVisible && (<FindEntities_1.FindEntities title='Выберите сотрудника' getEntities={getAsyncEntries} entityKey='id' value={value} filters={USERS_FILTERS} onChange={onChange} onClose={onDialogToggle} lazy multiple emptyStateIcon={<indexIcon_1.AllUser />} emptyStateInitialText='Найдите нужных вам сотрудников'>
              {function (_a) {
                var entity = _a.entity, isSelected = _a.isSelected, onChange = _a.onChange;
                return (<FindEntitiesUser_1.FindEntitiesUser user={entity} isSelected={isSelected} onChange={onChange}/>);
            }}
            </FindEntities_1.FindEntities>)}
        </react_router_dom_1.BrowserRouter>
      </div>
    </storybook_1.StoryDocs>);
};
exports.Async = Async;
var POSITIONS_FILTERS = [
    {
        label: 'Вакантные должности',
        value: ''
    }
];
var getMockedPositions = function (search) {
    var promise = new Promise(function (resolve) {
        resolve((positions_mocks_1.positionsMocks).filter(function (_a) {
            var positionText = _a.positionText;
            return positionText.toLocaleLowerCase().includes(search.toLowerCase());
        }));
    });
    return [promise, null];
};
var Positions = function () {
    var _a = (0, react_1.useState)([]), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(false), isDialogVisible = _b[0], setDialogVisible = _b[1];
    var onChange = function (v) {
        setValue(v);
    };
    var onDialogToggle = function () {
        setDialogVisible(!isDialogVisible);
    };
    return (<storybook_1.StoryDocs>
      <storybook_1.StoryDocsH1>Поиск по должностям</storybook_1.StoryDocsH1>
      <div>
        <react_router_dom_1.BrowserRouter>
          <index_1.Button onClick={onDialogToggle}>Выбрать должность</index_1.Button>
          {isDialogVisible && (<FindEntities_1.FindEntities title='Выберите штатную должность' getEntities={getMockedPositions} entityKey='position' value={value} filters={POSITIONS_FILTERS} onChange={onChange} onClose={onDialogToggle} emptyStateIcon={<indexIcon_1.AllUser />} emptyStateInitialText='Найдите нужную вам должность'>
              {function (_a) {
                var entity = _a.entity, isSelected = _a.isSelected, onChange = _a.onChange;
                return (<FindEntitiesPosition_1.FindEntitiesPosition position={entity} isSelected={isSelected} onChange={onChange}/>);
            }}
            </FindEntities_1.FindEntities>)}
        </react_router_dom_1.BrowserRouter>
      </div>
    </storybook_1.StoryDocs>);
};
exports.Positions = Positions;
var request = axios_1.default.create({ baseURL: 'https://sapd-fes-ap01.vtb24.ru:44310/' });
var getUsers = (0, FindEntitiesUser_1.createGetUsers)(request);
var UsersAPI = function () {
    var _a = (0, react_1.useState)([]), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(false), isDialogVisible = _b[0], setDialogVisible = _b[1];
    var onChange = function (v) {
        setValue(v);
    };
    var onDialogToggle = function () {
        setDialogVisible(!isDialogVisible);
    };
    return (<storybook_1.StoryDocs>
      <storybook_1.StoryDocsH1>Поиск по пользователям из API</storybook_1.StoryDocsH1>
      <div>
        <react_router_dom_1.BrowserRouter>
          <index_1.Button onClick={onDialogToggle}>Выбрать сотрудника</index_1.Button>
          {isDialogVisible && (<FindEntities_1.FindEntities title='Выберите сотрудника' getEntities={getUsers} entityKey='id' value={value} filters={USERS_FILTERS} onChange={onChange} onClose={onDialogToggle} lazy emptyStateIcon={<indexIcon_1.AllUser />} emptyStateInitialText='Найдите нужных вам сотрудников'>
              {function (_a) {
                var entity = _a.entity, isSelected = _a.isSelected, onChange = _a.onChange;
                return (<FindEntitiesUser_1.FindEntitiesUser user={entity} isSelected={isSelected} onChange={onChange}/>);
            }}
            </FindEntities_1.FindEntities>)}
        </react_router_dom_1.BrowserRouter>
      </div>
    </storybook_1.StoryDocs>);
};
exports.UsersAPI = UsersAPI;
