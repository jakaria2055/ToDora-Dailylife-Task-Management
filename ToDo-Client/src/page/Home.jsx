import React from 'react'
import Layout from '../component/layout/Layout'
import TaskList from '../component/task/TaskList'
import UserStore from '../store/UserStore'
import IsLogedoutSkeleton from '../skeleton/IsLogedoutSkeleton';

function Home() {
  const {isLogin} = UserStore();
  
  const isLogedin = isLogin();
  return (
    <>
    <Layout>
      {
        isLogedin? <TaskList /> : <IsLogedoutSkeleton />
      }
    </Layout>
    </>
  )
}

export default Home