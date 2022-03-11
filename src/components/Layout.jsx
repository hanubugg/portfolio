import * as React from "react"

const Layout = ({ children }) => {
	return (
		<div className="bg-white">
			<div className="mx-auto md:w-50 container pb-16 pt-10 px-4">
				<div className="mt-20">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout
