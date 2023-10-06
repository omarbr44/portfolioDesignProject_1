<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { onMounted } from 'vue'
  import 'aos/dist/aos.css'
  import AOS from 'aos'

  onMounted (()=>{
  AOS.init()
  })
</script>

<template>
  <div class="bg-site-primary ">
<div class="  h-screen sm:flex">
  <div class=" sm:flex sm:items-center ">
    <div class="texttt">
  <div class="shades w-full z-10 flex items-center sm:h-fit h-screen relative" style="/* position: inherit; */"> 
    <div class="orange-back w-2/5 sm:w-3/5"></div>
    <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400" class=" ml-auto mr-auto sm:h-fit z-20" style=" width: 37rem;" src="../src/assets/SAVE_20231003_221014.png" alt="">
    <img src="../src/assets/ist.png" class=" sm:bottom-8 absolute z-30 bottom-0 hero-text " alt="">
   <!--   <span data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" class="aaa text-center absolute z-30 bottom-0 hero-text " style="font-size:28vw;line-height: 14rem; color: #232a54;left: 50%;
    transform: translate(-50%, 0);
  /* text-shadow:
    3px 3px 0 #4d4d62,
    -3px 3px 0 #4d4d62,
    -3px -3px 0 #4d4d62,
    3px -3px 0 #4d4d62; */ -webkit-text-stroke: 3px #4d4d62;color: rgba(0, 0, 0, 0.1);"> istikana</span> -->
</div>
</div>
</div>
</div>
<div class=" container mt-32 sm:mt-20 py-5">
  <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" class="aaa text-white text-3xl sm:text-lg sm:text-center text-right"> اهلا انا <span class=" text-site-secondary"> إستكانة</span>   ،  مصممة جرافيك مهتمه في التصميم الإبداعي والذكاء الاصطناعي و 
    في هذا الــعــرض سأشــاركم نـــمـــاذج مــن أحـدث إنـجـازاتـــــي وسأعطيكم نظرة عامة على الخدمات التي اقدمها وكيفية التواصل معي 
    
  </h1>
</div>
<div class=" container mt-32 sm:mt-20 py-5" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
  <h1 class=" text-white text-5xl sm:text-xl text-center ">: خــدمــاتــــــــــــــــــــــــي </h1>
  <div class=" w-3/4 my-10 border-white ml-auto mr-auto p-3 border rounded-sm "><p class="text-center text-white text-3xl sm:text-lg">تصميم رسومات <span class=" text-site-secondary">كرتونية</span> على التيشيرتات</p></div>
  <div class=" w-3/4 my-10 border-white ml-auto mr-auto p-3 border rounded-sm "><p class="text-center text-white text-3xl sm:text-lg">تصميم رسومات <span class=" text-site-secondary">فوتوغرافية</span> على التيشيرتات</p></div>
</div>
<div class=" container mt-32 sm:mt-20 py-5">
  <h1 class=" text-white text-5xl sm:text-xl text-center mb-20" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400">: معرض أعمالــــــــــــــــــي </h1>
  <div class=" flex sm:flex-col items-center justify-evenly mb-16" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
   <img class=" w-1/3 sm:w-3/4  mb-3" src="../src/assets/t1.png" alt="">
   <img class=" w-1/3 sm:w-3/4 mb-3" src="../src/assets/t2.png" alt="">
   <img class=" w-1/3 sm:w-3/4" src="../src/assets/t3.png" alt="">
  </div>
  <div class=" flex sm:flex-col justify-evenly items-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
   <img class=" w-1/3 sm:w-3/4 mb-3 " src="../src/assets/t4.png" alt="">
   <img class="w-1/3 sm:w-3/4 mb-3 " src="../src/assets/t5.png" alt="">
   <img class="w-1/3 sm:w-3/4" src="../src/assets/t6.png" alt="">
  </div>
<!--   <div class="flex flex-col lg:flex-row lg:justify-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
   <img class="md:w-3/4 md:mr-auto mb-8" src="../src/assets/tshirt2.png" alt="">
   <img class="md:w-3/4 md:ml-auto " src="../src/assets/tshirt3(2).png" alt="">
  </div>
  <div class="flex flex-col lg:flex-row lg:justify-center mt-8" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800">
   <img class="md:w-3/4 md:mr-auto mb-8 lg:mt-10" src="../src/assets/tshirt5.png" alt="">
   <img class="md:w-3/4 lg:w-96 lg:h-fit lg:mr-28 md:ml-auto" src="../src/assets/tshirt4.png" alt="">
  </div> -->
</div>
<div class="  mt-32 sm:mt-20 py-5">
  <div class="flex lg:justify-center">
    <Swiper data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" class=" mySwiper " style="padding-top: 7rem;
    padding-bottom: 2.5rem;" :navigation="true"
:effect="'coverflow'"
  :grabCursor="true"
  :centeredSlides="true"
  :slidesPerView="'auto'"
  :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  }">
  <SwiperSlide class="mx-4 ">
    <img class="shadow-md shadow-black  blcandwit" src="../src/assets/pic1.png" alt="">
  </SwiperSlide>
  <SwiperSlide class="mx-4">
    <img class="shadow-md shadow-black blcandwit" src="../src/assets/pic2.png" alt="">
  </SwiperSlide>
  <SwiperSlide class="mx-4" >
    <img class="shadow-md shadow-black  blcandwit" src="../src/assets/pic3.png" alt="">
  </SwiperSlide>
  <SwiperSlide class="mx-4 ">
    <img class="shadow-md shadow-black  blcandwit" src="../src/assets/pic4.png" alt="">
  </SwiperSlide>
  <SwiperSlide class="mx-4">
    <img class="shadow-md shadow-black blcandwit" src="../src/assets/pic5.png" alt="">
  </SwiperSlide>


    </Swiper>

  </div>
</div>

<div class=" flex justify-center flex-col pb-5">
<span class=" ml-auto mr-auto text-white text-5xl sm:text-2xl text-center py-10 mt-20 border-b border-site-secondary w-fit">:  للتواصل معي </span>
<span class=" text-white text-2xl sm:text-xl text-center mt-10"> البريد الإلكتروني </span>
<span class=" text-site-secondary text-2xl sm:text-xl text-center  "> hind.hamdi@gmail.com </span>
<span class=" text-white text-2xl sm:text-xl text-center mt-10">  التويتـــــــــــــــــــــــــــــــــــــــــــــــــر </span>
<span class=" text-site-secondary text-2xl sm:text-xl text-center  "> @iistikana_7 </span>
</div>
<!-- <div class=" bg-white  mt-22 sm:mt-10 py-5" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="300">
<div class="flex flex-col lg:flex-row items-center justify-between px-12 sm:px-5 mt-10">
  <p class=" text-site-primary text-4xl sm:text-2xl sm:order-2 md:order-2">hind.hamdi@gmail.com</p>
  <p class=" text-site-primary text-4xl sm:text-2xl">الـبـريـــــــــــــد الالـكـتـرونـــــــــــي</p>
  </div>
<div class="flex flex-col lg:flex-row items-center justify-between px-12 sm:px-5 mt-10">
  <p class=" text-site-primary text-4xl sm:text-2xl sm:order-2 md:order-2">@iistikana_7</p>
  <p class=" text-site-primary text-4xl sm:text-2xl"> التويتـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــر</p>
  </div>
</div> -->
</div>
</template>

<style scoped>
@font-face {
  font-family: 'tajwal-bold';
  src: url(./assets/fonts/ArbFONTS-Tajawal-Bold.ttf);
}
@font-face {
  font-family: 'tajwal-reg';
  src: url(./assets/fonts/ArbFONTS-Tajawal-Regular-1.ttf);
}
*{
  font-family: 'tajwal-bold';
}
p{
  font-family: 'tajwal-reg';
}
.orange-back{
  position: absolute;
  bottom: 0%;
  height: 100vh;
  content: '';
  background: #c96746;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 0;
}
.shades{
  position: relative;
}
.shades::after{
  position: absolute;
  content: '';
  width: 100%;
  height: 7rem;
  z-index: 2;
  bottom: -20px;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,0) 3%, rgba(35,42,84,1) 51%);
  z-index: 40;
}
/* .blcandwit{
	filter: grayscale(100%);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
}
.blcandwit:hover{
	filter: grayscale(0);
} */
/* @media(max-width: 640px){
  .hero-text{
  line-height: 8rem !important;
  -webkit-text-stroke: 3px #c96746 !important;
}
}  */
</style>
