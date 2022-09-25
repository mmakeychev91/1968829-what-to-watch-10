import { Details } from '../types/details';
import { v4 as uuidv4 } from 'uuid';

export const filmDetails: Details[] = [
  {
    director: 'Леонид Гайдай',
    starring: 'Александр Демьяненко, Юрий Яковлев, Леонид Куравлёв, Наталья Крачковская',
    runTime: '1h 28m',
    genre: 'комедия',
    releaseDate: 1973,
    id: uuidv4(),
  },
  {
    director: 'Фрэнк Дарабонт',
    starring: 'Тим Роббинс, Морган Фриман, Боб Гантон, Уильям Сэдлер, Клэнси Браун',
    runTime: '2h 22m',
    genre: 'драма',
    releaseDate: 1994,
    id: uuidv4(),
  },
  {
    director: 'Фрэнк Дарабонт',
    starring: 'Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Кларк Дункан, Джеймс Кромуэлл',
    runTime: '3h 09m',
    genre: 'драма',
    releaseDate: 1999,
    id: uuidv4(),
  },
  {
    director: 'Алексей Балабанов',
    starring: 'Сергей Бодров мл., Виктор Сухоруков, Светлана Письмиченко, Мария Милютина, Юрий Кузнецов, Сергей Мурзин, Ирина Ракшина',
    runTime: '1h 40m',
    genre: 'драма',
    releaseDate: 1997,
    id: uuidv4(),
  },
  {
    director: 'Томас Картер',
    starring: 'Сэмюэл Л. Джексон, Роб Браун, Роберт Ричард, Рик Гонсалес, Нана Гбивонио',
    runTime: '2h 16m',
    genre: 'драма',
    releaseDate: 2005,
    id: uuidv4(),
  },
  {
    director: 'Владимир Бортко',
    starring: 'Владимир Толоконников, Евгений Евстигнеев, Борис Плотников, Роман Карцев, Нина Русланова',
    runTime: '2h 16m',
    genre: 'фантастика',
    releaseDate: 1988,
    id: uuidv4(),
  },
  {
    director: 'Роман Полански',
    starring: 'Эдриан Броуди, Эмилия Фокс, Даниэль Кальтаджироне, Эд Стоппард, Морин Липман',
    runTime: '2h 29m',
    genre: 'драма',
    releaseDate: 2002,
    id: uuidv4(),
  },
  {
    director: 'Лассе Халльстрём',
    starring: 'Ричард Гир, Джоан Аллен, Кэри-Хироюки Тагава, Сара Ремер, Джейсон Александер',
    runTime: '1h 29m',
    genre: 'семейный',
    releaseDate: 2008,
    id: uuidv4(),
  },
];
