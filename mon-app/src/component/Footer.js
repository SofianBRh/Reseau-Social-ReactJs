import React from 'react';
import logo from './image/logo-react-icon.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
            <div className="bg-blue-400
             text-3xl text-black text-center
             bottom-0
             grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
             w-full py-6">
                <div className="px-40 h-20">
                <NavLink to="/">
               <img src={logo} className="App-logo" alt="logo" style={{width: 50, height: 50}}/>  
               </NavLink>
               </div>
             
                <div className="flex row content-between gap-10">
              
                    <a className="" href="/">Contact</a>
                    <a className=" " href="/">Mentions légales</a>
                    <a className="" href="/">Copyright</a>
                    <a  className="" href="/">RGPD</a>
                </div>
            </div>

    );
}





// import React from 'react';
// import logo from './logo.svg';


// const Footer =  () => {


//     return (
//         <footer className="bg-bleu text-black">
//             <div className="md:flex md:justify-beween md:items-center sm:px-12px
//              px-4 bg black py-7">
//                 <img src={logo} className="App-logo " alt="logo" width="30%" height="30%"/>
//                 <a ref="#" className="lg:text-4x1 md:mb-0 mb-6 lg:leading-normal font-semibold
//                 md:w-2/5"></a>

        
        
//              </div>
            


//         </footer>
//     );
// }
//     export default Footer;
