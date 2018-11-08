
<template>
  <v-card class="project">
        <v-img
          :src="project.image"
          aspect-ratio="3.75"
          class='project_img' 
          alt='this_is_project' 
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{project.name}}<br /><small style="font-weight: 100">{{project.description}}</small></h3>
            <div>
              <ul class="text_details_group">
              <li class="text_details" v-for="(data, index) in project.text" :key='index'>
              {{ data }}
              </li>
            </ul>
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">
            <a rel="noopener noreferrer" target="_blank" :href="project.github_link">
              <i class="fab fa-github bottom_links"> </i>
              <p class="bottom_links_p">github</p>
            </a> 
          </v-btn>
          <!-- <v-btn flat color="orange">Explore</v-btn> -->
        </v-card-actions>
  </v-card>
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

</style>




