
Queue.getInitialProps = async ({ query }) => {
  const {color} = query
  return {color}
}

export default function Queue({color}) {
    return (
      <h2>จองคิวแมว {color}</h2>
    )
}