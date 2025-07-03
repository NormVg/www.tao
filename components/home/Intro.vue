<template>
  <div class="intro-box">
    <main>
    <div class="head">Who we are</div>

    <div class="sub">
      At TheAlphaOnes, we are more than just a team we are a movement driven  by innovation, passion, and a deep love for technology. Our goal is to  create solutions that enhance lives, spark innovation, and push the  boundaries of what’s possible.
      <br>
      <br>
      We believe technology should be a seamless extension of human  creativity, making complex ideas accessible and turning visions into  reality. At TheAlphaOnes, we don’t just build—we create, experiment, and redefine the norm.
    </div>

    <div class="post">
      BUILD • BUILD • BUILD
    </div>
</main>

  </div>
</template>

<script  setup>

</script>

<style scoped>
.intro-box{
  width: 90vw;
  /* height: 600px; */
  border-radius: 25px;
  margin: 125px auto;

  aspect-ratio: 1550/600;
  background-image: url('~/assets/bg-1.png');
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

}


main{

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  width: 70%;
}

.head{
  font-size: 45px;
  color: whitesmoke;
}

.sub{
  font-size: 18px;
}

.post{
  margin-top: 30px;
  align-self: center;
  font-weight: bold;
  letter-spacing: 20%;
}

</style>
