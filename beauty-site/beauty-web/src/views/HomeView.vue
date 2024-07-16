<script lang="ts">
import servicesCard from "../components/blocks/servicesCard.vue";
import price from "../components/blocks/price/price.vue";
import benefits from "../components/blocks/benefits/benefits-items.vue";
import aboutCard from "../components/blocks/aboutCard.vue";
import myButton from "../components/ui/myButton.vue";
import myInput from "../components/ui/myInput.vue";
import Modal from "../components/ui/modal.vue";

export default {
  components: {
    servicesCard,
    myButton,
    aboutCard,
    Modal,
    price,
    benefits,
    myInput,
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
          title: "Spa & Massage",
          image: "Image-2.png",
          description:
            "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        },
        {
          title: "Spa & Massage",
          image: "Image-3.png",
          description:
            "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        },
      ],
      about: [
        {
          title: "Beauty Experts",
          image: "about-icon-01.svg",
        },
        {
          title: "Beauty Experts",
          image: "about-icon-02.svg",
        },
        {
          title: "Beauty Experts",
          image: "about-icon-03.svg",
        },
      ],
      modalVisibly: false,

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
  <main>
    <div class="first-screen wrapper">
      <div class="left">
        <h1>Beauty is power a smile is its sword.</h1>
        <p class="subtitle">
          There are many variation of passages are Ipsum available, majority
          have suffered alteration in some form.
        </p>
        <myButton class="green">Make a reservation</myButton>
      </div>
      <div class="rigth">
        <img src="../assets/images/main-page.png" alt="" />
      </div>
    </div>
    <div class="services-cards wrapper">
      <!-- Измените на следующее -->
      <servicesCard
        class="serviceCard"
        v-for="serviceCard in services"
        :key="serviceCard.title"
        :serviceCard="serviceCard"
      ></servicesCard>
    </div>
    <div class="about">
      <div class="wrapper">
        <div class="left">
          <h2>The Beauty is about being Comfortable in your own skin!</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words which don't look even many
            desktop publishing packages.
          </p>
          <div class="about-cards">
            <aboutCard
              v-for="aboutCard in about"
              :key="aboutCard"
              :aboutCard="aboutCard"
            ></aboutCard>
          </div>
        </div>
        <div class="rigth">
          <img src="../assets/images/main-page.png" alt="" />
        </div>
      </div>
    </div>

    <div class="services wrapper">
      <h2>We are Experienced in making you very Beautiful</h2>
      <div class="grid">
        <img src="../assets/images/services-Image-01.png" alt="" />

        <price :priceItems="priceItems"> </price>
      </div>
      <div class="grid">
        <price :priceItems="priceItems"> </price>
        <img src="../assets/images/services-Image-02.png" alt="" />
      </div>
    </div>

    <div class="benefits wrapper">
      <h2>Actually what you’ll get from</h2>
      <benefits />
    </div>

    <div class="contact">
      <div class="wrapper">
           <div class="rigth">
            <h2>Claim upto 50% off er on ‍the most popular services...</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words.
            </p>
          </div>
          <div class="left">
            <form action="">
              <myInput type="text" placeholder="Name"></myInput>
              <myInput type="email" placeholder="Email"></myInput>
              <myInput type="text" placeholder="Phone"></myInput>
              <myInput type="text" placeholder="Service You Need"></myInput>
              <textarea
                name="notes"
                id=""
                placeholder="Any Note For Us"
              ></textarea>
              <myButton class="green">GET AN APPOINTMENT</myButton>
            </form>
         </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.first-screen {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
}

.services-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
.about,
.contact {
  background: #ebf3f5;
}
.about .wrapper,
.contact .wrapper {
  display: grid;
  grid-template-columns: 50% 48%;
  justify-content: space-between;
  align-items: center;
  align-content: start;
}
.about-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.grid {
  display: grid;
  grid-template-columns: 50% 48%;
  justify-content: space-between;
}
.grid img {
  width: 100%;
}
textarea {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #5c8692;
   margin-bottom: 20px;
   box-sizing: border-box;

}
form{
  padding: 66px 55px;
  box-shadow: 0 20px 40px 0 rgba(42, 68, 75, 0.13);
  background: #fff;
  max-width: 450px !important;
  box-sizing: border-box;

}
</style>
