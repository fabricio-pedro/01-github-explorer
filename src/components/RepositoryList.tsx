import { useEffect, useState } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from './RepositoryItem';
//https://api.github.com/users/fabricio-pedro/repos
export function RepositoryList(){
    const [repositories,setRepositories]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/fabricio-pedro/repos')
        .then(response=>response.json())
        .then(data=>setRepositories(data));

    },[])
    console.log(repositories);
 return (
    <section className="repository-list">
        <h1>Lista de Repositorios</h1>
        <ul>
        {repositories.map(repository=>{
           return <RepositoryItem repository={repository} key={repository.name} /> 
        })}
        </ul>
    </section>

 )



}