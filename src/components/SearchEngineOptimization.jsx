import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import * as React from "react"

const SearchEngineOptimization = ({ title, description }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        defaultDescription,
        siteURL
    } = site.siteMetadata

    const SEO = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${ siteURL }${ pathname }`
    }

    return (
        <Helmet title={ SEO.title }>
            <meta name="description" content={ SEO.description } />
            
            { SEO.url && <meta property="og:url" content={ SEO.url } /> }
            {SEO.title && <meta property="og:title" content={ SEO.title } />}

            { SEO.description && <meta property="og:description" content={ SEO.description } /> }
        </Helmet>
    )
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteURL: url
            }
        }
    }
`

SearchEngineOptimization.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

SearchEngineOptimization.defaultProps = {
    title: null,
    description: null
}

export default SearchEngineOptimization
