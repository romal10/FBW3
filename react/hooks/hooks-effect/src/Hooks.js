import React ,{ useState , useEffect} from 'react';

let postsUrl = "https://jsonplaceholder.typicode.com/posts"
let usersUrl = "https://jsonplaceholder.typicode.com/users"
function Photos() {
    const [data , setData ] = useState([]);
    const [users , setUsers] = useState([]);

    async  function fetchData(url,saveTo){
        const response = await fetch(url)
        response.json()
        .then( response =>  saveTo(response.slice(0,22)))
        .catch(err => console.log(err) )
        
    }

    useEffect ( () => {

  

        fetchData(postsUrl,setData);
        fetchData(usersUrl,setUsers);
     



    } ,[])
    console.log(data);
    console.log('users : ',users);
    let user_array=['Romal','Sergey','Wesam','Peter']
    let allData = data.map((item)=>{

        return <div className="card card-1" key={item.id}>
                 <span>{item.userId}</span><h3> {item.title} </h3>
                 <h4> by  {user_array[item.userId]} </h4>
                 <p> {item.body}</p>                 
               </div>
    } )   
    
    return( <div className="App">

             <h1>the Posts : </h1>
             
                {allData}
             

              

            </div>
          )

}


export default Photos;

