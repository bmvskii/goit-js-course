import { v4 as uuid } from 'uuid';

export default [
  {
    name: 'Banana',
    categoryId: 1,
    id: uuid(),
    url:
      'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3230-3862-4039-b139-343530613431__bananas-1354785_1280.jpg',
    amount: 10,
  },
  {
    name: 'Apple',
    categoryId: 1,
    url:
      'https://besthqwallpapers.com/img/original/86536/apples-fruit-ripe-red-apples-fresh-fruit-apple.jpg',
    id: uuid(),
    amount: 100,
  },
  {
    name: 'Donut',
    url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190619-air-fryer-donuts-302-landscape-pf-1561758031.jpg',
    categoryId: 2,
    id: uuid(),
    amount: 10,
  },
  {
    name: 'Pineapple pie',
    categoryId: 2,
    id: uuid(),
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJOcnvlxLYqFPgXAOPJxGcy6--GSm5citDhQ&usqp=CAU',
    amount: 10,
  },
  {
    name: 'Kiwi',
    categoryId: 1,
    id: uuid(),
    amount: 45,
    url: 'https://i.ndtvimg.com/i/2015-10/kiwi-fruit_240x180_71445871735.jpg',
  },
  {
    name: 'Vodka',
    categoryId: 3,
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP0ldG2h_Qbb7r1ucszazRKP0gzL17TFpr5A&usqp=CAU',
    id: uuid(),
    amount: 40,
  },
  {
    name: 'Cognac',
    url: 'https://mcproductspirit.mc/uploads/product/original/91.jpg',
    categoryId: 3,
    id: uuid(),
    amount: 100,
  },
  {
    name: 'Beer',
    categoryId: 3,
    url: 'https://mova.beer/wp-content/uploads/2019/12/adult-build.png',
    id: uuid(),
    amount: 55,
  },
];
