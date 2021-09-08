//参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const myProfile = {
  name: "なおちょ",
  age: 23
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;

console.log(message1);

// 上記だと「myProfile.なんちゃら」と冗長なコードになってしまうが,
// 分割代入を用いると以下のように指定のプロパティ(例:name,age)を取り出すことが出来る。
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です`;
console.log(message2);

//因みにオブジェクトのみならず配列でも分割代入は出来る
const myProfile2 = ["なおちょ", 23];
const message3 = `名前は${myProfile2[0]}。年は${myProfile2[1]}や。`;
console.log(message3);

//配列の要素が順番に入ってくる。（最初の要素が最初(name)に入る！）
const [name1, age2] = myProfile2;
const message4 = `名前は${name1}。年は${age2}や。`;
console.log(message4);
