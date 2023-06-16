import {useState, useEffect} from 'react';
const Users = () =>{
    const [allUser, setAllUser] = useState([]);
    

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=20").then((res)=>res.json()).then((data)=>{
            
           
            setAllUser(data.results);
        })
    },[])
   

    return(
        <div>
            <div>
                <h3>User Details</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <input type="radio" id="all" name="radiobtn"/>
                <label htmlFor="all">All</label>
                <input type="radio" id="male" name="radiobtn"/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="radiobtn"/>
                <label htmlFor="female">Female</label>
            </div>
            <div className="table_container">
            <table rules="row" id="user_table">
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((item, id)=>{
                                console.log(item);
                                return(
                                    <tr key={id}>
                                        <td><img src={item.picture.thumbnail} alt={item.name.first}/></td>
                                        <td>{item.name.first}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                    </tr>
                                )
                            })
                        }

                        
                    </tbody>
                    
                
            </table>

            </div>
            
        </div>
    );
}
export default Users;