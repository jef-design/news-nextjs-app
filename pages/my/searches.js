import Head from 'next/head'
import Image from 'next/image'

function Searches() {
    return (
        <section>
            <Head>
                <title>Google News - Saved searches</title>
            </Head>
            <div className="mb-4">
                <ul className="text-lg flex">
                    <li className="mr-4">Topics & Sources</li>
                    <li className="mr-4">Saved searches</li>
                    <li>Saved stories</li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="py-2 border-b mb-5 text-lg">Topics</h2>

                <div className="page-card">
                <Image
                    src="https://lh3.googleusercontent.com/o_tai07eFNo8w2jfrZY_vh2Mv3DnrgXM1Ven6HBYn4vFxe949KwJgvAhYdq2Hmr4C_5jUbkkn84=-rw"
                    alt="Search card"
                    height={150}
                    width={150}
                    />
                    <p>Your saved searches will appear here.</p>
                </div>
            </div>

           

        </section>
    )
}

export default Searches
