<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#333"
      img-width="1920"
      img-height="900"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for=" (v,i) in pictures "
        :key="i"
        :caption="v.caption"
        :text="v.text"
        :img-src="v.url"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictures: [
        {
          caption: "",
          text: "",
          url: "https://picsum.photos/1920/900/?image=52"
        },
        {
          caption: "",
          text: "",
          url: "https://picsum.photos/1920/900/?image=53"
        },
        {
          caption: "",
          text: "",
          url: "https://picsum.photos/1920/900/?image=54"
        },
        {
          caption: "",
          text: "",
          url: "https://picsum.photos/1920/900/?image=55"
        },
        {
          caption: "",
          text: "",
          url: "https://picsum.photos/1920/900/?image=56"
        }
      ],
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>