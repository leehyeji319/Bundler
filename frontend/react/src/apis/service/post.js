/*
  응답결과(데이터)를 정제 해주는 함수 정의


const getPostList = (rawPost) => {
  return rawPost.map(({ title, author, comments, image, imagePublicId, _id, likes }) => {
    return {
      title: author.email,
      content: title,
      comments: comment.length > 0 ? comments : "",
      avatar: author.image ? author.image : "https://josechmoe.io/api/v1/random",
      href: "https://ant.design",
      imagePublicId,
      image,
      postId: _id,
      authorid: author._id,
      likes,
    };
  }); // data 정제
};

const getCleanUserInfo = (rawUserInfo) => {
  const { email, userName, notifications } = rawUserInfo.user;
  return {
    email,
    name: userName,
    notifications: notifications.length > 0 ? notifications : null,
  };
};

export { getPostList, getCleanUserInfo };

component 사용 예시

const componentFunction = async () => {
  await getPostList(
    ({ data }) => {
      store 저장 또는 함수 실행
    },
    (error) => {
      console.log(error);
    }
  );
};

const [postList, setPostList] = useState([])

  (async () => {
    await getPost(selectedChannel)
      .then(getPostList)
      .then((res) => setPostList(res))
})()

*/
