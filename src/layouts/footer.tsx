import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 6}}
        py={{ xs: 2, sm: 6 }}
        bgcolor="#1273de"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><h4>Help</h4></Box>
              <Box>
             
                  Contact
              
              </Box>
              <Box>
               
                  Support
          
              </Box>
              <Box>
               
                  Privacy
             
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><h4>Contact</h4></Box>
              <Box>
            
               <LocationOnIcon/> Linneplatsen 10 412 11 Gothenburg
             
              </Box>
              <Box>
               
                 < CallIcon/> +046 345234523
         
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><h4> Follow Us</h4></Box>
              <Box>
               
                
              </Box>
              <Box>
               
              <FacebookIcon/>           
            
<TwitterIcon/>
          
<InstagramIcon/>
    
<LinkedInIcon/>
            
<GitHubIcon/>
            
              </Box>
              
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 3 }} pb={{ xs: 5, sm: 0 }}>
            Snow White &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}