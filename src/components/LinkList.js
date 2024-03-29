import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

const LINKS_QUERY =  gql`
  {
    links {
      id
      url
      description
    }
  }
`;


class LinkList extends React.Component {
	render(){
		return(
			<Query query={LINKS_QUERY}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>
					if (error) return <div>Error</div>
	
					const linksToRender = data.links
	
					return (
						<div>
							{linksToRender.map(link => <Link key={link.id} link={link} />)}
						</div>
		  			)
				}}
	  		</Query>
		)
	}
}

export default LinkList