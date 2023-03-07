import { FilmInformation } from '../types/filmInformation';
import { v4 as uuidv4 } from 'uuid';

export const films: FilmInformation[] = [
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/236744/2a000001616b8bee8c782e00a41555f383b9/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/31be047e6cc6b8f8b44aae0f458d8fda/600x380',
    filmName: 'Иван Васильевич меняет профессию',
    genre: 'комедия',
    releaseDate: 1973,
    id: uuidv4(),
    video: './video/000.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/1920x1080',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/33804/3140196bedce7c7577c907d590906975/600x380',
    filmName: 'Побег из Шоушенка',
    genre: 'драма',
    releaseDate: 1994,
    id: uuidv4(),
    video: './video/001.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/224348/2a00000169e39ef77f588ccdfe574dae8227/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/1668876/a345b127722243984f01ef6504c9a477/600x380',
    filmName: 'Зеленая миля',
    genre: 'драма',
    releaseDate: 1999,
    id: uuidv4(),
    video: './video/002.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/239697/2a0000016127209a2837f7f55b295ef87323/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/725a2ffa02759962a87dc752e39bb939/600x380',
    filmName: 'Брат',
    genre: 'драма',
    releaseDate: 1997,
    id: uuidv4(),
    video: './video/003.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/224348/2a0000016127734a2f9243ba9809a701fa26/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b1055302-cb1c-4387-8817-f13ecf98034b/300x450',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/ce80934e6fa409c97f73f06a97a01a2a/600x380',
    filmName: 'Тренер Картер',
    genre: 'драма',
    releaseDate: 2005,
    id: uuidv4(),
    video: './video/005.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/239697/2a000001616cec2cfd84ab76771359c8402a/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/a477f092-e2ed-4a9d-a5f1-001438e88ab5/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8953bbc3a88a2860ed5a8093b4d25fbe/600x380',
    filmName: 'Собачье сердце',
    genre: 'фантастика',
    releaseDate: 1988,
    id: uuidv4(),
    video: './video/006.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/1648503/2a00000171cbab56ec2b7becee73d7e6f558/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/6d71694e-3796-4e1c-96aa-0e982c2bc03d/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/69336/a2a5e0cde08f0bb2cb5e914bc241d3e9/600x380',
    filmName: 'Пианист',
    genre: 'драма',
    releaseDate: 2002,
    id: uuidv4(),
    video: './video/007.mp4',

  },
  {
    bigPoster: 'https://avatars.mds.yandex.net/get-ott/223007/2a00000161285620f9a23cfb48206e0b7b72/1344x756',
    MovieСover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/82f8a2dc-a439-4832-9f0f-dc599e6e78d2/600x900',
    PreviewCover: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/69336/19838fbd4d949a6b2f8b775927465eda/600x380',
    filmName: 'Хатико: Самый верный друг',
    genre: 'семейный',
    releaseDate: 2008,
    id: uuidv4(),
    video: './video/008.mp4',

  },
];
