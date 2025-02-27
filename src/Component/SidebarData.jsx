import React from 'react'

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData =[
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',

    },

    {
        title: 'Transactions',
        path:'/transactions',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },
    {
        title: 'Budgets',
        path:'/cultural',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },
    {
        title: 'General Ledger',
        path:'/others',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },
    {
        title: 'Team',
        path:'/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',

    },
    {
        title: 'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',

    },
]