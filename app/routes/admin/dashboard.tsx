import Header from "components/Header"

const Dashboard = () => {
  const user = {name: 'Adrian'};

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'}`}
        description="Track activity, trends and popular destinations in real time"
      />
      All Dashboard Page Contents
    </main>
  )
}

export default Dashboard