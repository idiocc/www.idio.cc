const Next = () => (<a href="#">Next Page</a>)

const Component = ({ data = [] }) => {
  return (<div> {
    data.map((i, j) => {
      if (j > 10) return <Next />
      return i
    })
  }
  </div>)
}