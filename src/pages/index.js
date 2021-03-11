import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import moment from 'moment'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Home() {
  let [count, setCount] = useState(0)
  const { data, error } = useSWR('https://nextjs-multi-tenent-boilerplate.vercel.app/api/users', fetcher)
  let today = moment().format('DD/MM/YYYY - HH:mm:ss')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <Head>
        <title>Multi Tenent Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next Test {data.name}</h1>
      <p>count: {count}</p>
      <p>date: {today}</p>
      <button onClick={() => setCount(count + 1)}>ok</button>
    </div>
  )
}


export default Home