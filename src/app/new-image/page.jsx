import React from 'react'
import NewImage from '@/components/NewImage'
import Navbar from '@/components/Navbar'

const NewImages = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <NewImage />
            </main>
        </>
    )
}

export default NewImages