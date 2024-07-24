<script lang="ts">
import myButton from "../components/ui/myButton.vue";
import myInput from "../components/ui/myInput.vue";

export default {
  components: {
    myButton,

    myInput,
  },
};
</script>
<template>
  <div>
    <div class="contact">
      <div class="greenTopBox">
        <h1>Make an Appointment</h1>
      </div>
      <div class="wrapper">
        <div class="rigth">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
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
            <myButton class="green" style="width: 100%"
              >GET AN APPOINTMENT</myButton
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.greenTopBox {
  margin-top: 00px !important;
  margin-bottom: 0;
 }
 
</style>
