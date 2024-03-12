import BusinessIcon from "@mui/icons-material/Business";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolIcon from "@mui/icons-material/School";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack maxWidth={"600px"} alignItems={"center"} display={"flex"}>
        <Typography>{"Ryosuke Takeuchi"}</Typography>
        <Stack flexDirection={"column"} marginTop={"32px"}>
          <Stack flexDirection={"row"}>
            <Stack alignItems={"center"} spacing={"2px"}>
              <img
                src="2024-03-09_rtake_kagawa.jpg"
                style={{ width: "100px", height: "150px" }}
              />
              <Stack flexDirection={"row"}>
                <a
                  href="https://learn.microsoft.com/api/credentials/share/ja-jp/RyosukeTakeuchi-3910/CF10E3A9D955CA0A?sharingId=4664DBFDE39D7EAA"
                  target="_blank"
                  className={styles.badge}
                >
                  <img
                    src="microsoft-certified-associate-badge.svg"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
                <a
                  href="https://learn.microsoft.com/api/credentials/share/ja-jp/RyosukeTakeuchi-3910/A75B7FC2EDE24937?sharingId=4664DBFDE39D7EAA"
                  target="_blank"
                  className={styles.badge}
                >
                  <img
                    src="microsoft-certified-expert-badge.svg"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
                <a
                  href="https://google.accredible.com/77f1dfb2-39eb-4d56-88d7-fabb55bd4c8a"
                  target="_blank"
                  className={styles.badge}
                >
                  <img
                    src="gcp-ace.png"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              </Stack>
            </Stack>
            <Stack marginLeft={"8px"} className={styles.title}>
              <Stack direction={"row"} alignItems={"center"} spacing={"2px"}>
                <span>
                  <SummarizeIcon />
                </span>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {"SUMMARY"}
                </Typography>
              </Stack>
              <Typography>
                {
                  "I'm an engineer with experience in algorithm development in theoretical chemistry and data analysis in bioinformatics, now specializing in both cloud and client-side technologies. Proficient in Azure and TypeScript."
                }
              </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} marginTop={"16px"}>
            <Stack flexGrow={1} alignItems={"left"} spacing={"16px"}>
              <Stack className={styles.title}>
                <Stack direction={"row"} alignItems={"center"} spacing={"2px"}>
                  <span>
                    <SchoolIcon />
                  </span>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {"Educational background"}
                  </Typography>
                </Stack>
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
                      "Apr 2015 - Mar 2019 Hokkaido University, Japan Bachelor of Science"
                    }
                  </Typography>
                  <Typography variant="inherit">
                    {
                      "Apr 2019 - Mar 2021 Hokkaido University, Japan Master of Chemical Sciences and Engineering"
                    }
                  </Typography>
                </Box>
              </Stack>
              <Stack className={styles.title}>
                <Stack direction={"row"} alignItems={"center"} spacing={"2px"}>
                  <span>
                    <BusinessIcon />
                  </span>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {"Career"}
                  </Typography>
                </Stack>
                <Stack spacing={"8px"}>
                  <Stack>
                    <Typography variant="subtitle1">
                      {
                        "FUJIFILM Imaging Technology Center(Apr 2021 - Feb 2023)"
                      }
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
                    </Box>
                  </Stack>
                  <Stack>
                    <Typography variant="subtitle1">
                      {"FUJIFILM Imaging Imformatics Laboratory(Mar 2023 - )"}
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
                        {
                          "- Working as softweer engineer responsible for cloud infrastructure to application(client/server-side)"
                        }
                      </Typography>
                      <Typography variant="inherit">
                        {"- Data analytics platform(GCP/Python/Tableau)"}
                      </Typography>
                      <Typography variant="inherit">
                        {"- ChatGPT web application(Azure/Next.js/TypeScript)"}
                      </Typography>
                      <Typography variant="inherit">
                        {
                          "- Chatbot system(Azure/Next.js/Bot Framework/TypeScript)"
                        }
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Box className={styles.title}>
                <Stack direction={"row"} alignItems={"center"} spacing={"2px"}>
                  <span>
                    <ConstructionIcon />
                  </span>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {"Skills"}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    margin: 0,
                    opacity: 0.6,
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  <Typography variant="inherit">
                    {"- TypeScript(Node.js, React, Next.js)"}
                  </Typography>
                  <Typography variant="inherit">{"- Python, R"}</Typography>
                  <Typography variant="inherit">{"- C/C++"}</Typography>
                  <Typography variant="inherit">{"- SQL(BigQuery)"}</Typography>
                  <Typography variant="inherit">
                    {"- Microsoft Azure(App Service, OpenAI Service, ...)"}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </main>
  );
}
