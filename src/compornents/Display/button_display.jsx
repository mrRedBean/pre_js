import { useEffect,useState } from "react";

// このコンポーネントネントの見方。
// まず、const [loading,setLoading]を定義setLoadingは()内を行うよと呼び掛けて隣に渡すだけの人。
// これを書くにはuseStateが必須後ろの()によって初期値が決まる。
// 次、useEffectは[]に変化があったとき、{}内の処理を行うというもの。[]内が空なら最初だけ。
// この中は、setTimeout(() => {setLoading(false)},2000);つまり、2秒後に上記の処理を実行、
// 初期値のtrueからsetLoadingによってfalseにそしてloadingにfalseを渡す。
// 最後にreturn、timerに対してclearTimeoutを行う＝消す。ここまでがuseEffectの処理。これで今あるのは
// falseが入ったloadingだけ。そして2つ目のreturnでloadingが?=trueかfalseかで処理が変わる。
// ※[loading,setLoading]はべつに[a,aa]でもいい。状態を変更する関数はset〇〇が慣習。
// setTimeoutとclearTimeoutはセットのもの。他にもこんな感じのやつある。
function Display (props3) {

    const [loading,setLoading] = useState(true);
    useEffect (()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        },2000);

        return() => clearTimeout(timer)
    },[])

    return (
        <div>
            {loading ? "Loading..." : `カウント:${props3.count}`}
        </div>
    )
};

export default Display;