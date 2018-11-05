
<template>
  <div class="project">
				<div class='my_image' enter-active-class="animated bounceInUp">
					<img class='this_is_me' alt='this_is_project' :src="project.image"/>
				</div>
				<div class='project_text'>
					<div class="text_info">
						<h2 >{{project.name}}<br /><small style="font-weight: 100">{{project.description}}</small></h2>
            <ul class="text_details_group">
              <li class="text_details" v-for="(data, index) in project.text" :key='index'>
              {{ data }}
              </li>
            </ul>
					</div>

          <div class='card-social-links'>
            <ul class='social-links' >
              <li class="social_link">
                 <a rel="noopener noreferrer" target="_blank" :href="project.github_link">
                    <i class="fab fa-github bottom_links"> </i>
                    <p class="bottom_links_p">github</p>
                  </a> 
              </li>
           </ul>
        </div>
				</div>
	</div>
</template>

<script>
export default {
  name: 'ProjectView',
  data() {
    return {
    
    }
  },
  props:['project'],
  methods: {
  },
}
</script>

    
<style scoped>




@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Ubuntu');
/* about me page */
.project{
  display: flex;
  flex-direction: row;
  height: 100%;
}

/* my image */
.my_image{
  width: 60%;
  min-height: 100%;
  align-self: auto;
  object-fit: fill;
}
.this_is_me{
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  background-size: 100% 100%;
  object-fit: cover;
  padding: 0.1em;
}

/* few words about me */
.project_text{
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




