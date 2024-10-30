import Head from 'next/head';  // Used to modify the head section (like adding title and meta tags)
import styles from '../page.module.css';  // Importing a CSS module for styling the page
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Website</title>  {/* Sets the page title */}
        <meta name="description" content="Luke Rossel's website" />  {/* Meta tags */}
      </Head>
      
      <main className={styles.main}>  {/* Applying styles from the CSS module */}
        <h1>My YouTube Channel</h1>
        <p>In my free time I enjoy playing some videogames and recording my gameplay. I post that gameplay on YouTube and share it 
          with my subscribers who I converse with everyday. Here are some of my newest videos that I'm showing you through a webhook. 
        </p>
        <p>What I learned through making this webhook:
          
        </p>
        <p><Link href={"/"}><b><u>Back to homepage</u></b></Link></p>
      </main>
    </>
  );
}