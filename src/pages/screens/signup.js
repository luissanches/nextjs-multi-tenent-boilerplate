import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default SignUp = ({data}) => {
  let [count, setCount] = useState(0) 
//   const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)
//   if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <Head>
        <title>Create Next Yoston</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next Test {data.name}</h1>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1)}>ok</button>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetcher('http://localhost:3000/api/users')
  return {
    props:{
      name: data.name
    },
    revalidate: 10
  }
}