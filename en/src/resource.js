/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export const data = {
  cn: {
    meta: {
      title: 'Meet the Family of Hytera Products',
      desc: 'How to open the star products of hytera',
    },
    scene1: {
      bgc: '#bac0c9',
      bg: 'bg.png',
      title: 'cn-title.png',
      question: 'cn-question.png',
      posters: ['cn-poster.png'],
      videos: ['https://www.hytera.com/html/video/EN1.mp4'],
    },
    scene2: {
      bgc: '#52668a',
      bg: 'cn-bg.png',
      title: 'cn-title.png',
      question: 'cn-question.png',
      posters: [
        'cn-poster.png',
        'cn-poster.png',
      ],
      videos: [
        'https://www.hytera.com/html/video/EN2B760.mp4',
        'https://www.hytera.com/html/video/EN2A680.mp4',
      ],
      btnPlay1: 'cn-btn-play-1.png',
      btnPlay2: 'cn-btn-play-2.png',
    },
    scene3: {
      bgc: '#b9c8d4',
      bg: 'bg.png',
      title: 'cn-title.png',
      question: 'cn-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN3.mp4'],
    },
    scene4: {
      bgc: '#aabbd4',
      bg: 'bg.png',
      title: 'cn-title.png',
      question: 'cn-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN4.mp4'],
    },
    scene5: {
      bgc: '#8797b3',
      bg: 'bg.png',
      title: 'cn-title.png',
      question: 'cn-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN5.mp4'],
    },

    scene6: {
      bgc: '#a8b4c1',
      bg: 'bg.png',
      title: 'cn-title.png',
      question: 'cn-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN6.mp4'],
      btnMore: 'cn-btn-more.png',
      more: './trial.html',
    },
  },
  en: {
    meta: {
      title: 'Meet the Family of Hytera Products',
      desc: 'Introducing Hytera Products',
    },
    scene1: {
      bgc: '#bac0c9',
      bg: 'bg.png',
      title: 'en-title.png',
      question: 'en-question.png',
      posters: ['en-poster.png'],
      videos: ['https://www.hytera.com/html/video/EN1.mp4'],
    },
    scene2: {
      bgc: '#52668a',
      bg: 'en-bg.png',
      title: 'en-title.png',
      question: 'en-question.png',
      posters: [
        'en-poster.png',
        'en-poster.png',
      ],
      videos: [
        'https://www.hytera.com/html/video/EN2B760.mp4',
        'https://www.hytera.com/html/video/EN2A680.mp4',
      ],
      btnPlay1: 'en-btn-play-1.png',
      btnPlay2: 'en-btn-play-2.png',
    },
    scene3: {
      bgc: '#b9c8d4',
      bg: 'bg.png',
      title: 'en-title.png',
      question: 'en-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN3.mp4'],
    },
    scene4: {
      bgc: '#aabbd4',
      bg: 'bg.png',
      title: 'en-title.png',
      question: 'en-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN4.mp4'],
    },
    scene5: {
      bgc: '#8797b3',
      bg: 'bg.png',
      title: 'en-title.png',
      question: 'en-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN5.mp4'],
    },

    scene6: {
      bgc: '#a8b4c1',
      bg: 'bg.png',
      title: 'en-title.png',
      question: 'en-question.png',
      posters: ['poster.png'],
      videos: ['https://www.hytera.com/html/video/EN6.mp4'],
      btnMore: 'en-btn-more.png',
      more: './trial.html',
    },
  },
};

export default function getResource({ publicPath, lang }) {
  const resource = data[lang];
  const images = [];
  for (const key in resource) {
    const value = resource[key];
    if (typeof value === 'object') {
      for (const ckey in value) {
        const cvalue = value[ckey];
        if (typeof cvalue === 'string') {
          if (cvalue.match(/\.(png|jpg|gif)$/)) {
            const url = `${publicPath}img/${key}/${cvalue}`;
            resource[key][ckey] = url;
            images.push(url);
          }
        } else if (Array.isArray(cvalue)) {
          resource[key][ckey] = cvalue.map((string) => {
            if (string.match(/\.(png|jpg|gif)$/)) {
              const url = `${publicPath}img/${key}/${string}`;
              images.push(url);
              return url;
            }
            return string;
          });
        }
      }
    }
  }

  return {
    resource, images,
  };
}
