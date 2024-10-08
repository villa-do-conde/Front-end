import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/Routes'

const SideMenu = ({menuItens}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`h-screen bg-white-main  ${isExpanded ? 'w-64' : 'w-20'} transition-width duration-300 left-0 top-0 flex flex-col items-center`}>

            <div className="my-4 flex flex-col items-center">
                <div className='flex flex-row'>

                    <img
                        src=""
                        alt="User/Project"
                        className={`rounded-full ${isExpanded ? 'w-24 h-24' : 'w-10 h-10'} transition-all duration-300`}
                    />
                    <button
                        onClick={toggleMenu}
                        className="mb-4 p-2 text-white bg-blue-pastel hover:bg-blue-main rounded-full transition-colors h-10"
                    >
                        {isExpanded ? '<' : '>'}
                    </button>
                </div>

                {isExpanded && <h2 className="text-white mt-2">Nome do Usuário</h2>}
            </div>

            <div className="mt-10 flex-grow flex flex-col justify-center items-center w-full">
                {menuItens.map((item, index) => (
                    // <Link
                    // key={index}
                    // to={routes.find(route => route.path === item.route)}
                    // className="w-full"
                    // >
                        <button key={index} className="flex items-center w-full px-4 py-3 my-2 text-white hover:text-blue-main">
                            {item.icon}
                            {isExpanded && <span className="ml-4 text-lg">{item.name}</span>}
                        </button>
                    // </Link> 
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
