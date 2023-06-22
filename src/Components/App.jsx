import React, { useState } from 'react';


const App=()=>{
    // const [name,setname]=useState();
    // const [fname,setfname]=useState();
    const [userinfo,setuserinfo]=useState({
        name:'',
        email:'',
        phone:'',
        add:''
    });
    const inp1=(event)=>{
        // setname(event.target.value);
        const {value,name}=event.target          //object destructuring is different from array destructuring.It is object destructuring.
        console.log(value);
        console.log(name);
        setuserinfo((previnfo)=>{
            return {
                ...previnfo,
                [name]:value
            };


            //The same below thing is just done with above two lines for any no of input fields with the help of {spread operator '...'}


            
            // if (name==='name'){
            //     return {
            //      name:value,
            //      email:previnfo.email,
            //      phone:previnfo.phone,
            //      add:previnfo.add
            //     };
            // }
            // else if (name==='email'){
            //     return {
            //      name:previnfo.name,
            //      email:value,
            //      phone:previnfo.phone,
            //      add:previnfo.add
            //     };
            // }
            // else if (name==='phone'){
            //     return {
            //      name:previnfo.name,
            //      email:previnfo.email,
            //      phone:value,
            //      add:previnfo.add
            //     };
            // }
            // else if (name==='add'){
            //     return {
            //      name:previnfo.name,
            //      email:previnfo.email,
            //      phone:previnfo.phone,
            //      add:value
            //     };
            // }
        
        });
        };

    const onSubmits=(event)=>{
        event.preventDefault();
        // setfname(name);
    };

    return (
        <>
            <div className='main_div'>
                <form onSubmit={onSubmits}>
                    <div className='Card'>
                        <h1>Hello {userinfo.name} </h1>
                        <p>{userinfo.email}</p>
                        <p>{userinfo.phone}</p>
                        <p>{userinfo.add}</p>
                        <input 
                            type='text' 
                            placeholder='Enter your name'
                            onChange={inp1}
                            value={userinfo.name}
                            name='name'         //to know or identify which tag calls the function.
                        />
                        <input 
                            type='text' 
                            placeholder='Enter your email'
                            onChange={inp1}
                            value={userinfo.email}
                            name='email'         //to know or identify which tag calls the function.
                        />
                        <input 
                            type='number' 
                            placeholder='Enter your phone'
                            onChange={inp1}
                            value={userinfo.phone}
                            name='phone'         //to know or identify which tag calls the function.
                        />
                        <input 
                            type='text' 
                            placeholder='Enter your address'
                            onChange={inp1}
                            value={userinfo.add}
                            name='add'         //to know or identify which tag calls the function.
                        />
                        <button type='submit'>Click Me!</button>
                        {/* <input type='submit'/> */}
                    </div>
                </form>
            </div>
        </>

    );
};

export default App;