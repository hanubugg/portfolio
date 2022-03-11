import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SearchEngineOptimization from "../components/SearchEngineOptimization"

const NotFoundPage = () => {
	return (
		<Layout>
			<SearchEngineOptimization title="404 — Hanu Asfaw" />

			<p>Four-oh-Four: File not found.</p>

			<p>So so so sorry, but the page you requested cannot be found. Poof! The page is gone. Vanished. Disappeared without a trace. 'Tis a shame!</p>

			<p>Or maybe it was never here to begin with...</p>

			<p>Regardless, you can <Link to="/">find your way back home here.</Link></p>
		</Layout>
	)
}

export default NotFoundPage
