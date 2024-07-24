<script lang="ts">
import servicesCard from "../components/blocks/servicesCard.vue";
import price from "../components/blocks/price/price.vue"; 

export default {
  components: {
    servicesCard,
    price,
  
  },
  data() {
    return {
      services: [
        {
          title: "Spa & Massage",
          image: "Image-1.png",
          description:
            "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        },
        {
          title: "Hair & Beauty",
          image: "Image-2.png",
          description:
            "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        },
        {
          title: "Body Treatments",
          image: "Image-3.png",
          description:
            "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        },
      ],
      priceItems: [
        {
          name: "Face masks",
          price: "$48.00",
          description:
            "The versions have evolved over the sometimes by accident.",
        },
        {
          name: "Full body massage",
          price: "$48.00",
          description:
            "The versions have evolved over the sometimes by accident.",
        },
        {
          name: "Geothermal spa",
          price: "$48.00",
          description:
            "The versions have evolved over the sometimes by accident.",
        },
        {
          name: "Sauna relax",
          price: "$48.00",
          description:
            "The versions have evolved over the sometimes by accident.",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.modalVisibly = true;
    },
  },
};
</script>

<template>
  <div>
    <div class="greenTopBox">
      <h1>We are Experienced in making you very Beautiful</h1>
     
    </div>
  
    <div class="services wrapper">
       <div class="grid">
        <img src="../assets/images/services-Image-01.png" alt="" />

        <price :priceItems="priceItems"> </price>
      </div>
      <div class="grid">
        <price :priceItems="priceItems"> </price>
        <img src="../assets/images/services-Image-02.png" alt="" />
      </div>
    </div>
   </div>
</template>

<style>
.greenTopBox {
  margin-top: 00px !important;
 }
 
</style>
