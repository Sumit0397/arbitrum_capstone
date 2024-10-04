import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import Link from "next/link";

const Home: NextPage = () => (
	<div className={styles.container}>
    	<Head>
        	<title>Arbitrum Blog App</title>
        	<meta
            	content="Generated by @rainbow-me/create-rainbowkit"
            	name="description"
        	/>
        	<link href="/favicon.ico" rel="icon" />
    	</Head>

    	<main className={styles.main}>
        	<h1 className={styles.title}>
            	Welcome to <span className={styles.stackup}></span>{" "}
            	<span className={styles.arbitrum}>Arbitrum</span> Blogs
        	</h1>
        	<ConnectButton label="Sign In" />
        	<br />
        	<p className={styles.description}>
            	{useAccount().isConnected && (
                	<>
                    	You are connected. Head to our{" "}
                    	<Link className={styles.glitter} href="/forum">
                        	Blog
                    	</Link>{" "}
                    	now!
                	</>
            	)}
        	</p>
    	</main>

{/*     	<footer className={styles.footer}>
        	<p>
            	Step into Arbitrum campaign, brought to you by{" "}
            	<a href="https://stackup.dev" target="_blank" rel="noreferrer">
                	StackUp
            	</a>{" "}
            	❤️ in partnership with{" "}
            	<a href="https://arbitrum.io" rel="noreferrer" target="_blank">
                	Arbitrum!
            	</a>{" "}
            	💙🧡
        	</p>
    	</footer> */}
	</div>
);

export default Home;
