
<template>
 <v-card class="about_me">

        <div
          class='my_img'
          alt='this_is_me' 
        >
        </div>
        <div class='info_about_me' style="border: solid 2px red;">
                <v-flex class="text_info">
                  <h3 class="headline mb-0">Hello, I am Biniam <br /><small style="font-weight: 100">[Bēe-nee-yuh-m]</small></h3>
                  
                    <v-list one-line>
                      <template class="text_details" v-for="(data, index) in textArray">
                        <v-list-tile
                          :key="index"
                          ripple
                        >

                        <v-list-tile-content>
                            <v-list-tile-sub-title class="text--primary text-wrap body-2">{{ data }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>
                      </template>
                      
                    </v-list>
                </v-flex>

                <v-flex class='card-social-links'>
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

@media only screen and (max-width: 600px) {  
  .about_me{
    flex-direction: column;
    height: 100%;
  }
  .my_img{
    width: 100%;
    height: 25%;
    background-image: url('../assets/ane.jpg');
    background-position: center top;
    background-size: 75% auto;
  }
  .info_about_me{
    max-height: 75%;
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
  }
}
</style>






// about me page
// .about_me{
//   display: flex;
//   flex-direction: row;
//   height: 100%;
// }

// /* my image */
// .my_image{
//   width: 60%;
//   height: 100%;
//   align-self: auto;
//   object-fit: cover;
// }
// .this_is_me{
//   max-height: 100%;
//   max-width: 100%;
//   background-size: 100% 100%;
//   object-fit: cover;
//   padding: 0.1em;
// }

// /* few words about me */
// .about_me_text{
//   width: 100%;
//   padding-left:1em; 
//   /* border: 1px solid black; */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
//   font-family: 'Ubuntu', sans-serif;
//   font-weight: lighter;
// }

// .text_details{
//   font-size: 1em;
//   padding-bottom: 1em; 
// }

// .text_info{
//   height: 80%;
// }
// .social-links{
//   /* border: 1px solid red; */
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// }
// .card-social-links{
//    height: 20%;
//   /* border: 1px solid blue; */
//     box-sizing: border-box;
// }
// /* .social_link{
//   border: 2px solid turquoise;
// } */
// .bottom_links{
//   font-size: 3em;
// }
// .bottom_links_p {
//   font-size: 1.6vh;
//   padding: 0.4em;
// }
// i, i+p  {
//   color:rgb(3, 117, 117);
  
// }