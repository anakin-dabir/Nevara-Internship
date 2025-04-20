import './App.css'
function App() {


  return (
    <>
      <div className="MAIN w-[480px] font-serif md:w-[768px]">
        <div className='w-[480px] h-[1181px] bg-[#EEF5F8] font-serif md:w-[768px]'>
          <div className='Top h-[112px] w-[480px] p-[32px]'>
            <h1 className="text-blueOrg">APHRODITE</h1>
          </div>
          {/* the middle above img section goes here */}
          <div className=" flex-mobile-center items-center gap-5 ">
            <p className="text-center text-ferozi text-xs">THE BEAUTY CENTER</p>
            <h1 className="text-4xl">Suitable For All <br /> Skin Problems</h1>
            <div className="flex justify-center items-center gap-10">
              <button class="bg-white text-blueOrg font-semibold py-2 px-6 rounded-full border border-blueOrg">
                BOOK NOW
              </button>
              <span className='opacity-50'> OR</span>
              <img className="h-7 w-7" src="../public/play.png" alt="play" />
            </div>
          </div>
          {/* the paragraph div starts here */}
          <div className="mt-20 pd-6" >
            <hr />
            <p className="opacity-50 text-center">Care for skin and natural beauty through <br /> professional treatments using natural products</p>
            <img src="../public/girl.png" alt="girl pic" />
          </div>
        </div>


        <div className="flex flex-col items-center gap-10 mt-10">
          <h4 className="text-center text-ferozi text-sm">Our Services</h4>
          <h3 className="text-2xl text-center">Beauty Rituals of our offer</h3>

          <div className="flex flex-col justify-center gap-10">
            <div className='services-card'>
              <img className='w-48 h-40' src="../public/servies/image.png" alt="" />
              <h4 className='text-ferozi text-sm mt-2'>Facial Treatments</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className='services-card'>
              <img className='w-48 h-40' src="../public/servies/image copy.png" alt="" />
              <h4 className='text-ferozi text-sm mt-2'>Skin Tightening</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className='services-card'>
              <img className='w-48 h-40' src="../public/servies/image copy 2.png" alt="" />
              <h4 className='text-ferozi text-sm mt-2'>Healthy Products</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        {/* //about us page goes here👇 */}

        <div className='aboutUs flex flex-col mt-20'>
          <p className="text-center text-ferozi text-s">ABOUT US</p>
          <h3 className="text-2xl text-center mt-[25px] mb-[10px]">Crafting Beauty Beyond Boundaries</h3>
          <p className="opacity-50 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusamus delectus animi optio veniam commodi, et numquam nisi odio dolorum amet officia voluptates aperiam veritatis </p>
          <img className='mt-[20px]' src="../public/aboutus/image.png" alt="#" />

          <img className='mt-[200px] mb-[200px] md:hidden' src="../public/aboutus/image copy.png" alt="#" />
          <img className='mt-[200px] mb-[200px] md:block' src="../public/tablet/girlfacial.png" alt="#" />

        </div>
        {/* the doctors meet div */}
        <div className="doctors flex flex-col gap-[40px]">
          <h4 className='text-ferozi text-sm text-center'>MEET THE DOCTORS</h4>
          <h3 className="text-2xl text-center">Discover Our Experts</h3>
          <div className='doctorsCard'>
            <div>
            <img src="../public/doctors/hannah.png" alt="" />
            </div>
            <h3 className="opacity-50 text-center"> plastic surgon</h3>
            <h4 className='text-[#000000] text-sm mt-2 text-center'>DR HANNAH WAGER</h4>

          </div>
          <div className='doctorsCard'>
            <div>
            <img src="../public/doctors/bryan.png" alt="" />
            </div>
            <h3 className="opacity-50 text-center"> anasthestiologist</h3>
            <h4 className='text-[#000000] text-sm mt-2 text-center'>bryan</h4>

          </div>

          <div className='doctorsCard'>
            <div>
            <img src="../public/doctors/last.png" alt="" />
            </div>
            <h3 className="opacity-50 text-center"> dermatologist</h3>
            <h4 className='text-[#000000] text-sm mt-2 text-center'>DR sarah nelson</h4>
          </div>
        </div>

        <div className='mt-[50px] mb-[50px] brands'>
          <img src="../public/brands/image.png" alt="" />
        </div>

        {/* the video img? */}
        <div className="flex flex-center justify-center">
        <img src="../public/videosrc/image.png" alt="" />
        </div>

        {/* the form goes here👇 HATE THE FORMMMMMMS(couldn't style it) */}
        {/* <div className='Form bg-[#85bad0] flex flex-col '>
          <h3 className="text-2xl text-center text-white">Ready to glow with us</h3>
          <label htmlFor="name">Name
            <input type="text" name='name' />
          </label>
          <label htmlFor="email">Email
            <input type="email" name='email' />
          </label>
          <label htmlFor="date">Date Appointment
            <input type="date" name='date' />
          </label>
          <label htmlFor="typeofservice">Type of service
            <input type="text" name='typeofservice' />
          </label>

          <a className='text-white' href="#"><button>BOOK NOW</button></a>

        </div> */}

        <div className='testimonials mt-[20px]'>
          <div>
            <h3 className="text-2xl text-center text-ferozi">Testimonials</h3>
            <h3 className="text-2xl text-center mt-[50px] mb-[10px]">From our satisfied client</h3>
          </div>
        </div>
        <div className='review  flex-mobile-center items-center p-[30px] gap-2'>
          <img src="../public/review/image.png" alt="" />
          <p className="text-center text-ferozi text-xs">Facial Treatment Client</p>
          <p className="opacity-50 text-center">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eius doloremque totam eum sint necessitatibus excepturi deserunt quod dignissimos? Repudiandae natus magni nisi"</p>
          <p className="text-center text-ferozi text-s">Laura Johnson</p>
        </div>

        <div className='featuredMain mt-[20px]'>
          <div className='firstHeadingFeatured  flex-mobile-center items-start gap-3 p-[7px]'>
            <p className="text-center text-ferozi text-s">Featured Post</p>
            <h3 className="text-2xl text-center mt-[50px] mb-[10px]">From Our Blog</h3>
            <button>Discover More</button>
          </div>
          <div className='featured-card'>
            <img src="../public/featured/image.png" alt="" />
            <h4 className='text-[#000000] text-sm mt-2 text-center'>Unlocking the secrets to glowing skin: Essential skincare tips</h4>
            <p className="opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusamus delectus animi optio veniam commodi, et numquam nisi odio dolorum amet officia voluptates aperiam veritatis </p>
            <div className='flex justify-between items-center w-full'>
              <a href="#">nevila bright</a>
              <a href="#">30 jan 2024</a>
              <button>Tips</button>
            </div>
            
          </div>
          <div className='features md:flex justify-center items-center'>
          <div className='featured-card md:w-[50%]'>
            <img src="../public/featured/image copy.png" alt="" />
            <h4 className='text-[#000000] text-sm mt-2 text-center'>Revealing the beauty within</h4>
            <p className="opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusamus delectus animi optio veniam commodi </p>
            <div className='flex justify-around items-center w-full'>
              <a href="#">nevila bright</a>
              <a href="#">30jan 2024</a>
              <button>Tips</button>
            </div>
          </div>

          <div className='featured-card md:w-[50%]'>
            <img src="../public/featured/image copy 2.png" alt="" />
            <h4 className='text-[#000000] text-sm mt-2 text-center'>The new agents of popular skin care</h4>
            <p className="opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusamus delectus animi optio veniam commodi, et numquam nisi odio dolorum </p>
            <div className='flex justify-around items-center w-full'>
              <a href="#">nevila bright</a>
              <a href="#">30 jan 2024</a>
              <button>Tips</button>
            </div>
          </div>
          </div>
          
        </div>


        {/* the footer starts here */}
        <div class="footer bg-blueOrg p-[20px] flex flex-col gap-5 mt-[50px]">
          <div className='nameandabout flex flex-col  justify-center gap-1'>
            <h1 className="text-[#ffffff]">APHRODITE</h1>
            <p className="opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusamus delectus animi optio veniam commodi, et numquam nisi odio dolorum amet officia voluptates </p>
          </div>

          <div className='contact-card' >
            <h4 className='text-[#ffffff] text-sm mt-2 text-center'>we are open at</h4>
            <p className="opacity-50 text-center">Monday - Friday : 09:00 AM - 20:00 PM
            </p>
            <p className="opacity-50 text-center">Saturday - Sunday : 09:00 AM - 18:00 PM
            </p>

          </div>

          <div className='contact-card'>
            <h4 className='text-[#ffffff] text-sm mt-2 text-center'>Get in touch with us</h4>
            <p className="opacity-50 text-center">info@8pxlStudio.com
            </p>
            <p className="opacity-50 text-center">vicotoria secret, london, united states
            </p>
          </div>

          <div className='contact-card md:flex-row justify-around items-center'>
            <h4 className='text-[#ffffff] text-sm mt-2 text-center'>FB- IG- LI</h4>
            <p className="opacity-50 text-center">Copyright © 2025 Aphrodite. All Rights Reserved
            </p>
            <p className="opacity-50 text-center">Terms & Conditions
            </p>
          </div>
        </div>
      </div>     {/* </div> org main div */}
    </>
  )
}
export default App
