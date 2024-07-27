let number = [1,2,3,4,5,6,7,8,9,10]
// let remainingNum =number.filter((n)=>n>5)
let remainingNum =number.filter((n)=>n!==5)
console.log(remainingNum) 

let users =[  
{_id: '66a4532a28784825b7d958d5', name: 'sohel', email: 'sohelshahideee09@gmail.com'},
{_id: '66a4533428784825b7d958d6', name: 'mamaiii', email: 'mamooooa@mami.com'},
{_id: '66a4533428784825b7d958d7', name: 'mamoooa', email: 'mamoooa@mami.com'},
{_id: '66a4533428784825b7d958d8', name: 'maiiima', email: 'maiiiima@mami.com'}
]

let reamingUsers = users.filter((u)=>u._id !=='66a4533428784825b7d958d6')
console.log(reamingUsers)