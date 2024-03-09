import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <div className={styles.description}>
          <Typography>{"CV for Ryosuke Takeuchi"}</Typography>
        </div>
      </Box>
      <Stack flexDirection={"row"}>
        <Stack alignItems={"center"} spacing={"2px"}>
          <img
            src="2024-03-09_rtake_kagawa.jpg"
            style={{ width: "100px", height: "150px" }}
          />
          <a
            href="https://learn.microsoft.com/api/credentials/share/ja-jp/RyosukeTakeuchi-3910/CF10E3A9D955CA0A?sharingId=4664DBFDE39D7EAA"
            target="_blank"
          >
            <img
              src="microsoft-certified-associate-badge.svg"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
          <a
            href="https://learn.microsoft.com/api/credentials/share/ja-jp/RyosukeTakeuchi-3910/A75B7FC2EDE24937?sharingId=4664DBFDE39D7EAA"
            target="_blank"
          >
            <img
              src="microsoft-certified-expert-badge.svg"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
          <a
            href="https://google.accredible.com/77f1dfb2-39eb-4d56-88d7-fabb55bd4c8a"
            target="_blank"
          >
            <img src="gcp-ace.png" style={{ width: "70px", height: "70px" }} />
          </a>
        </Stack>
        <Stack
          flexGrow={1}
          alignItems={"left"}
          spacing={"16px"}
          marginLeft={"32px"}
        >
          <Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={"2px"}
              className={styles.title}
            >
              <span>
                <SchoolIcon />
              </span>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {"Educational background"}
              </Typography>
            </Stack>
            <Typography variant="subtitle1">{"Hokkaido University"}</Typography>
            <Box
              sx={{
                margin: 0,
                opacity: 0.6,
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              <Typography variant="inherit">
                {
                  "Graduated from the Department of Chemistry, Faculty of Science in 2019. Completed the Master's program in the Graduate School of Chemical Sciences and Engineering in 2021."
                }
              </Typography>
            </Box>
          </Box>
          <Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={"2px"}
              className={styles.title}
            >
              <span>
                <BusinessIcon />
              </span>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {"Career"}
              </Typography>
            </Stack>
            <Typography variant="subtitle1">
              {"FUJIFILM Imaging Imformatics Laboratory"}
            </Typography>
            <Box
              sx={{
                margin: 0,
                opacity: 0.6,
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              <Typography variant="inherit">
                {"- Research in the field of bioinfomatics"}
              </Typography>
              <Typography variant="inherit">
                {"- Softweer engineering(Client-side, Server-side, Cloud)"}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
