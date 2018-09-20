<template>
  <div class="phone-body">
    <div v-if="step === 1" class="feed" v-dragscroll.y>
      <VuegramPost v-for="post in posts"
        :post="post"
        :key="post.id"
      />
    </div>
    <div v-if="step === 2">
      <div class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: `url(${image})` }"></div>
      <div class="filter-container" v-dragscroll.x>
        <FilterType v-for="filter in filters"
          :filter="filter"
          :image="image"
          :key="filters.indexOf(filter)"
        />
      </div>
    </div>
    <div v-if="step === 3">
      <div class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: `url(${image})` }"></div>
      <div class="caption-container">
        <textarea class="caption-input"
          placeholder="Write a caption..."
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import VuegramPost from './VuegramPost'
  import FilterType from './FilterType'

  export default {
    name: "PhoneBody",
    props: {
      step: Number,
      posts: Array,
      filters: Array,
      image: String,
      selectedFilter: String,
      value: String
    },
    components: {
      VuegramPost,
      FilterType
    }
  }
</script>
