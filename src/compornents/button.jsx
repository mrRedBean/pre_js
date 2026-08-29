function Profile({
    myname,
    age,
    job,
    birthplace,
    hobby,
    favoriteFood,
    favoriteSport,
    favoriteColor,
    email,
    introduction
}) {


    return (
        <>
            <h1>プロフィール</h1>
            <p>名前：{myname}</p>
            <p>年齢：{age}歳</p>
            <p>職業：{job}</p>
            <p>出身地：{birthplace}</p>
            <p>趣味：{hobby}</p>
            <p>好きな食べ物：{favoriteFood}</p>
            <p>好きなスポーツ：{favoriteSport}</p>
            <p>好きな色：{favoriteColor}</p>
            <p>メール：{email}</p>
            <p>自己紹介：{introduction}</p>
        </>
    )
};

export default Profile;