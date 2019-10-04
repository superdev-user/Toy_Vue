const db = {
    category1: [
        {
            label: 'history',
            id: '1',
            parent_id: '',
        } ,
        {
            label: 'todo',
            id: '2',
            parent_id: '',
        }
    ],
    category2: [
        {
            label: '첫번째 스터디',
            id: '1',
            parent_id: '1',
        } ,
        {
            label: '두번째 스터디',
            id: '2',
            parent_id: '1',
        },
        {
            label: '세번째 스터디',
            id: '3',
            parent_id: '1',
        } ,
        {
            label: '네번째 스터디',
            id: '4',
            parent_id: '1',
        },
        {
            label: '첫번째 고려사항',
            id: '5',
            parent_id: '2',
        } ,
        {
            label: '두번째 해야할 일',
            id: '6',
            parent_id: '2',
        }
    ],
    category3: [
        {
            label: '주제 선정',
            id: '1',
            parent_id: '1',
        } ,
        {
            label: '서비스 구조',
            id: '2',
            parent_id: '1',
        },
        {
            label: '환경',
            id: '3',
            parent_id: '3',
        } ,
        {
            label: '알고리즘',
            id: '4',
            parent_id: '4',
        },
        {
            label: 'test',
            id: '5',
            parent_id: '5',
        } ,
        {
            label: 'test coverage',
            id: '6',
            parent_id: '6',
        }
    ],
    drinks:[
        {
            label:"Beer",
            options:["Sam Adams","Anchor Steam","St. Arnold"]
        },
        {
            label:"Soda",
            options:["Pepsi","Coke","RC"]
        },
        {
            label:"Coffee",
            options:["Starbucks","Dunkin Donuts","Gross Hotel Room"]
        }
    ],
}
export default db
