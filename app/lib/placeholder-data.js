// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    email: 'test1@teststore.com',
    login_id: 'store1',
    password: 'store1',
  },
  {
    email: 'test2@teststore.com',
    login_id: 'store2',
    password: 'store2',
  },
  {
    email: 'test3@teststore.com',
    login_id: 'store3',
    password: 'store3',
  },
  {
    email: 'test4@teststore.com',
    login_id: 'store4',
    password: 'store4',
  },
  {
    email: 'test5@teststore.com',
    login_id: 'store5',
    password: 'store5',
  },
  {
    email: 'test6@teststore.com',
    login_id: 'store6',
    password: 'store6',
  },
  {
    email: 'test7@teststore.com',
    login_id: 'store7',
    password: 'store7',
  },
  {
    email: 'test8@teststore.com',
    login_id: 'store8',
    password: 'store8',
  },
  {
    email: 'test9@teststore.com',
    login_id: 'store9',
    password: 'store9',
  },
  {
    email: 'test10@teststore.com',
    login_id: 'store10',
    password: 'store10',
  }
];

const store_mst = [
  {
    id: '3510bc3e-f5fe-4770-b5e6-27e7132550b4',
    store_name: '냥이 초밥',
    branch_name: '귤현점',
  },
  {
    id: 'f6eaa21e-7b39-48f0-a68a-67360396cce1',
    store_name: '계양 추어탕',
    branch_name: '장기점',
  },
  {
    id: '83620993-46f2-483f-851d-a7052fa6c1bc',
    store_name: '풍천 장어',
    branch_name: '임학점',
  },
  {
    id: '383b637a-f9e7-4be4-9fe6-fe01f2d8a3d0',
    store_name: '덕수궁 삼계탕',
    branch_name: '계산점',
  },
  {
    id: 'e02f2ef3-3c70-47ba-8252-567bda973701',
    store_name: '임학 화로구이',
    branch_name: '임학점',
  },
  {
    id: '963a8c02-1100-45a9-bf7e-399e802f6974',
    store_name: '모찌 칼국수',
    branch_name: '경인교대점',
  },
  {
    id: 'e1b1665f-8d60-4fd5-b8cc-24b0e3a45b30',
    store_name: '떡돈까스윙',
    branch_name: '작전점',
  },
  {
    id: 'b2a11b28-78b5-4f0a-9614-fb646005218c',
    store_name: '럭키 피자',
    branch_name: '박촌점',
  },
  {
    id: 'dca91f4c-48bb-4386-b34f-23a7d84d5fde',
    store_name: '슉슉 버거',
    branch_name: '계산점',
  },
  {
    id: 'c5af0766-34e1-4956-bc42-56fde49b8162',
    store_name: '당근 김밥',
    branch_name: '임학점',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  store_mst,
  customers,
  invoices,
  revenue,
};
