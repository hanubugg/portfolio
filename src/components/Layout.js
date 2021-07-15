import * as React from "react"

import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="mx-auto md:w-50 container py-20 px-4">
                <button id="theme" className="text-sm float-right border-2 border-gray-200 rounded-full px-6 py-3 uppercase tracking-widest text-gray-400 hover:border-indigo-500 hover:text-indigo-500">&#9728; Light</button>

                <div className="mt-20">
                    {children}
                </div>

                <Helmet>
                    <script src="/theme.js" type="text/javascript"></script>
                </Helmet>
            </div>
        </div>
    )
}

export default Layout