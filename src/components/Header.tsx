
function Header() {
    return (
        // <div className="navbar bg-base-100">
        //     <div className="flex-none">
        //         <button className="btn btn-square btn-ghost">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        //         </button>
        //     </div>
        //     <div className="flex-1">
        //         <a className="btn btn-ghost text-xl">Life Organizer</a>
        //     </div>
        //     <div className="flex-none">
        //         <button className="btn btn-square btn-ghost">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        //         </button>
        //     </div>
        // </div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Your Life</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a></a></li>
                    <li>
                        <details>
                            <summary>
                                change view
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Day View</a></li>
                                <li><a>Week View</a></li>
                                <li><a>Month View</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
