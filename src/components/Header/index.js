import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
       <header className={black ? 'black' : ''}>
           <div className="header--logo">
               <a href='/'>
                   <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"  alt="Netflix"/>
               </a>
           </div>   
           <div className="header--user">
               <a href="/">
                   <img src="http://files.cod3r.com.br/curso-web/imagem3.png" alt="avatar"/>
               </a>
           </div>
       </header>
    );
}

