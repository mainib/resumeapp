
<template>
 <v-card class="about_me">

        <v-img
          :lazy-src="`../assets/ane.jpg'`"
          aspect-ratio="16/9"
           class='my_img'
          alt='this_is_me' 
        />
        <div class='info_about_me'>
                <v-flex class="text_info">
                  <h3 class="headline mb-0" style="text-align: center">Hello, I am Biniam <br /><small style="font-weight: 100">[Bēe-nee-yuh-m]</small></h3>
                      <div class="text_details" v-for="(data, index) in textArray" :key="index">
                        <p class="font-weight-light">{{ data }}</p>
                      </div>
                </v-flex>
        
              <v-flex  class='card-social-links'>
                      <ul class='social-links' >
                        <li class="social_link">
                          <a rel="noopener noreferrer" target="_blank" :href="profile_social_links[0].link">
                              <i :class=profile_social_links[0].className class="bottom_links"></i>
                              <p class="bottom_links_p">{{profile_social_links[0].name}}</p>
                            </a> 
                        </li>
                        <li class="social_link">
                          <a rel="noopener noreferrer" target="_blank" :href="profile_social_links[1].link">
                              <i :class=profile_social_links[1].className class="bottom_links"></i>
                              <p class="bottom_links_p">{{profile_social_links[1].name}}</p>
                            </a> 
                        </li>
                        <li class="social_link">
                          <a rel="noopener noreferrer" target="_blank" :href="profile_social_links[2].link">
                              <i :class=profile_social_links[2].className class="bottom_links"></i>
                              <p class="bottom_links_p">{{profile_social_links[2].name}}</p>
                            </a> 
                        </li>
                    </ul>
                    </v-flex>
        </div>
    </v-card>
</template>

<script>
export default {
  name: 'aboutMe',
  data() {
    return {
      textArray: [
        "I'm a Full-Stack Web/Mobile developer based in San Jose, CA",
        "My love for coding was kickstarted when I learned how to make a simple game using gamesalad.",
        "I was just amazed by the fact that all you need to code is laptop and lots of coffee and some grit.",
        "Since then I have been programming for the past couple of years with different technologies",
        "HTML, HTML5, CSS, JS, JQuery,Ajax, Node.Js, Express, React and React-Native, Python, Django, PostgreSQL, MongoDB",
        "Outside of programming, I enjoy spending time with my family and  friends, hiking, playing soccer or working on my 1969 Chevy Corvair"
      ]
      ,
      little_about_me: [
      ],
      profile_social_links:[
        { name: 'Resume', className: 'fas fa-file-code', link:'https://github.com/mainib/resumeapp/blob/master/src/assets/Biniam_Hagos_Resume.pdf' },
        { name: 'LinkedIn', className: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/biniamhagos/' },
         { name: 'GitHub', className: 'fab fa-github', link: 'https://github.com/mainib' }
      ]
    }
  },
  methods: {
    serveAboutMeText(){
      let textArray = [
        "I'm a Full-Stack Web/Mobile developer based in San Jose, CA",
        "My love for coding was kickstarted when I learned how to make a simple game using gamesalad.",
        "I was just amazed by the fact that all you need to code is laptop and lots of coffee and some grit.",
        "Since then I have been programming for the past couple of years with different technologies",
        "HTML, HTML5, CSS, JS, JQuery,Ajax, Node.Js, Express, React and React-Native, Python, Django, PostgreSQL, MongoDB",
        "Outside of programming, I enjoy spending time with my family and  friends, hiking, playing soccer or working on my 1969 Chevy Corvair"
      ]
      let counter = 0;
      
      let textAnimateInterval = setInterval(()=>{
        this.little_about_me.push(textArray[counter]);
        counter++;
        //if last text is reached
        if(counter === textArray.length){
          clearInterval(textAnimateInterval);
        }
      },650)

    },
  },
  mounted:function(){
    this.serveAboutMeText();
  }
}
</script>

    
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Ubuntu');

.about_me{
  display: flex;
  flex-direction: row;
  height: 100%;
}
.my_img{
  width: 50%;
  background-image: url('../assets/ane.jpg');
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
   background-position: center center;
}
.info_about_me{
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2%;
}
.social-links{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    font-size: 1.5em;
  }
@media only screen and (max-width: 600px) {  

  .about_me{
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .my_img{
    width: 100%;
    height: 34.5%;
    background-image: url('../assets/ane.jpg');
    background-position: center top;
    background-size: 75% auto;
  }
  .info_about_me{
    height:65%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .social-links{
    flex-direction: row;
     font-size: 1em;
  }
  .card-social-links{
    height: 8%;
  }
  .text_info{
    overflow: scroll;
    height: 80%;
  }
}
</style>




