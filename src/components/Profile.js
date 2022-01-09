import React, {useState} from 'react';
import DisplayTable from './DisplayTable';

const Profile=()=>{

    const [data,setData]=useState([]);
    const [username,setUsername]=useState('');
    const [repos,setRepos]=useState([]);
    const onChangeHandler=(e)=>
    {
        setUsername(e.target.value);
        //console.log(username);
    }
    const submitHandler= async e=>
    {
        e.preventDefault();
        const profile=await fetch(`https://api.github.com/users/${username}`);
        const profileJson= await profile.json();
        //console.log(profile);
        //console.log(profileJson);
        const Repos=await fetch(profileJson.repos_url);
        const reposJson=await Repos.json();
        //console.log(reposJson)

        if(profileJson)
        {
            setData(profileJson);
            setRepos(reposJson);
        }
        //console.log(data);
        //console.log(repos);
    }
    return(
        <>
        
        <div style={{padding: 20}}>
            <div className="ui search">
                <div className='ui icon input'>
                    <i className="search icon"></i>
                    <input className="prompt" placeholder="search user" type="text" value={username} onChange={onChangeHandler} />
                </div>
            </div>
            <button className="ui primary button" type="submit" onClick={submitHandler}>
                <i className="github icon"></i>Search</button>
            
            <DisplayTable data={data} repos={repos} />
        </div>
        </>
    )
}
export default Profile;