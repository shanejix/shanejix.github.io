

const defaultPosts = [
  {
    id: '1',
    title: '如何找到时薪 80 美元的远程工作（一）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '2',
    title: '如何找到时薪 80 美元的远程工作（二）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（三）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（四）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（五）',
    time: '2018-15-56',
    tags: 'job',

  },
  {
    id: '3',
    title: '如何找到时薪 80 美元的远程工作（六）',
    time: '2018-15-56',
    tags: 'job',

  },
]


export default (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':

      return [...state, ...action.payload]

    default:
      return state
  }
}