import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import moment from 'moment'



const fetcher = (url) => fetch(url).then((res) => res.json())

function Login({ data, today }) {
    let [count, setCount] = useState(0)
    return (
        <div>
            <Head>
            <title>Multi Tenent Application [login]</title>
            </Head>
            <h1>Next Test {data.name}</h1>
            <p>count: {count}</p>
            <p>date: {today}</p>
            <button onClick={() => setCount(count + 1)}>ok</button>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    let today = moment().format('DD/MM/YYYY - HH:mm:ss')
    const data = await fetcher('https://nextjs-multi-tenent-boilerplate.vercel.app/api/users')
    return {
        props: {
            today,
            data
        }
    }
}


export default Login