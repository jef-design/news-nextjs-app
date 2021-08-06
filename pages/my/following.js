import Head from 'next/head'

function Following() {

    return (
        <section>
            <Head>
                <title>Google News - Following</title>
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

                <div className="border rounded-lg p-5">

                </div>
            </div>
            <div className="mb-4">
                <h2 className="py-2 border-b mb-5 text-lg">Local</h2>

                <div className="border rounded-lg p-5">

                </div>
            </div>
            <div className="mb-4">
                <h2 className="py-2 border-b mb-5 text-lg">Sources</h2>

                <div className="border rounded-lg p-5">

                </div>
            </div>

        </section>
    );
}

export default Following;
