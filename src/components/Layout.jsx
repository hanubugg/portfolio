import * as React from "react";

const Layout = ({ children }) => {
	return (
		<div className="bg-white">
			<div className="mx-auto md:w-50 container pb-16 pt-14 px-4">
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
