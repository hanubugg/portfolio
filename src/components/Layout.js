import * as React from "react"

const Layout = ({ children }) => {
    return (
        <div className="mx-auto w-50 py-32 px-4">
            {children}
        </div>
    )
}

export default Layout