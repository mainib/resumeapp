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

    <Projects  
      class= 'content' 
      v-bind:project="{ name: 'homecooked', links: 'somewhere'}" 
      v-if="homecooked_active" 
      :class="{'animated slideInUp': homecooked_active}" > 
    </Projects>

    <Projects  
      class= 'content' 
      v-bind:project="{ name: 'habeshawe', links: 'somewhere'}" 
      v-if="habeshawe_active" 
      :class="{'animated slideInUp': habeshawe_active}" >
    </Projects>

    <Projects  
      class= 'content' 
      v-bind:project="{ name: 'zanttana', links: 'somewhere'}" 
      v-if="zanttana_active" 
      :class="{'animated slideInUp': zanttana_active}">
    </Projects>
    

  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
export default {
  name: 'app',
  components: {
    AboutMe,
    Projects
  },
  data( ){
    return{
      about_me_active: true,
      zanttana_active: false,
      homecooked_active: false,
      habeshawe_active: false,
  }
  },
  methods:{
    //find a better efficicent method
    changeScene(cardName){
      console.log(cardName);
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