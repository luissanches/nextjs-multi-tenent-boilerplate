import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import moment from 'moment'



const fetcher = (url) => fetch(url).then((res) => res.json())

function SignUp({ data, today }) {
    let [count, setCount] = useState(0)
    //   const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)
    //   if (error) return <div>failed to load</div>
    //   if (!data) return <div>loading...</div>
    // alert(JSON.stringify(data))
    return (
        <div>
            <Head>
                <title>Multi Tenent Application [sign up]</title>
            </Head>
            <h1>Next Test {data.name}</h1>
            <p>count: {count}</p>
            <p>date: {today}</p>
            <button onClick={() => setCount(count + 1)}>ok</button>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const data = await fetcher('https://nextjs-multi-tenent-boilerplate.vercel.app/api/users')
    let today = moment().format('DD/MM/YYYY - HH:mm:ss')
    return {
        props: {
            today,
            data
        },
        revalidate: 3
    }
}


export default SignUp