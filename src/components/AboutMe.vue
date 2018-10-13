<template>
 <div class="about_me">
				<div class='my_image' enter-active-class="animated bounceInUp">
					<img class='this_is_me' alt='this_is_me' src='@/assets/ane.jpg'/>
				</div>
				<div class='about_me_text'>
					<div class="text_info">
						<h3 >Hello, I am Biniam <br /><small>[Bēe-nee-yuh-m]</small></h3>
            <ul class="text_details_group">
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li class="text_details" v-for="(data, index) in little_about_me" :key='index'>
              {{ data }}
              </li>
              </transition-group>
            </ul>
					</div>
					<!-- <CardProfileLinks /> -->
				</div>
			</div>
</template>

<script>
export default {
  name: 'aboutMe',
  data() {
    return {
      their_name: this.$route.params.name,
      little_about_me: [
        "I'm a Full-Stack Web/Mobile developer based in San Jose, CA",
        "My love for coding was kickstarted when I learned how to make a simple game using gamesalad.",
        "I was just amazed by the fact that all you need to code is laptop and lots of coffee and some grit.",
        "Since then I have been programming for the past couple of years with different technologies",
        "HTML, HTML5, CSS, JS, JQuery,Ajax, Node.Js, Express, React and React-Native, Python, Django, PostgreSQL, MongoDB",
        "Outside of programming, I enjoy spending time with my family and  friends, hiking, playing soccer or working on my 1969 Chevy Corvair"
      ]
    }
  }
}
</script>
<style scoped>




@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
/* about me page */
.about_me{
  display: flex;
  flex-direction: row;
  height: 100%;
}

/* my image */
.my_image{
  width: 100%;
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
  padding-left:1em; 
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}
.text_details_group{
  padding: 0;
  list-style-type: none;
}
.text_details{
  font-size: 1em;
  padding-bottom: 1em; 
}

</style>

