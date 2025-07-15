"use client";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import styles from "./BlogDetails.module.css";
import { MUIStyle } from "./MUIStyle";
import React, { useEffect, useState } from "react";
import { BLOG2 } from "@/values/Constants/ImageConstants";
import { BlogContent } from "@/components/BlogGrid/BlogContent";
import { useDispatch } from "react-redux";
import { getBlogById } from "@/redux/blogSlice";
import Image from "next/image";

export default function BlogDetails({
  slug = "virtual-construction",
}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const blogDetails = BlogContent.find((item) => item.slug === slug);
    dispatch(getBlogById(slug))
      .then((result) => {
        console.log("getBlogById Details:", result);
        setBlog(result.payload);
        setIsLoading(false);
      }).catch((err) => {
        setError("Error fetching blog");
        setIsLoading(false);
      });

    // if (blogDetails) {
    //   setBlog(blogDetails);
    //   setIsLoading(false);
    // } else {
    //   setError("Blog not found");
    //   setIsLoading(false);
    // }
  }, [slug]);

  return (
    <Box sx={MUIStyle.BlogDetailsSec}>
      <Container maxWidth="xl">
        {isLoading &&
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "25vh" }} >
            <CircularProgress />
          </Box>
        }
        {error &&
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "25vh" }}>
            <Typography variant="h1">{error}</Typography>
          </Box>
        }
        {blog && (
          <Box sx={MUIStyle.SingleBlogMain}>
            <Typography variant="h1" sx={MUIStyle.BlogHeading}>
              {blog.title}
            </Typography>
            <Image
              src={blog.banner_image}
              alt={blog.title}
              layout="responsive"
              width={800}
              height={400}
              objectFit="cover"
              className={styles.BlogImg}
            />
            <Box sx={MUIStyle.BlogDetailsContent}>
              <Typography
                variant="body1"
                sx={MUIStyle.BlogText}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </Box>
            {/* <Box sx={MUIStyle.BlogDetailsContent}>
              <Typography variant="body1" sx={MUIStyle.BlogText}>
                There’s no doubt that the pandemic has led businesses into work
                challenges and overcoming these challenges, companies have
                modified their working patterns and have embraced ‘Remote Work’ to
                effectively operate the business. COVID-19 has boosted the use of
                technology in most industries and has pushed the trend of remote
                work for more traditional industries as well with construction
                being one of them.
              </Typography>
              <Typography variant="body1" sx={MUIStyle.BlogText}>
                To look at the greener side, the construction industry which has
                usually been resistant to remote work has now accepted it as a
                normal trend in the industry. “Virtual management” & “Virtual
                teams” that’s being embraced due to the pandemic will be a new
                normal for the industry.
              </Typography>
            </Box>
            <Box sx={MUIStyle.BlogDetailsContentNew}>
              <Typography variant="h4" sx={MUIStyle.BlogTitle}>
                Benefits of Virtual Teams & Virtual Management During COVID-19
                Epidemic:
              </Typography>
              <Box component={"ul"} sx={MUIStyle.BlogDetailsUl}>
                <Box component={"li"} sx={MUIStyle.BlogDetailsLi}>
                  <Typography variant="body1" sx={MUIStyle.BlogText}>
                    <strong>Safety is Priority :</strong> When you engage remotely
                    in virtual management operations, you control the paranoia of
                    the spread of viruses and preserve the safety of your people.
                    As a business, you’re likely to be less concerned about the
                    employees’ health as they’re protected and safe working at
                    home or remotely. Keeping safety at the centre, you will still
                    be able to maximize stability and avoid severe business impact
                    as employees here require less supervision due to the nature
                    of their job.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.BlogDetailsLi}>
                  <Typography variant="body1" sx={MUIStyle.BlogText}>
                    <strong>Safety is Priority :</strong> When you engage remotely
                    in virtual management operations, you control the paranoia of
                    the spread of viruses and preserve the safety of your people.
                    As a business, you’re likely to be less concerned about the
                    employees’ health as they’re protected and safe working at
                    home or remotely. Keeping safety at the centre, you will still
                    be able to maximize stability and avoid severe business impact
                    as employees here require less supervision due to the nature
                    of their job.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.BlogDetailsLi}>
                  <Typography variant="body1" sx={MUIStyle.BlogText}>
                    <strong>Ease of Management : </strong> We now see great
                    concern and panic among managers as they’re clearing offices
                    and looking for best practices for managing employees who are
                    working from home. But when it comes to remote teams, they are
                    largely hired due to their ease of management.
                    <br />
                    Managing remote teams is a lot easier as they’re highly
                    skilled in handling projects and clients regardless of the
                    different time zones. Simply put, COVID is directing managers
                    towards finding better & more efficient ways of working.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.BlogDetailsLi}>
                  <Typography variant="body1" sx={MUIStyle.BlogText}>
                    <strong>Higher Flexibility : </strong> Distributed teams bring higher work flexibility than traditional in-house employees. They scale up in terms of workflows, are 13% more productive and are not chained with schedules or operating hours. Homeworking is a norm to virtual teams and managers don’t have to worry about communication challenges, loss in productivity, on-time project completion and several other roadblocks.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.BlogDetailsLi}>
                  <Typography variant="body1" sx={MUIStyle.BlogText}>
                    <strong> Improved Work Quality : </strong> Dedicated remote teams are believed to improve employee productivity by 43%. Working remotely means a better work-life balance, and a better work-life balance keeps employees motivated, happy and more focused. Remote employees deliver better quality work as they claim to commute 78% lesser and have 78% less stress.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.BlogDetailsLi}>
                  <Typography variant="body1" sx={MUIStyle.BlogText}>
                    <strong>Ease of expansion : </strong> Companies have realized that they can operate even with limited people in their office which allows them to expand with the existing infrastructure, reducing their overhead cost, making it a cost efficient process. While there is a need to invest some in technology to work in a virtual environment but is considerably less as compared to adding more office space & infrastructure.
                    <br />
                    COVID 19 has had an immediate negative impact on the construction though not as severe as other businesses, but pushing it towards adoption of technology will prove to be a blessing in the long run.
                  </Typography>
                </Box>
              </Box>
            </Box> */}
          </Box>
        )}

      </Container>
    </Box>
  );
}
