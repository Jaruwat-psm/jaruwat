import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography'
import { Paper, Divider, LinearProgress, Icon } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PushPinIcon from '@mui/icons-material/PushPin';
import LanguageIcon from '@mui/icons-material/Language';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InfoIcon from '@mui/icons-material/Info';
import Loading from './Loading';
import ImageUrl from '../Profile.jpg';
export default function Resume() {
    const [ processing, setProcessing ] = useState(true)

    const ProfileImage = () => {
        return (
            <Box sx={{position:'relative'}}>
                <Box sx={{position:'absolute', bottom:20}}>
                    <Paper sx={{borderRadius:30}}>
                    <Typography variant="h5" color="black" sx={{p:1}}>Jaruwat Thamkrasair</Typography>
                    </Paper>
                </Box>
            <img src={ImageUrl} alt="Profile" width={'100%'} style={{}}/>
            </Box>
        )
    }

    const Profile = [{ Text : 'Programer', Icon : <WorkIcon/>}, { Text : 'Nonthaburi', Icon : <HomeIcon/>}, { Text : 'Jaruwat.tks@gmail.com', Icon : <MailIcon/> }, 
        {Text : '097-1302225', Icon : <PhoneIphoneIcon/>}
    ]

    const jobSupport = ["Contact Vendor for Fixing Problems", "Support and traning All Application that are maintained ", "Analys problem", "Find the Solution to solve the problem for sustainable"]

    const JobWork = ["Document Management With Php jQuery Javascript", "Dashboard With Php jQuery Javascript", "Dormitory Services With React NodeExpress Interface Salesforce API", "Web Services With Node Express", "Webhook Trigger Notification Line with PHP CURL", "Mailing ( Parcel ) With React Php Interface 911iwist Send SMS", "Get Requiment With Users and Contact Vendor for New Project"]

    const SkillProgress = ({ skill, value }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', p:3}}>
            <Typography variant="body1" sx={{ minWidth: 100 }}>
              {skill}
            </Typography>
            <Box sx={{ width: '100%', mr: 5 }}>
              <LinearProgress variant="determinate" value={value} sx={{height:10, borderRadius:5}} />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        );
      };

      useEffect(() => {
        setProcessing(true)
        setTimeout(() => {
            setProcessing(false)
        }, 4000) // simulate loading time
      },[])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      {processing ? (<>
            <Loading/>
            </>) : (
        <Box sx={{ height: '100vh', p:3 }} >
            <Grid container spacing={2}>
                <Grid size={{xs:12, lg:4}} sx={{boxShadow:5}}>
                    <Box sx={{p:3}}>
                    <Box sx={{ flexGrow: 1 }}>
                        <ProfileImage />
                    </Box>
                    <Box>
            <List>
            {Profile.map((item, index)=> (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{bgcolor:'#295F98'}}>
                      {item.Icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.Text}
                  />
            
                </ListItem>
            ))}
            </List>

            <Divider />

            <Box>
            <List>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar sx={{bgcolor:'#7EACB5'}}>
                    <PushPinIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Skills *"
                  />
                </ListItem>

                <ListItem >
                  <ListItemAvatar>
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Front End"
                    secondary="React.Js, Next.Js, Mui React, Bootstrap"
                  />
                </ListItem>

                <ListItem >
                  <ListItemAvatar>
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Back End"
                    secondary="NodeJs Express, Php"
                  />
                </ListItem>

                <ListItem >
                  <ListItemAvatar>
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Database"
                    secondary="MySQL, MSSQL"
                  />
                </ListItem>

                <ListItem >
                  <ListItemAvatar>
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Tools"
                    secondary="Visual Studio Code, Visual Studio, Chat GPT, Post Man, GitHub"
                  />
                </ListItem>
            </List>
            </Box>

            <Box>
            <List>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar sx={{bgcolor:'#FF8A8A'}}>
                    <LanguageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Language"
                  />
                </ListItem>
            </List>
            <SkillProgress skill="Thai" value={100}/>
            <SkillProgress skill="English" value={50}/>
            </Box>
                    </Box>
                    </Box>
                </Grid>
  <Grid size={{xs:12, lg:8}} sx={{ bgcolor: '#ffffff'}}>
  <Paper sx={{p:3, boxShadow:5}}>
        <Box sx={{p:3}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Avatar sx={{ mr: 2, bgcolor:'#BC9F8B' }}>
        <InfoIcon />
      </Avatar>
      <Typography variant="h5" color="initial">
        About Me
      </Typography>
    </Box>
    
    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>
    I started my professional career later in life, which resulted in a limited range of experience. I have a deep passion and keen interest in programming development. I enjoy coding and programming immensely and am willing to dedicate my entire day to learning and improving my skills in this area. My eagerness to explore and master new technologies drives me to continuously seek out new challenges and opportunities for growth in the field of programming. I am committed to further developing my expertise through hands-on experience, staying up-to-date with the latest industry trends, and applying my knowledge to create impactful and innovative solutions.</Typography>
    </Box>
    </Box>
    </Paper>
      {/* Work Experience */}
    <Paper sx={{p:3, boxShadow:5, mt:3}}>
        <Box sx={{p:3}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Avatar sx={{ mr: 2, bgcolor:'#D2E0FB' }}>
        <WorkHistoryIcon />
      </Avatar>
      <Typography variant="h5" color="initial">
        Work Experience
      </Typography>
    </Box>
    
    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>Full Stack Developer Web Application / สำนักงานบริหารทรัพย์สินและกีฬา ธรรมศาสตร์</Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:2}}>
    <CalendarViewMonthIcon fontSize='large' sx={{mr:3}}/> <Typography variant="body1" color="initial">1 March 2023 - <span style={{background:'#A1D6B2',padding:5, borderRadius:8}}>Current</span></Typography>
    </Box>

    <Box sx={{mt:2}}>
        <Typography variant="body1" color="initial">
            <ul><Typography variant="body1" color="initial" sx={{fontWeight:600}}>Support Part</Typography>
        {jobSupport.map((item, index) => (
            <li><Typography variant="body1" color="initial">{item}</Typography></li>
        ))}
        </ul>
        </Typography>
    </Box>

    <Box sx={{mt:2}}>
        <Typography variant="body1" color="initial">
            <ul><Typography variant="body1" color="initial" sx={{fontWeight:600}}>Develop Part - Web Application</Typography>
        {JobWork.map((item, index) => (
            <li><Typography variant="body1" color="initial">{item}</Typography></li>
        ))}
        </ul>
        </Typography>
    </Box>
    <Divider sx={{mt:3}}></Divider>
    

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>Web Develop / Freelance</Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:2}}>
    <CalendarViewMonthIcon fontSize='large' sx={{mr:3}}/> <Typography variant="body1" color="initial">2020 - 2023</Typography>
    </Box>

    <Box sx={{mt:2}}>
        <Typography variant="body1" color="initial"></Typography>
    </Box>

    <Divider sx={{mt:3}}></Divider>

<Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
<Typography variant="body1" color="initial" sx={{fontWeight:600}}>Web Develop / Lion Duty Free</Typography>
</Box>

<Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:2}}>
<CalendarViewMonthIcon fontSize='large' sx={{mr:3}}/> <Typography variant="body1" color="initial"> November 2017 - March 2018</Typography>
</Box>

<Box sx={{mt:2}}>
    <Typography variant="body1" color="initial">Website Develop, Helpdesk And Contact Vendor for New Project</Typography>
</Box>
    </Box>
    </Paper>
  {/* Work Experience */}
    {/* Education */}
    <Paper sx={{p:3, boxShadow:5, mt:3}}>
        <Box sx={{p:3}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Avatar sx={{ mr: 2, bgcolor:'#C96868' }}>
        <SchoolIcon />
      </Avatar>
      <Typography variant="h5" color="initial">
       Education
      </Typography>
    </Box>
    
    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>Bachelor of Science (Technology), University of The 
    Thai Chamber of Commerce</Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:2}}>
   <Typography variant="body1" color="initial"> March 2013 - November 2016 </Typography>
    </Box>

    <Divider sx={{mt:3}}></Divider>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>High Vocational Certificate, Siam Business 
    Administration Nonthaburi Technological College</Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:2}}>
    <CalendarViewMonthIcon fontSize='large' sx={{mr:3}}/> <Typography variant="body1" color="initial">March 2011 - March 2023</Typography>
    </Box>

    <Box sx={{mt:2}}>
        <Typography variant="body1" color="initial"></Typography>
    </Box>

    <Divider sx={{mt:3}}></Divider>

<Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
<Typography variant="body1" color="initial" sx={{fontWeight:600}}> Vocational Certificate, Siam Business Administration 
Nonthaburi Technological College</Typography>
</Box>

<Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:2}}>
<CalendarViewMonthIcon fontSize='large' sx={{mr:3}}/> <Typography variant="body1" color="initial"> March 2008 - March 2011</Typography>
</Box>

<Box sx={{mt:2}}>
    <Typography variant="body1" color="initial">Website Develop, Helpdesk And Contact Vendor for New Project</Typography>
</Box>
    </Box>
    </Paper>
    {/* Education */}
    {/* Soft Skill */}
    <Paper sx={{p:3, boxShadow:5, mt:3}}>
        <Box sx={{p:3}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Avatar sx={{ mr: 2, bgcolor:'#CCE0AC' }}>
        <AcUnitIcon />
      </Avatar>
      <Typography variant="h5" color="initial">
       Soft Skill
      </Typography>
    </Box>
    
    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>Adaptability</Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>Communication
    </Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
    <Typography variant="body1" color="initial" sx={{fontWeight:600}}>Perform Under Pressure</Typography>
    </Box>

    <Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
<Typography variant="body1" color="initial" sx={{fontWeight:600}}> Positive Thinking
</Typography>
</Box>

<Box sx={{alignItems:'center', alignContent:'center', display:'flex', mt:3}}>
<Typography variant="body1" color="initial" sx={{fontWeight:600}}> Collaboration
</Typography>
</Box>

    </Box>
    </Paper>
  </Grid>

            </Grid>
            </Box>
                 )}
      </Container>
    </React.Fragment>
  );
}
