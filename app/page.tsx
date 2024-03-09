import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Typography>{"CV for Ryosuke Takeuchi"}</Typography>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        <Box>
          <img
            src="2024-03-09_rtake_kagawa.jpg"
            style={{ width: "100px", height: "150px" }}
          />
        </Box>
        <Box flexGrow={1} m={1}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {"Profile"}
          </Typography>
          <Box
            sx={{
              margin: 0,
              opacity: 0.6,
              fontSize: "0.9rem",
              lineHeight: 1.5,
              maxWidth: "500px",
            }}
          >
            <Typography variant="inherit">
              {
                "- Graduated from Department of Chemistry, Faculty of Science, Hokkaido University in 2019"
              }
            </Typography>
            <Typography variant="inherit">
              {
                "- Completed Master's program in Chemical Science and Engineering, Hokkaido University in 2021 and joined FUJIFILM"
              }
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
      </div>
    </main>
  );
}
