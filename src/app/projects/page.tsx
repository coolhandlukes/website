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
        <h1>My Projects</h1>
        <p>I am a firm believer in project-based learning and love to take on personal coding projects to both challenge 
          myself and learn new concepts. These projects not only allow me to expand my technical knowledge, but they also 
          give me hands-on experience with new technologies. Below is a list of my personal projects, along with 
          those developed during my time at university, detailing what I learned through the process.
        </p>
        <p><Link href="/"><b><u>Back to homepage</u></b></Link></p>
      </main>
    </>
  );
}