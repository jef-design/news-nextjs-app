import Head from 'next/head';
import Image from 'next/image'

function Following() {

    return (
        <section>
            <Head>
                <title>Google News - Following</title>
            </Head>
            <div className="mb-4">
                <ul className="text-lg flex border-b-2 pb-2 whitespace-nowrap overflow-hidden overflow-x-scroll">
                    <li className="mr-4 text-blue-600">Topics & Sources</li>
                    <li className="mr-4">Saved searches</li>
                    <li>Saved stories</li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="py-2 border-b mb-5 text-lg">Topics</h2>

                <div className="page-card">
                    <Image
                    src="https://lh3.googleusercontent.com/nuos3uRehQ6gjGOJeBVvbTBnKGRpFBNScAyr9f3Z9CEpd_Loi1zB39poSX9QbdIjTNevSt2o=-rw"
                    alt="Follow card"
                    height={150}
                    width={150}
                    />
                    <p>When you follow a topic it will appear here. You&apos;ll also see more related stories in the For You feed.</p>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="py-2 border-b mb-5 text-lg">Local</h2>

                <div className="page-card">
                <Image
                    src="https://lh3.googleusercontent.com/SOCn77ylz-ppK_80GxYfcNeHebloX7Vx9IvKbGzL6Aken01llMjZYjKoPTsvSTkGkBc1rwL2=-rw"
                    alt="Local card"
                    height={150}
                    width={150}
                    />
                    <p>When you follow a location it will appear here.</p> 
                </div>
            </div>
            <div className="mb-4">
                <h2 className="py-2 border-b mb-5 text-lg">Sources</h2>

                <div className="page-card">
                <Image
                    src="https://lh3.googleusercontent.com/tFGfZ19wiRAvJsi5LeFL42_k_gV7bXV6dj3aKnatkcPRWKpu2fHUp367Awcdd7JceiE_bzBc=-rw"
                    alt="Sources card"
                    height={150}
                    width={150}
                    />
                    <p>When you follow a source it will appear here. You&apos;ll also see more stories from that source in the For You feed.</p>
                </div>
            </div>

        </section>
    );
}

export default Following;
