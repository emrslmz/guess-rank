<template>
  <div>
   <router-view />
    <profiles />
  </div>
</template>


<script>
import Profiles from '@/modules/main/profiles/profile/components/Profiles.vue';

export default {
  name: 'UserProfile',
  components: {
    Profiles
  }
}
</script>