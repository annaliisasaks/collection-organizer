import coverImg from './coverImg.png';

export type PostComment = {
    date: string;
    author: string;
    content: string;
}

export type Post = {
    id: number;
    header: string;
    content: string;
    author: string;
    date: string;
    tags: string[];
    likes: number;
    comments: PostComment[];
    views: number;
}

export interface IUnit {
  id: number;
  name: string;
  condition: string;
  location: string;
  size: string;
  material: string;
  story: string;
  image: string;
}

export const unitsData: IUnit[] = [
  {
    id: 1,
    name: 'Moto Sport1',
    condition: 'Väga hea',
    location: 'Sahtel 2',
    size: 'Tavaline',
    material: 'Papp',
    story: 'Lorem Ipsum lorem ipsum',
    image: coverImg,
  },
  {
    id: 2,
    name: 'Moto Sport2',
    condition: 'Väga hea',
    location: 'Sahtel 2',
    size: 'Tavaline',
    material: 'Papp',
    story: 'Lorem Ipsum lorem ipsum',
    image: coverImg,
  },
  {
    id: 3,
    name: 'Moto Sport3',
    condition: 'Väga hea',
    location: 'Sahtel 2',
    size: 'Tavaline',
    material: 'Papp',
    story: 'Lorem Ipsum lorem ipsum',
    image: coverImg,
  },
];

export const postsData: Post[] = [
  {
    id: 1,
    header: 'Practical Functional Programming',
    content: 'The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “side effects”.',
    author: 'Steven Heidel',
    date: 'Apr 29, 2017',
    tags: ['events', 'programming'],
    likes: 1,
    comments: [
      {
        date: 'Nov 2',
        author: 'Steven Heidel',
        content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
      },
    ],
    views: 3,
  },
  {
    id: 2,
    header: 'Practical Functional Programming2',
    content: 'The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “side effects”.',
    author: 'Steven Heidel',
    date: 'Apr 29, 2017',
    tags: ['events', 'programming'],
    likes: 5,
    comments: [
      {
        date: 'Nov 3',
        author: 'Steven Heidel',
        content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
      },
      {
        date: 'Nov 4',
        author: 'Steven Heidel',
        content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
      },
    ],
    views: 3,
  },
];
