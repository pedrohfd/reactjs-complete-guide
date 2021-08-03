import { Fragment } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Pedro', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Pedro Henrique', text: 'Learning React is great!' },
]

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.path}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
