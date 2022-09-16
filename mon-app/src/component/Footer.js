import logo from './logo.svg';

export default function Footer() {
    return (
        <div className="bg-blue-200 text-black ">
            <div className="bg-blue-500
             text-3m text-white text-center
             fixed
             bottom-0
             md:px-10 xl:px-40 py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <img src={logo} className="App-logo" alt="logo" width="30%" height="30%"/>
                </div>
                <div className="flex row content-between gap-8">
                    <a className="flex items" href="/">Contact</a>
                    <a className="flex " href="/">Mentions légales</a>
                    <a className="block" href="/">Copyright</a>
                    <a  className="block" href="/">RGPD</a>
                </div>
                
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
