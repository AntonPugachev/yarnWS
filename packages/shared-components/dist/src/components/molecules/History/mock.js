"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathsUZADO = exports.attachments = exports.pathsHistory = void 0;
var users_mocks_1 = require("../../popups/FindUsers/users.mocks");
exports.pathsHistory = [
    {
        stepId: '-1',
        activityId: 'activityId',
        activityText: 'Согласование заявки',
        agent: 'agent',
        agentName: 'Кузнецова Злата Игоревна',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Кузнецова Злата Игоревна',
                position: 'Engineer',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: 'data:image/png;base64,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'
            }
        ],
        statusId: '0',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: 'Чудесный график. Однозначно нужно согласовать!',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '0',
        activityId: 'activityId',
        activityText: 'Согласование заявки',
        agent: 'agent',
        agentName: 'Кузнецова Злата Игоревна',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Бусыгина Александра Павловна',
                position: 'Engineer',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: 'data:image/png;base64,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'
            }
        ],
        statusId: '3',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '1',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Руководитель ССП',
        user: users_mocks_1.usersMocks,
        statusId: '2',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '2',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Руководитель ССП',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Вы',
                position: 'Engineer',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: 'data:image/png;base64,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'
            }
        ],
        statusId: '2',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '3',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Руководитель ССП',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Чалая Наталья Александровна',
                position: 'Engineer',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '4',
        statusText: 'Окончательное согласование',
        criticality: '0',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 0
    }
];
exports.attachments = [
    {
        id: '0',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '1',
        attType: '',
        attTypeText: '',
        fileName: 'myDocksjdfhalkdsjhflkahoirewytoirewutoirewytoirewuytoirewuytoirewuytoirewytoiew.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '2',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '3',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '4',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '5',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '6',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '7',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '8',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '9',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '10',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '10',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '12',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '13',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '14',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '15',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '16',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '17',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '18',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '19',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '20',
        attType: '',
        attTypeText: '',
        fileName: 'doc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
    {
        id: '21',
        attType: '',
        attTypeText: '',
        fileName: 'myDoc.pdf',
        base64: '',
        singBase64: '',
        cert: ''
    },
];
exports.pathsUZADO = [
    {
        stepId: '-1',
        activityId: 'activityId',
        activityText: 'Согласование заявки',
        agent: 'agent',
        agentName: 'Кузнецова Злата Игоревна',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Кузнецова Злата Игоревна',
                position: 'Ведущий аналитик',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '0',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: 'Чудесный график. Однозначно нужно согласовать!',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '0',
        activityId: 'activityId',
        activityText: 'Согласование заявки',
        agent: 'agent',
        agentName: 'Кузнецова Злата Игоревна',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Никулин Григорий Николаевич',
                position: 'Главный разработчик',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '3',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '1',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Руководитель ССП',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Бусыгин Александр Павлович',
                position: 'Начальник управления',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '2',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '2',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Руководитель ССП',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Алексеев Дмитрий Геннадьевич',
                position: 'Заместитель руководителя департамента',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '2',
        statusText: 'Подписано ЭП',
        criticality: '3',
        comment: 'Прошу выдать работникам, ЭП',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '3',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Руководитель ССП',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Вы',
                position: 'Руководитель  департамаента — Вице-президент',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '4',
        statusText: 'Согласовано',
        criticality: '3',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 20202103
    },
    {
        stepId: '4',
        activityId: 'activityId',
        activityText: 'Согласование заявки руководителем',
        agent: 'agent',
        agentName: 'Обработка бухгалтером',
        user: [
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Иванов Иван Иванович',
                position: 'Руководитель  департамаента',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            },
            {
                id: '#100500',
                firstName: 'Illidan',
                lastName: 'Stormrage',
                middleName: '',
                fullName: 'Петров Пётр Петрович',
                position: 'Руководитель  департамаента',
                positionId: 'FE 1',
                department: 'The Betrayer',
                departmentId: '11',
                departmentsPath: [
                    {
                        id: 'o1',
                        name: 'Name 1',
                        unitType: 'Unit type 1',
                        unitTypeDesc: 'Unit description 1'
                    },
                    {
                        id: 'o2',
                        name: 'Name 2',
                        unitType: 'Unit type 2',
                        unitTypeDesc: 'Unit description 2'
                    },
                    {
                        id: 'o3',
                        name: 'Name 3',
                        unitType: 'Unit type 3',
                        unitTypeDesc: 'Unit description 3'
                    }
                ],
                photo: ''
            }
        ],
        statusId: '5',
        statusText: 'Окончательное согласование',
        criticality: '0',
        comment: '',
        actArea: 'Ведущий аналитик',
        pathId: '',
        date: 0
    }
];
