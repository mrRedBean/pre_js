const foo = "javascript"
console.log(foo)
let mean = "プログラム言語"
console.log(mean)
// level１
const posts = [
    {
        name: "太郎",
        age: 21,
        likes: "apple",
        isPublished: true,
    },
    {
        name:"太田",
        age:18,
        likes: "banana",
        isPublished:false,
    },
    {
        name:"小林",
        age:22,
        likes:"coffee",
        isPublished:true,
    }
];

console.log(posts[2].likes)
console.log(posts[0].name)
console.log(posts[1].name)

// level２ アロー関数;
const add = (a,b) => {
    return a + b;
};
console.log(add(2,3)); 

const multiply = (c,d) => c * d;
console.log(multiply(3,4));

// level３　モダン構文;
// １：テンプレートリテラル
const name2 = "翔太"
const greeting = `こんにちは ${name2} さん！！`;
console.log(greeting)
// ２：分割代入
const user = {name:"太田",age:20,city:"東京"}
// 昔
// const name3 = user.name; const age = user.age
// 今
const {name,age} = user;
console.log(name);
// スプレッド構文
const array1 = [1,2];
const array2 = [...array1,3,4];
console.log(array2)

const change1 = {name:"aaa", age:22};
const change2 = {...user,age:22,city:"大阪"};
console.log(change2)

// オプショナルチェーン（エラー防止）
const user2 = {
    name:"有門",
    address: {
        city:"",
        Number:"090",
    }
};
console.log(user2.address?.city);

// レベル４　配列メゾット
const numbers = [1,2,3];
const num_num = numbers.map((num) => num * 3)
console.log(num_num)

const ages =[12,29,50,69,79,99];
const adults = ages.filter((age) => age >= 50);
console.log(adults);

// レベル５　非同期処理
const Data = async() => {
    try {
        const response = await fetch("");
        const data = await response.json();
        console.log("取得成功！",data.name);
    }catch(error) {
        console.log("エラーが発生しました:",error);
    }
};

