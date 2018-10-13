<template>
  <div id="app">
    <div class="navbar">
      <nav>  
        <router-link to="/">
         <div class="nav_btns active">
          <p>
              <strong style="font-weight: 750;">Profile</strong>
              <br/>
              <small>About Me</small>
          </p>
         </div>
        </router-link>
        <router-link to="/projects">
          <div class="nav_btns">
            <p>
              <strong style="font-weight: 750;">Projects</strong>
                <br/>
              <small>About Me</small>    
            </p>
            </div>
        </router-link>
      </nav>
    </div>
    <div class="content"> 
      <router-view />
    </div>
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
export default {
  name: 'app',
  components: {
    AboutMe
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

a{
  text-decoration: none;
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
}
.content{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
  width: 80%;
  padding: 1vw;
/* border: solid 2px steelblue; */
}

nav {
  display: flex;
  flex-direction: column;
  text-align: center;
  /* border: solid 2px red; */
  height: 100%;
}

.nav_btns{
  width: 100%;
  height: 20%;
  font-size: 2rem;
  color: #037575;
  border-radius: 0.2em;
  z-index: 111111500;
  border: 0.051em solid #037575;
  margin-bottom: 3vh;
}
.nav_btns:hover{
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