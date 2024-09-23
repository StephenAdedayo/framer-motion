import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'


const UseScroll = () => {

// const targetRef = useRef()


const ref = useRef(null)
const isInView = useInView(ref)



const {scrollYProgress} = useScroll(ref)

useMotionValueEvent(scrollYProgress, "change", 
    (latest) => {
    console.log(latest)
}  )
const background = useTransform(scrollYProgress, [0, 1], ['#FFFFFF', '#6366F1' ])

const scale = useTransform(scrollYProgress, [0, 1], ['0', '50%',])

// const {scrollYProgress} = useScroll({
// target:targetRef
// })

// const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '360deg'])

  return (
    <>
    <div ref={ref} className='grid h-screen w-full place-items-center relative'>
      
   <motion.div
   animate={{scale: isInView ? '100%' : '0' }}
   style={{scale}}
   className='absolute bottom-0 top-0 left-0 size-10/12 bg-blue-700'></motion.div>
   <motion.div 
    animate={{scale: isInView ? '100%' : '0'}}
   className='absolute bottom-0 top-0 left-1/3 w-28 h-28 bg-blue-700'></motion.div>
   <motion.div 
    animate={{scale: isInView ? '100%' : '0'}}
   className='absolute bottom-0 top-0 left-2/3 w-28 h-28 bg-blue-700'></motion.div>



   <motion.div style={{scaleX: scrollYProgress, background:background}} className='w-full h-2 rounded-lg  fixed bottom-0 bg-indigo-600'>

   </motion.div>

    </div>

    <div className='relative grid place-items-center'>
   <h1 className='z-0 relative text-4xl'>I am scrolling now</h1>
   

   <motion.div  
   initial={{opacity:1}}
   whileInView={{opacity:0}}
   viewport={{margin:'-200px', once:true}}
   className='absolute bottom-0 top-0 right-0 left-0 z-20 bg-blue-500 '>

   </motion.div> 
     

    </div>

    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium error quisquam numquam ullam ab blanditiis nam, itaque nobis eos asperiores minima repellat ratione maxime, quo maiores. Fugit dolores non quidem, exercitationem iure dolorem fuga voluptas, dignissimos tempore aspernatur voluptatibus adipisci vel! Sit, doloremque voluptate at autem, quidem explicabo fugit, reiciendis nostrum esse repudiandae voluptatibus illo. Amet, nostrum! Possimus aspernatur odit, nobis omnis cupiditate minima ut repudiandae? Ab itaque repellendus nemo maxime. Laudantium deleniti vitae corporis unde? Corrupti provident incidunt ipsam dolor velit vero soluta et earum at, mollitia a quisquam sed tenetur pariatur fugit voluptatibus rem esse. Corporis reprehenderit consequuntur necessitatibus adipisci ratione impedit deleniti laborum, debitis magnam quaerat corrupti perferendis labore voluptate velit, assumenda omnis minima? Minus quam nihil architecto qui amet voluptatibus assumenda maiores cum perspiciatis perferendis voluptates nostrum ea quibusdam eveniet, mollitia earum eum accusantium! Dicta quam quos magnam soluta libero! Necessitatibus quas vero, harum fugit non cum rem voluptas, praesentium nulla sapiente facilis perspiciatis, aut possimus porro! Veritatis magni expedita sapiente, incidunt voluptatum ab quae distinctio vel possimus recusandae est, saepe nostrum architecto. Itaque, voluptates tenetur. Numquam quibusdam repellat mollitia architecto tenetur unde quidem quas beatae officia dicta atque incidunt impedit praesentium, pariatur illum iure.
    </div>

    {/* <div className='my-10  grid place-items-center ' ref={targetRef}>
      <motion.div style={{rotate}} className='bg-indigo-800 w-24 h-24 '></motion.div>
    </div> */}
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci expedita quas iusto sequi sapiente aliquam repellendus ut dicta. Assumenda nostrum aperiam cupiditate quas fugit ad ea, veniam eligendi maiores aspernatur! Perspiciatis omnis aliquid aliquam quia molestias odio? Commodi nulla necessitatibus esse adipisci explicabo dignissimos a quia ipsum itaque libero porro possimus voluptatibus veritatis debitis deleniti, eos labore ullam nesciunt culpa? Deserunt dolorem suscipit reprehenderit blanditiis iure corporis aliquid. Perferendis, minus. Veniam nobis officia natus expedita. Neque illum molestias eos quidem quae eius, assumenda ut eligendi maiores repudiandae nisi ex dolor. Quia placeat minima similique nihil incidunt, excepturi impedit provident veritatis voluptatum asperiores molestias veniam accusamus nemo tempora explicabo sed unde eaque itaque nulla ducimus architecto perspiciatis blanditiis? Animi, iure sit. Aliquid provident, laborum officiis sequi accusantium, velit a atque illo earum fugit quisquam voluptatibus. Soluta, omnis eius repellat quisquam sit reprehenderit quo consequuntur officia magnam beatae iusto. Odio quos perferendis atque cum, eaque porro non molestiae aliquam modi nam dolorem culpa est! Quo nostrum quos necessitatibus veritatis consequuntur voluptas officiis dolores. Cumque necessitatibus magni voluptatibus sequi quam voluptatum non velit? Dolores impedit iste suscipit sint tempore deserunt expedita! Ex voluptates eius facere et vitae cupiditate impedit velit ratione nobis. Consequuntur nulla tenetur hic sequi fuga soluta deleniti ratione officiis dolorem animi est velit voluptatem, eos magnam obcaecati necessitatibus esse expedita, in perferendis quam et atque veritatis. Et aliquid beatae atque magnam rerum! Quidem veniam perspiciatis quibusdam, hic sed nemo pariatur accusantium blanditiis ducimus eaque consequatur officiis. Quasi aliquid deserunt obcaecati reprehenderit, aut inventore illo iure temporibus fugiat veritatis a tenetur? Amet repellendus officia dolorum nisi architecto magni totam alias ut nihil, illo non, cum inventore, dignissimos magnam praesentium cumque aspernatur delectus. Non, recusandae. Sed perspiciatis placeat reprehenderit blanditiis inventore rerum ducimus nulla totam, autem fugit est dolor error expedita nesciunt maiores qui eos illum, aut dolores mollitia quis repellat tenetur obcaecati! Doloremque debitis inventore libero aperiam minima quam quibusdam optio minus non eum et temporibus, nam mollitia nesciunt facere odit quis? Voluptate exercitationem a, provident distinctio molestias sit modi repudiandae laudantium quia beatae pariatur tempore eius nemo expedita excepturi. Quod laudantium architecto voluptatem cumque voluptas labore! Ipsam beatae dolorum dignissimos saepe velit illo dolores hic magnam quo ipsum eos, officiis facilis quia laborum vitae rem? Ullam consectetur, eos repellendus quod iusto in ipsa ipsam impedit nobis, dolor minima iste dolore voluptates fuga natus nihil maiores laudantium libero illum at, veritatis sunt! At fuga repudiandae voluptatem! Quia consectetur, impedit aspernatur doloribus incidunt eligendi quibusdam, veniam numquam suscipit alias nam, aperiam esse! Velit dolorem, consectetur mollitia laudantium quas incidunt voluptatibus aliquam obcaecati aspernatur a iusto exercitationem natus ullam aliquid distinctio commodi ipsa officia quod optio tenetur quos explicabo. Sit beatae, atque voluptate nihil laboriosam autem nesciunt ad, officia veniam ut a ducimus expedita eaque sunt eius asperiores repellat et commodi libero soluta eveniet. Beatae debitis, omnis numquam sit, id doloremque animi molestias dolores tenetur magnam modi ipsa, cumque dignissimos eaque expedita. Consequuntur doloribus, voluptas ullam a animi deserunt esse recusandae sunt reiciendis.</p>

    </>
  )
}

export default UseScroll
