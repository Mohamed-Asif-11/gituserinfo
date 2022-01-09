import React from "react";

const DisplayTable=({data, repos})=>
{
    console.log(data);
    console.log(repos);
    return(
        <table className="ui celled table">
  <thead>
    <tr><th>Name</th>
    <th>Avatar</th>
    <th>Location</th>
    <th>Company</th>
    <th>Repositories</th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
      <td>{!data.avatar_url ? (" "):
      (<img className="ui small circular image" src={data.avatar_url} alt={data.avatar_url} />)}
      </td>
      <td>{data.location}</td> 
      <td>{data.company}</td>
      <td>{repos.map(repos =>
        (
            <div className="ui relaxed divided list" key={repos.name}>
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <a href={repos.html_url} 
                        className="header" 
                        target="_blank">{repos.name}</a>
                    </div>
                </div>
            </div>
        ))}</td>
      </tr>
    </tbody>
    </table>
    );
};
export default DisplayTable;