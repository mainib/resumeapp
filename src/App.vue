
<style>
  *{
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
  }

  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  .layout_container{
    /* border: 4px solid turquoise; */
    display: flex;
    height: 100%;
  }
  .navbar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20%;
    text-align: center;
  }
  .content{
    width: 80%;
    padding: 2%;
  }



  @media only screen and (max-width: 600px) {
    #app{
      height: 100%;
    }
    .layout_container {
        flex-direction: column;
        height: 100%;
        /* background-color: purple; */
    }
    .navbar{
      flex-direction: row;
      width: 100%;
      height: 5%;
      padding-bottom: 4em; 
    }
    .content{
      width: 100%;
      height: 100%;
    }
    .what_is_this{
      display: none;
    }
}
</style>
<template>
  <v-app id="app">
    <v-container fluid fill-height >
      <v-layout class="layout_container">
       
        <div class="navbar" fluid grid-list-md>
          <div :class="{active: about_me_active}" @click="changeScene('about_me_active')" class="nav_btns nav_btn">
            <p>
            <strong class="what_is_this" style="font-weight: 650;">Profile</strong>
            <br/>
            <small>About Me</small>
            </p>
          </div>

          <div :class="{active: homecooked_active}"  @click="changeScene('homecooked_active')" class="nav_btns nav_btn">
            <p>
            <strong class="what_is_this" style="font-weight: 650;">Project</strong>
            <br/>
            <small style="float: center; !important">homecooked</small>    
            </p>
          </div>

          <div :class="{active: habeshawe_active}"  @click="changeScene('habeshawe_active')" class="nav_btns nav_btn">
            <p>
            <strong class="what_is_this" style="font-weight: 650;">Project</strong>
            <br/>
            <small style="float: center; !important">habeshawe</small>    
            </p>
          </div>
        </div>
        
        <AboutMe 
          class= 'content' 
          v-if="about_me_active" 
          :class="{'animated slideInUp': about_me_active}"
          v-bind:my_image = my_image
          >
        </AboutMe>

        <ProjectView  
          class= 'content' 
          v-if="homecooked_active" 
          v-bind:project= projects[1]
          :class="{'animated slideInUp': homecooked_active}"> 
        </ProjectView>

        <ProjectView  
          class= 'content' 
          v-if="habeshawe_active" 
          v-bind:project= projects[0]
          :class="{'animated slideInUp': habeshawe_active}">
        </ProjectView> 
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import homecooked_img from './assets/homecooked.jpg'
import habeshawe_img from './assets/habeshawe.png'
import Sieley from './assets/ane.jpg'
import ProjectView from './components/Project.vue'
export default {
  name: 'app',
  components: {
    AboutMe,
    ProjectView
  },
  data( ){
    return{
      my_image: Sieley,
      about_me_active: true,
      homecooked_active: false,
      habeshawe_active: false,
      projects: [
        {
          name: 'habeshawe', 
          description: 'a complete travel management app where users can create trips/adventures, invite friends, assign, track events.', 
          github_link: 'https://github.com/mainib/habeshawecoffee',
          text:[],
          image:habeshawe_img
        },
        {
          name: 'homecooked', 
          description: 'A Peer to Peer network for people to order delicious Home Cooked meals and for Home Cooks to find customers. ', 
          github_link:'github.com/int-JP/HomeCooked',
          text:[
            'Collaborated in a team of 3 to create an MVP in 5 days.',
            'Used python, Django_Rest_Framework, PostgresQL for the backend and Jquery, Django for the front end.' 
          ],
          image:homecooked_img
        }
      ]
  }
  },
  methods:{
    //find a better efficicent method
    changeScene(cardName){
     if(cardName === 'homecooked_active'){
       this.homecooked_active = true;
       this.habeshawe_active = false;
       this.about_me_active = false;
       }
      if (cardName === 'habeshawe_active'){
       this.homecooked_active = false;
       this.habeshawe_active = true;
       this.about_me_active = false;
      }
      if (cardName === 'about_me_active'){
       this.homecooked_active = false;
       this.habeshawe_active = false;
       this.about_me_active = true;
      }
    }
  }
}
</script>

