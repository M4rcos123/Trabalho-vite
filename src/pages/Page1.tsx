import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { api } from '../services/api';
import './Page1.css'

interface Repo{
  html_url: string;
  name:string;
  description:string;
}

export function Page1() {
  const [ repos, setRepos ] = useState<Repo[]>([]);
  const [ search, setSearch ] = useState('');
  const [ filteredRepos, setFilteredRepos] = useState<Repo[]>([]);

  async  function listReposGit(){
    const resp = await api.get('repos');
    setRepos(resp.data);
  }

  useEffect(()=>{
    listReposGit();
  },[]);

  useEffect(()=>{
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)));
  },[search]);


  return (
    <>

<p>GitHub</p>
<p id='Cat'>''Toca do Gato''</p>

     <input 
        type="text" 
        name='search'
        placeholder='O que tu quer achar...'
        onChange={e => setSearch(e.target.value)}
      />
      
      { search.length> 0 ?(

           <ul>
           {filteredRepos.map(repo =>{
             return(

               <li key={repo.name}>
                 <a href={repo.html_url}>
                  {repo.name}
                  </a>
               </li>
             )
           })}
         </ul>

      ):(
        <ul>
        {repos.map(repo =>{
          return(
            <li key={repo.name}>
              <a href={repo.html_url}>
              {repo.name}
              </a>
            </li>
          )
        })}
      </ul>
      )}

    <Link to='/'>
      <button>Pesquisação</button>
    </Link>
    <Link to='/Page2'>
      <button>Pág 2</button>
    </Link>
    <Link to='/Page3'>
      <button>Tédio</button>
    </Link>
    </>
  )
}


