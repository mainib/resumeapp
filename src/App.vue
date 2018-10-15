<template>
  <div id="app">
    <div class="navbar">
         <div :class="{active: about_me_active}" @click="changeScene('about_me_active')" class="nav_btns nav_btn">
            <p>
                <strong style="font-weight: 650;">Profile</strong>
                <br/>
                <small>About Me</small>
            </p>
         </div>
      
          <div :class="{active: homecooked_active}"  @click="changeScene('homecooked_active')" class="nav_btns nav_btn">
            <p>
              <strong style="font-weight: 650;">Project</strong>
                <br/>
                <small style="float: center; !important">homecooked</small>    
            </p>
          </div>
          
          <div :class="{active: habeshawe_active}"  @click="changeScene('habeshawe_active')" class="nav_btns nav_btn">
            <p>
              <strong style="font-weight: 650;">Project</strong>
                <br/>
                <small style="float: center; !important">habeshawe</small>    
            </p>
          </div>
             
          <div :class="{active: zanttana_active}"  @click="changeScene('zanttna_active')" class="nav_btns nav_btn">
            <p>
              <strong style="font-weight: 650;">Project</strong>
                <br/>
                <small style="float: center; !important">zanttana</small>    
            </p>
          </div>
    </div>
    
    <AboutMe 
      class= 'content' 
      v-if="about_me_active" 
      :class="{'animated slideInUp': about_me_active}">
    </AboutMe>

    <ProjectView  
      class= 'content' 
      v-if="homecooked_active" 
      v-bind:project= projects[2]
      :class="{'animated slideInUp': homecooked_active}"> 
    </ProjectView>

    <ProjectView  
      class= 'content' 
      v-if="habeshawe_active" 
      v-bind:project= projects[1]
      :class="{'animated slideInUp': habeshawe_active}">
    </ProjectView>

    <ProjectView  
      class= 'content' 
      v-if="zanttana_active" 
      v-bind:project= projects[0] 
      :class="{'animated slideInUp': zanttana_active}">
    </ProjectView>
    

  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import zanttana_img from './assets/zanttana.jpg'
import homecooked_img from './assets/homecooked.jpg'
import habeshawe_img from './assets/habeshawe.png'
import ProjectView from './components/Project.vue'
export default {
  name: 'app',
  components: {
    AboutMe,
    ProjectView
  },
  data( ){
    return{
      about_me_active: true,
      zanttana_active: false,
      homecooked_active: false,
      habeshawe_active: false,
      projects: [
        {
          name: 'zanttana', 
          description: 'a complete travel management app where users can create trips/adventures, invite friends, assign, track events.', 
          github_link: 'http://zanttana.herokuapp.com',
          text:[
                'Used React, Redux, AntD, Google maps api to create the responsive web version',
                'Django_Rest_Framework, PostgresQL for the backend and zanttana.herokuapp.com',   
                'Recreating the  mobile version for both IOS and Android  with flutter' 
                ],
          image:zanttana_img
        },
        {
          name: 'habeshawe', 
          description: 'a complete travel management app where users can create trips/adventures, invite friends, assign, track events.', 
          github_link: 'https://github.com/mainib/habeshawecoffee',
          text:[],
          image:habeshawe_img
        },
        {
          name: 'homecooked', 
          description: 'A Peer to Peer network for people to order delicious Home Cooked meals and for Home Cooks to find customers. ', 
          github_link:'github.com/int-JP/HomeCooked',
          text:[
            'Collaborated in a team of 3 to create an MVP in 5 days.',
            'Used python, Django_Rest_Framework, PostgresQL for the backend and Jquery, Django for the front end.' 
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
       this.zanttana_active = false;
       this.habeshawe_active = false;
       this.about_me_active = false;
       }

      if (cardName === 'habeshawe_active'){
       this.homecooked_active = false;
       this.zanttana_active = false;
       this.habeshawe_active = true;
       this.about_me_active = false;
      }
      if (cardName === 'zanttna_active'){
       this.homecooked_active = false;
       this.zanttana_active = true;
       this.habeshawe_active = false;
       this.about_me_active = false;
      }
      if (cardName === 'about_me_active'){
       this.homecooked_active = false;
       this.zanttana_active = false;
       this.habeshawe_active = false;
       this.about_me_active = true;
      }

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"); 


a{
  text-decoration: none;
}
ul{
  padding: 0;
  list-style-type: none;
}
html {
  margin: 0;
  width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   font-size: 16px;
}
body {
  width: 100%;
  height: 80%;
  margin: auto auto;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app{
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 2px purple; */
    width: 90%;
    height: 80%;
    margin: auto auto;
}
.navbar{
    padding-top: 1vh;
    margin-right: 2vw;
    padding-left: 2vw; 
    /* border: solid 2px red; */
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.content{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
  width: 80%;
  padding: 1vw;
  /* background: red; */
/* border: solid 2px steelblue; */
}

.nav_btns{
  font-size: 2vw;
  color: #037575;
  border-radius: 0.2em;
  border: 0.051em solid #037575;
  text-align: center;
  width: 80%;
  height: 20%;
}

.nav_btn:hover{
  cursor: pointer;
  transform: scale(1.1);
}
.active{
  background:#037575; 
  color:white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

i, i+p  {
  color:rgb(3, 117, 117);
}
.social_connections{
  display: flex;
  flex-direction: column;
  font-size: 3vw;
}
.social_btns > a{
  text-decoration: none;
  color: #037575;
}
.social_name{
  color: #037575;
  padding-left: 2vw;
}
@media only screen and (max-width: 575px) {
  #app{
    flex-direction: column;
    justify-content: space-between;
  }
  .navbar{
    height: 5%;
    width: 100%;
  }
  nav {
    flex-direction: row;
    /* border: 1px solid red; */
    height: 100%;
    justify-content: center;
  }
  nav a{
     margin-bottom: 5vh;
  }
  .content{
    height: 100%;
    width: 80%;
  }
}


</style>