import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cx from "classnames";

import style from "./detail.module.css";

import marked from "marked";
import hljs from "highlight.js";

const defaultArticle = {
  body: `涉及的面试题目

  - 项目中最得意的模块以及实现思路？
  - 根据时间戳和是时间格式得到一个时间？
  - Ajax有那几个转态分别代表什么？
  - 如何实现Ajax跨域？
  - JavaScript中的内置对象有那些？
  - 如何遍历json？
  - 能发送请求的标签有那些？
  - 能实现跳转的标签有那些？=>路由原理
  - BOM对象有那些API？
  
  以上罗列是按照面试顺序罗列，虽然看似简单，但是面试官（因该是部门大佬）展开的内容比较多，基本上拓宽了问还会问道底层的实现，以及出现问题和思考问题的逻辑以及解决问题的能力。全程懵逼，问道最后自卑+999。为了找回信心，写篇文章查漏补缺~~~
  
  为什么说状态极差呢？下午两点半到公司，加上这些天睡眠严重不足，老戴都是昏昏沉沉的，所以很多东西都是内心有点抗拒去思考！下面说说具体的题目
  
  
  
  讲一讲项目中最得意的模块？
  
  这是到送命题，不管你说什么，总有很多的东西可以被拓展到。被问到这问题是，我也是一脸懵逼，之前也没有碰到过类似的发问，所以就支支吾吾的很慌，说了下前几天的做的日历组件。磨合变天进入第二题
  
  
  
  如何根据时间戳和时间格式得到一个时间数据？
  
  应该是我没有听清他说的内容，但是大概就是这个意思。
  
  我的思路：将时间戳解析出年月日将时间格式解析成模板，然后拼接成时间数据返回
  
  但是，面我的大佬，沉默不语，貌似不是这么回事，气氛十分尴尬
  
  
  
  说下Ajax的几种状态？
  
  来到第三题，
  
  有几种转态？
  
  我答：01234
  
  分别代表什么意思？
  
  我答：0未始化，未调用open方法；1初始化，调用open()方法；2发送，调用send()；3接收到头信息；4接收完成
  
  然后问了反问我：3既然是接收头信息，那么确定接收到了数据，搅和了半天，他说我的状态记错了。并且告知我没有解决问题的能力；4是接收到数据纳闷3应该是接收到体，依次往上0应该是初始化，这是按照他的推理；唉，我当时一脸懵逼，也不敢反驳，练练点头。回来翻了高程，证实我说的没有错！！！
  
  ![1567656983953](https://user-images.githubusercontent.com/38394743/64312719-c1ef8c80-cfdb-11e9-88cc-745069d62a86.png)
  
  
  
  
  如何实现Ajax跨域？
  
  这个当时瞎写的通过设置头信息配合后端使用CORS进行跨域，但是前天设置头没有用。需要后台设置头所以不行
  
  可行的思路是可以用jsonp实现，写的时候没有反应过来，唉，可惜！
  
  下面是搜索的到的相关资料：
  
  ajax跨越方案：https://segmentfault.com/a/1190000012469713
  
  cors：http://www.ruanyifeng.com/blog/2016/04/cors.html
  
  
  
  JavaScript中的内置对象有那些？
  
  这个没啥说的，但是我当时脑袋短路了，没说完
  
  内置对象包含：
  
  - Number
  - String
  - Boolean
  - Array
  - Math
  - Date
  - Object
  - Error
  - Global
  - Function
  - RegExp
  - JSON
  
  
  
  如何遍历json？
  
  我的回答
  
  - for-in
  
  - Object.keys+for
  
  - for-of
  
  
  
  能发送请求的标签有那些？
  
  我的回答：
  
  - a
  - img
  - script
  - link
  - audio
  - video
  
  反问还有没有？
  
  一脸懵逼，后来回忆起来真是惭愧，form表单这么重要的都没说上，难受！
  
  
  
  能实现跳转的标签有那些？
  
  我只答了a标签，然后又是一片沉默，尴尬
  
  然后问了a标签的实现原理？？？？
  
  后面，差了下a能实现跳转因该是href属性起到的作用：window.location.href；所以下面问了我BOM对象
  
  
  
  BOM对象有那些API？
  
  这个没有答完
  
  - navigator
  - location
  - history
  - screen
  - window
  
  
  
  **总结**
  
  - 通过这次面试发现html和css很多东西都是只知道皮毛，没有深入原理
  
  - 浏览器BOM对象了解甚少
  
  `,
  id: 500868903,
  labels: [],
  time: "2019-10-01T12:40:28Z",
  title: "记一次状态极差的面试"
};

class Detail extends React.Component {
  componentWillMount() {
    // marked相关配置
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  render() {
    let article = {};

    const { posts } = this.props;

    const { id } = this.props.match.params;

    if (posts.length) {
      article = posts.filter(post => {
        return Number(post.id) === Number(id);
      })[0];
    } else {
      article = defaultArticle;
    }

    // article = this.state.article || defaultArticle;

    return (
      <div className={style.detail}>
        <h2 className={style.title}>{article.title}</h2>
        <p className={style.info}>
          <span>{article.time}</span>
          <span>tags</span>
        </p>
        <div className="content">
          <div
            id="content"
            className={cx(style.content, "article-detail")}
            dangerouslySetInnerHTML={{
              __html: article.body ? marked(article.body) : null
            }}
          />
        </div>

        <p className={style.comment}>如果你看不到评论，说明你没有科学上网</p>
      </div>
    );
  }
}

const mapStaeToProps = state => {
  return {
    posts: state.posts
  };
};

export default withRouter(
  connect(
    mapStaeToProps,
    null
  )(Detail)
);
