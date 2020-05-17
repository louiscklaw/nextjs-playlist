import Router from 'next/router'

function ReadMore() {
  return (
    <div>
      Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>
  )
}

export default ReadMore
