import Head from 'next/head';  // Used to modify the head section (like adding title and meta tags)
import styles from './page.module.css';  // Importing a CSS module for styling the page
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Website</title>  {/* Sets the page title */}
        <meta name="description" content="Luke Rossel's website" />  {/* Meta tags */}
      </Head>
      
      <main className={styles.main}>  {/* Applying styles from the CSS module */}
        <h1>Welcome To My Website</h1>
        <h2>About Me</h2>
        <p>Hello! My name is Luke Rossel, and I am currently pursuing my undergraduate degree in Computer Science 
          at the University of New Hampshire. I have a strong passion for coding, developing projects, and problem-solving. 
          I thrive in collaborative environments where I can work alongside others to accomplish shared goals.  
        </p>
        <p>One of my long-term goals is to use my technical skills to contribute to environmental sustainability. 
          With this in mind, I plan to further my education by obtaining a minor in Environmental Engineering one day. 
          My hope is to apply my knowledge of computer science to address critical environmental challenges, using technology 
          to make a meaningful impact on our planet's future.</p>
        <p>Resume:</p>
        <h2>Personal Interests</h2>
        <p>In my free time, I enjoy a variety of activities that help me balance my work and personal development. I am 
          passionate about fitness and regularly go to the gym to stay active. I also enjoy taking walks in the College 
          Woods at the University of New Hampshire, which allows me to appreciate nature and clear my mind. 
          I also love gaming and enjoy relaxing with friends and playing some video games. I also manage a YouTube channel, 
          where I post daily content, share gameplay, and engage with my subscribers.
          <Link href={"/channel"}><u><b>See more about my channel!</b></u></Link></p>
        <h2>Projects</h2>
        <p>I am a firm believer in project-based learning and love to take on personal coding projects to both challenge 
          myself and learn new concepts. These projects not only allow me to expand my technical knowledge, but they also 
          give me hands-on experience with new technologies. Below is a list of my personal projects, along with 
          those developed during my time at university, detailing what I learned through the process.
          <Link href={"/projects"}><u><b>See my projects!</b></u></Link>
        </p>
        <h2>Contact Information</h2>
        <p>You can find me on <a href="https://github.com/coolhandlukes"><u><b>GitHub</b></u></a> and 
        <a href="https://www.linkedin.com/in/lukerossel"><u><b>LinkedIn</b></u></a>
        for more information on my projects, contributions, and professional background.</p>
        <h2>Improvements Timeline</h2>
        <p>
          Below is a tentative timeline of upcoming improvements to my website, current projects in progress, and future initiatives 
          I plan to undertake. I use this schedule to track and prioritize my goals as I continue to enhance my skill set and work on 
          exciting new projects.
        </p>
        <h3>By the end of October:</h3>
        <ul>
          <li>Have basics of site completed, committed, and pushed</li>
          <li>Start my first project (project TBD)</li>
        </ul>
        <h3>By the end of November:</h3>
        <ul>
          <li>Work with YouTube API and update Channel page</li>
        </ul>
      </main>
    </>
  );
}
