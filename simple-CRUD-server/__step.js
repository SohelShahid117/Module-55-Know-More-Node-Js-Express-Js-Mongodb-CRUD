/*
*********************server side---CREATE******************
A.MongoDB Connection
1.create an account with Google/MongoDB SignUP form
2.create an user with password
3.whitelist IP address
4.database>connect>driver>node>show all code
5.change the password of URI


B.Create-POST
1.app.post()
2.make the function async to use await inside it
3.make sure I use the middleware app.use(express.json()),app.use(cors())
4.access data from the body:  const user = req.body
5.const result = await userCollection.insertOne(user)
6.res.send(result)

*******************client side---CREATE*********************

    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users added successfully");
        }
      });
  };
  1.create fetch with url of server 
  2.add second parameter in fetch as an object
  3. provide method:"POST"
  4.add headers: {"Content-Type": "application/json",},
  5.add body: JSON.stringify(user),





**************READ-Server site*****************
1.create a result,const result = await usersCollection.find().toArray()
2.res.send(result)

****************READ-Client site***************
1.fetch data using loader at main.jsx,loader: () => fetch("http://localhost:5001/users"),
2.use,const users = useLoaderData(); to collect data at Users.jsx
  console.log(users);




*****************Server-Site----DELETE*******************
1.create    app.delete('/users/:id',async(req,res)=>{
            const id = req.params.id
            console.log('please delete from database',id)
            const query = { _id:new ObjectId(id)};
            const result = await usersCollection.deleteOne(query);
            res.send(result)
    })
*****************Client-Site----DELETE*******************
1.   const handleDelete = (id) => {
    console.log("delete is", id);
    fetch(`http://localhost:5001/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
        }
      });
  };
*/