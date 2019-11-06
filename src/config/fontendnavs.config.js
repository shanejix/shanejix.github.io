import reactLogo from '../assets/react.svg'
import reactRouterLogo from '../assets/react-router.svg'
import antdLogo from '../assets/antdesign.svg'
import nextLogo from '../assets/next.svg'
import githubLogo from '../assets/github.png'
import devLogo from '../assets/dev.png'
import mdnLogo from '../assets/mdn.png'
import reduxLogo from '../assets/redux.png'
import mobxLogo from '../assets/mobx.png'
import webpackLogo from '../assets/webpack.svg'
import gulpLogo from '../assets/gulp.png'
import babelLogo from '../assets/babel.svg'
import typescriptLogo from '../assets/typescript.png'
import javascriptLogo from '../assets/javascript.jpg'
import lessLogo from '../assets/less.png'
const fontendnavs = [

  //说明
  {
    tag: 'ReadMe',
    id: '',
    list: []

  },

  // 最常浏览的网站
  {
    tag: 'Top Site',
    id: '0',
    list: [
      {
        title: 'GitHub',
        desc: 'library...',
        img: githubLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://github.com/'
          },
        ]
      },
      {
        title: 'Dev.To',
        desc: 'code...',
        img: devLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://dev.to/'
          }
        ]
      },
      {
        title: 'MDN',
        desc: 'consult...',
        img: mdnLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://developer.mozilla.org/zh-CN/'
          }
        ]
      }
    ]
  },
  // React生态
  {
    tag: 'React Ecological',
    id: '1',
    list: [
      {
        title: 'React',
        desc: 'React is a JavaScript library for creating user interfaces',
        img: reactLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://reactjs.org/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/facebook/react'
          }
        ]
      },
      {
        title: 'React-Router',
        desc: 'Declarative routing for React .........',
        img: reactRouterLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://reacttraining.com/react-router/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/ReactTraining/react-router#readme'
          }
        ]
      },
      {
        title: 'Ant Design',
        desc: 'An enterprise-class UI design language and React UI library.',
        img: antdLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'http://ant.design/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/ant-design/ant-design'
          }
        ]
      },
      {
        title: 'Ant Dedsign Pro',
        desc: 'Ant Dedsign React UI library Pro................',
        img: antdLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://pro.ant.design/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/ant-design/ant-design-pro/'
          }
        ]
      },
      {
        title: 'Umi',
        desc: 'Pluggable enterprise-level react application framework.',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://umijs.org/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/umijs/umi'
          }
        ]
      },
      {
        title: 'Dva',
        desc: 'Official React bindings for dva, with react-router@4.',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://dvajs.com/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/dvajs/dva'
          }
        ]
      },
      {
        title: 'Next',
        desc: 'The React Framework for xxx ..........',
        img: nextLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://nextjs.org/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/zeit/next.js'
          }
        ]
      },

    ]
  },
  // 状态管理工具
  {
    tag: 'State Management',
    id: '2',
    list: [
      {
        title: 'Redux',
        desc: 'Redux is a predictable state container for JavaScript apps.',
        img: reduxLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'http://redux.js.org/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/reduxjs/redux'
          }
        ]
      },
      {
        title: 'MobX',
        desc: 'Simple, scalable state management.........',
        img: mobxLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://mobx.js.org/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/mobxjs/mobx'
          }
        ]
      },

    ]
  },
  // 编译构建
  {
    tag: 'Compile and build',
    id: '2',
    list: [
      {
        title: 'Webpack',
        desc: 'webpack is a module bundler. Its main purpose is ...',
        img: webpackLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://github.com/webpack/webpack'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/webpack/webpack'
          }
        ]
      },
      {
        title: 'Gulp',
        desc: 'Automation,Platform-agnostic,Strong Ecosystem',
        img: gulpLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://gulpjs.com/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/gulpjs/gulp'
          }
        ]
      },
      {
        title: 'Babel',
        desc: 'Babel is a JavaScript compiler........',
        img: babelLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://babeljs.io/'
          },
          {
            name: 'GitHub',
            type: 'github',
            url: 'https://github.com/babel/babel'
          }
        ]
      },

    ]
  },
  //React 需要掌握的神奇工具
  {
    tag: 'React efficient tools',
    id: '2',
    list: [
      {
        title: 'webpack-bundle-analyzer',
        desc: "Webpack plugin and CLI utility that represents  ...",
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/webpack-contrib/webpack-bundle-analyzer'
          },
        ]
      },
      {
        title: 'React-Proto',
        desc: 'React application prototyping tool for ...',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/React-Proto/react-proto'
          },
        ]
      },
      {
        title: 'Why Did You Render',
        desc: 'why-did-you-render monkey patches React to notify ...',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/welldone-software/why-did-you-render'
          },
        ]
      },
      {
        title: 'Create React App',
        desc: 'Set up a modern web app by running one command',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/facebook/create-react-app'
          },
        ]
      },
      {
        title: 'React Redux',
        desc: 'Official React bindings for Redux.Performant and flexible',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/reduxjs/react-redux'
          },
        ]
      },
      {
        title: 'React-Lifecycle-Visualizer',
        desc: 'Real-time visualizer for React lifecycle methods',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/Oblosys/react-lifecycle-visualizer'
          },
        ]
      },
      {
        title: 'Guppy',
        desc: 'A friendly application manager and task runner for React.js',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/joshwcomeau/guppy'
          },
        ]
      },
      {
        title: 'React Developer Tools',
        desc: 'An extension that allows inspection of React comp...',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/facebook/react-devtools'
          },
        ]
      },
      {
        title: 'Bit',
        desc: 'Components are building blocks. You are the architect.',
        img: '',
        actions: [
          {
            name: 'home',
            type: 'home',
            url: 'https://bit.dev/'
          },
        ]
      },
      {
        title: 'Storybook',
        desc: 'Build bulletproof UI components faster',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://storybook.js.org/'
          },
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/storybookjs/storybook'
          },
        ]
      },
      {
        title: 'React Sight',
        desc: 'VISUALIZE YOUR REACT APPLICATIONS',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://www.reactsight.com/'
          },
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/React-Sight/React-SightChromeExt'
          },
        ]
      },
      {
        title: 'React-cosmos',
        desc: 'A tool for ambitious UI developers ',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/react-cosmos/react-cosmos'
          },
        ]
      },
      {
        title: 'CodeSandbox',
        desc: 'The online code editor for xxxx Web',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://codesandbox.io/'
          },
        ]
      },
      {
        title: 'React bits',
        desc: 'A compilation of React Patterns, techniques, tips and tricks.',
        img: '',
        actions: [
          {
            name: 'Book',
            type: 'book',
            url: 'https://vasanthk.gitbooks.io/react-bits/'
          },
        ]
      },
      {
        title: 'Folderize',
        desc: 'Easily convert a Javascript file into a folder with an index file...',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://marketplace.visualstudio.com/items?itemName=ee92.folderize'
          },
        ]
      },
      {
        title: ' React Starter Projects',
        desc: 'These are repositories that you copy and modify to create ...',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://www.javascriptstuff.com/react-starter-projects/'
          },
        ]
      },
      {
        title: 'React Diff Viewer',
        desc: 'A simple and beautiful text diff viewer made with Diff and React.',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://praneshravi.in/react-diff-viewer/'
          },
        ]
      },
      {
        title: 'JS.coach',
        desc: 'Search for components, boilerplates, generators...',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://js.coach'
          },
        ]
      },
      {
        title: 'Awesome React',
        desc: 'A collection of awesome things regarding React ecosystem',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/enaqx/awesome-react'
          },
        ]
      },
      {
        title: 'Proton Native',
        desc: 'A React environment for cross platform native desktop apps',
        img: '',
        actions: [
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/kusti8/proton-native'
          },
        ]
      },
      {
        title: 'Devhints React.js Cheatsheet',
        desc: 'A good react quick reference table...',
        img: '',
        actions: [
          {
            name: 'Book',
            type: 'book',
            url: 'https://devhints.io/react'
          },
        ]
      },


    ]
  },
  //css相关
  {
    tag: 'CSS',
    id: '2',
    list: [
      {
        title: 'less',
        desc: "It's CSS, with just a little more.",
        img: lessLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'http://lesscss.org/'
          },
          {
            name: 'Book',
            type: 'book',
            url: 'https://github.com/less/less-docs'
          },
        ]
      },


    ]
  },
  //新技术
  {
    tag: 'Looking forward to the future',
    id: '2',
    list: [
      {
        title: 'TypeScript',
        desc: 'TypeScript is a language for application-scale JavaScript. ...',
        img: typescriptLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'http://www.typescriptlang.org/'
          },
          {
            name: 'Book',
            type: 'book',
            url: 'http://www.typescriptlang.org/docs/home.html'
          },
          {
            name: 'Github',
            type: 'github',
            url: 'https://github.com/Microsoft/TypeScript'
          },
        ]
      },


    ]
  },

  //教程和周报
  {
    tag: 'Tutorials and weekly newspapers',
    id: '2',
    list: [
      {
        title: 'JavaScript Weekly',
        desc: 'A free, once–weekly email roundup of JavaScript news and articles.',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://javascriptweekly.com/'
          },

        ]
      },
      {
        title: 'Pony Foo Weekly',
        desc: 'A newsletter about the open web, highlighting the most important news...',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://ponyfoo.com/weekly'
          },

        ]
      },

      {
        title: 'React Status',
        desc: 'A weekly roundup of the latest React and React Native links and tutorials.',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://react.statuscode.com/'
          },

        ]
      },
      {
        title: 'Css Weekly',
        desc: 'weekly e-mail roundup of css articles, tutorials, experiments and tools',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://css-weekly.com/'
          },

        ]
      },
      {
        title: 'Node Weekly',
        desc: 'A free, once–weekly e-mail round-up of Node.js news and articles.',
        img: '',
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://nodeweekly.com/'
          },

        ]
      },
      {
        title: 'The Modern JavaScript Tutorial',
        desc: 'From the basics to advanced topics with simple, but detailed explanations.',
        img: javascriptLogo,
        actions: [
          {
            name: 'Home',
            type: 'home',
            url: 'https://javascript.info/'
          },

        ]
      },


    ]
  },

  //其他
  {
    tag: 'Other',
    id: '2',
    list: [
      // {
      //   title: 'less',
      //   desc: "It's CSS, with just a little more.",
      //   img: lessLogo,
      //   actions: [
      //     {
      //       name: 'Home',
      //       type: 'home',
      //       url: 'http://lesscss.org/'
      //     },
      //     {
      //       name: 'Book',
      //       type: 'book',
      //       url: 'https://github.com/less/less-docs'
      //     },
      //   ]
      // },


    ]
  },

]

export default fontendnavs