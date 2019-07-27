import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/7b5f-fzyqqiq8228305.jpg"
    },
    {
      id: 2,
      title: "随便",
      imgUrl:
        "https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/7b5f-fzyqqiq8228305.jpg"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "树欲静而风不止，子欲养而亲不待!",
      desc:
        "对门的孟阿姨夜里突然走了，走的悄无声息，所有人都不知道，留下了自己五岁多的儿子和十岁多女儿，孟阿姨怎么突然走了，所有人都感到很意外。因为就在孟阿...",
      imgUrl:
        "http://www.chinesenzherald.co.nz/assets/Uploads/News/blog-24138/_resampled/FillWyI2MjAiLCIzMTAiXQ/1121958435-15107092545121n.jpeg"
    },
    {
      id: 2,
      title: "树欲静而风不止，子欲养而亲不待!",
      desc:
        "对门的孟阿姨夜里突然走了，走的悄无声息，所有人都不知道，留下了自己五岁多的儿子和十岁多女儿，孟阿姨怎么突然走了，所有人都感到很意外。因为就在孟阿...",
      imgUrl:
        "http://www.chinesenzherald.co.nz/assets/Uploads/News/blog-24138/_resampled/FillWyI2MjAiLCIzMTAiXQ/1121958435-15107092545121n.jpeg"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
