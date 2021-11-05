import React, { memo, useEffect, useState } from 'react'

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Twitter(props) {
    const { loading } = props
    const { tweet, setTweet } = useState('title')

    // equivalente ao componentDidMount - será executado somente uma vez
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts);
        console.log('componentDidMount: loading', loading);
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading);
    }, [loading])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: fui removido :(');
        }
    })

    const handleTweet = () => {
        setTweet('Tweet atualizado')
    }

    console.log('Tweet ataualizado', tweet);
    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
            Hello ReactJS
        </div>
    )
}

export default memo(Twitter, areEqual)