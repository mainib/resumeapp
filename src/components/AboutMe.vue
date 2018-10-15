
<template>
 <div class="about_me">
				<div class='my_image' enter-active-class="animated bounceInUp">
					<img class='this_is_me' alt='this_is_me' src='@/assets/ane.jpg'/>
				</div>
				<div class='about_me_text'>
					<div class="text_info">
						<h2 >Hello, I am Biniam <br /><small>[Bēe-nee-yuh-m]</small></h2>
            <ul class="text_details_group">
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li class="text_details" v-for="(data, index) in little_about_me" :key='index'>
              {{ data }}
              </li>
              </transition-group>
            </ul>
					</div>

          <div class='card-social-links'>
            <ul class='social-links' >
              <li class="social_link">
                 <a rel="noopener noreferrer" target="_blank" :href=profile_social_links[0]>
                    <i :class=profile_social_links[0].className class="bottom_links"> </i>
                    <p class="bottom_links_p">{{profile_social_links[0].name}}</p>
                  </a> 
              </li>
              <li class="social_link">
                 <a rel="noopener noreferrer" target="_blank" :href=profile_social_links[0]>
                    <i :class=profile_social_links[1].className class="bottom_links"></i>
                    <p class="bottom_links_p">{{profile_social_links[1].name}}</p>
                  </a> 
              </li>
              <li class="social_link">
                 <a rel="noopener noreferrer" target="_blank" :href=profile_social_links[0]>
                    <i :class=profile_social_links[2].className class="bottom_links"></i>
                    <p class="bottom_links_p">{{profile_social_links[2].name}}</p>
                  </a> 
              </li>
           </ul>
        </div>
				</div>
			</div>
</template>

<script>
export default {
  name: 'aboutMe',
  data() {
    return {
      little_about_me: [
      ],
      profile_social_links:[
        { name: 'Resume', className: 'fas fa-file-code', link: '../assets/Biniam_Hagos_Resume.pdf' },
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
/* about me page */
.about_me{
  display: flex;
  flex-direction: row;
  height: 100%;
}

/* my image */
.my_image{
  width: 60%;
  height: 100%;
  align-self: auto;
  object-fit: cover;
}
.this_is_me{
  max-height: 100%;
  max-width: 100%;
  background-size: 100% 100%;
  object-fit: cover;
  padding: 0.1em;
}

/* few words about me */
.about_me_text{
  width: 100%;
  padding-left:1em; 
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  font-weight: lighter;
}

.text_details{
  font-size: 1em;
  padding-bottom: 1em; 
}

.text_info{
  height: 80%;
}
.social-links{
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card-social-links{
   height: 20%;
  /* border: 1px solid blue; */
    box-sizing: border-box;
}
/* .social_link{
  border: 2px solid turquoise;
} */
.bottom_links{
  font-size: 3em;
}
.bottom_links_p {
  font-size: 1.6vh;
  padding: 0.4em;
}
i, i+p  {
  color:rgb(3, 117, 117);
  
}
</style>




