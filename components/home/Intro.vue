
<script  setup>
import { motion as m } from 'motion-v';


</script>

<template>
  <div class="intro-box">
    <main>
    <m.div class="head"
    :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
    :while-in-view="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
    :transition="{ duration: 0.4,delay:0.3, ease: 'easeInOut' }""
    :in-view-options="{amount:1,once: true}"


    >Who we are</m.div>

    <m.div class="sub"
    :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
    :while-in-view="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
    :transition="{ duration: 0.4,delay:0.4, ease: 'easeInOut' }""
    :in-view-options="{amount:1,once: true}"

    >
      <!-- At TheAlphaOnes, we are more than just a team we are a movement driven  by innovation, passion, and a deep love for technology. Our goal is to  create solutions that enhance lives, spark innovation, and push the  boundaries of what’s possible. -->
       We are TheAlphaOnes, a young, passionate group of builders who love creating real things that people actually use. From dev tools to AI projects and futuristic experiments, we’re here to craft ideas that blend tech with everyday life.
      <br>
      <br>
      <!-- We believe technology should be a seamless extension of human  creativity, making complex ideas accessible and turning visions into  reality. At TheAlphaOnes, we don’t just build—we create, experiment, and redefine the norm. -->
       Beyond just a startup-in-the-making, we’re a public community, a place for anyone to connect, collaborate, and help shape the future of software, together. Whether you’re a builder, thinker, or just curious, you’re welcome here.
    </m.div>

    <div class="post"

    >
      BUILD • BUILD • BUILD
    </div>
</main>

  </div>
</template>


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
  padding: 10px auto;

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
  /* letter-spacing: 20%; */
  letter-spacing: 3px;

}

@media only screen and (max-width: 768px) {

.intro-box{

 width: 100%;

}



main{

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  width: 85%;
  margin: 50px 40px;
}


.sub{
  font-size: 15px;
}

.post{
  margin-top: 30px;
  align-self: center;
  font-weight: bold;
  letter-spacing: 3px;
}

}



</style>
