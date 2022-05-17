<template>
  <div class="nav">
    <h1>San Andreas</h1>
  </div>
  <GMapMap :center="center" :options="options" :zoom="10">
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="{ url: require('../assets/player.gif') }"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
export default {
  data() {
    return {
      center: {
        lat: 33.91794682846261,
        lng: -118.2591047607889,
      },

      markers: [
        {
          position: {
            lat: 33.943954479123526,
            lng: -118.40847464942067,
          },
        },
      ],

      options: {
        mapId: 'aade96f206662cf8', //here comes your map id
      },

      locations: [],
      currentLocation: null,
    };
  },

  mounted() {
    this.setLocationLatLng();
  },

  methods: {
    setPlace(loc) {
      this.currentLocation = loc;
    },
    setLocationLatLng: function () {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        this.center = {
          lat: geolocation.coords.latitude,
          lng: geolocation.coords.longitude,
        };
      });
    },
  },
};
</script>

<style lang="scss">
html,
body,
#q-app,
.q-layout {
  height: 100%;
}

.nav {
  background: black;
  height: 20%;
  h1 {
    font-family: 'Pricedown';
    color: white;
    text-shadow: -3px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
    margin: 0;
    text-align: center;

    @media (min-width: 396px) {
      padding-top: 30px;
    }
  }
}

.vue-map-container {
  height: 80%;
}
</style>
