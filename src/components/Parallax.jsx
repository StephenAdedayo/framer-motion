import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'


const Parallax = () => {
const ref = useRef()


const {scrollYProgress} = useScroll({
  target: ref,
  offset: ['start start', 'end start']
})

const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
const textY = useTransform(scrollYProgress, [0, 1], ['0%', '1000%'])


  return (
    <>
    
    <div ref={ref} className='w-full h-screen  overflow-hidden relative grid place-items-center'>
      <motion.h1 style={{y:textY}} className='font-bold text-7xl absolute top-14 z-10'>PARALLAX</motion.h1>

<motion.div  className='bg-[url("/moutain.jpg")] bg-cover inset-0 z-0 absolute bottom-0 w-full h-screen' style={{
  y:backgroundY
}}>

</motion.div>

<div className='bg-[url("/Subtract.png")] bg-cover w-full h-screen inset-0 z-20'>

</div>

{/* <form className='relative ' action="">
    <input className='w-full focus:border-red-500 peer border-2 outline-none  p-4 rounded-lg' type="text" />
    <label className='absolute top-[15px] left-[10px]  text-gray-500 transition-all ease-in duration-200 delay-75 peer-focus:text-[12px]  bg-white peer-focus:-top-[10px] px-2' >Your name</label>
</form> */}


    </div>

    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vel itaque. Incidunt laborum iste libero dolores possimus ducimus cupiditate, quia sunt. Necessitatibus, unde. Corrupti eum harum nostrum sit assumenda pariatur nam optio fuga error! Eius, hic. Repudiandae suscipit quisquam, numquam adipisci illum ipsam vel illo quibusdam! Ad totam blanditiis quos modi est maxime voluptate praesentium dolores fugit repellat adipisci, nulla ex consequuntur mollitia unde quasi minus! Repellat fuga odit temporibus ad, voluptatibus illo, facere unde adipisci illum aspernatur, voluptatem earum nostrum. Deserunt ab expedita modi eum architecto, magnam perspiciatis consequatur natus optio voluptas quis accusantium! Accusamus, minus? Debitis omnis neque sit quasi explicabo, laboriosam voluptatem eveniet dolores hic, magnam ex. Ut amet ea laborum voluptas tempora illo, fugiat doloremque eius eligendi obcaecati autem quibusdam tenetur blanditiis. Ratione reiciendis fugit facere obcaecati deserunt delectus nemo, in tempore quibusdam odit labore aliquid sed ab sint aperiam optio voluptatem hic est reprehenderit cumque earum. Dicta aliquam repudiandae fuga eligendi, optio facere harum aspernatur tempora velit, iste modi quos. Voluptate laborum ullam veritatis iste doloremque sit nostrum ipsa odit, id corrupti optio hic animi dolores et officia necessitatibus! Nisi alias aut quasi! Deleniti facilis velit eum est facere? Cumque quasi distinctio unde magni aperiam esse voluptas delectus commodi, iure, dolores facere, ratione ducimus! Placeat accusantium suscipit blanditiis, laudantium labore consequatur consectetur quia adipisci. Reiciendis culpa, obcaecati minima quis, minus optio nam praesentium repellendus qui nisi cumque ipsum ipsa accusantium iure quidem quaerat consectetur? Laborum reiciendis animi, voluptas aliquid commodi deserunt odio esse autem illo rem nobis doloribus inventore maiores aspernatur alias. Officiis minima cupiditate ducimus recusandae temporibus fugiat fugit consequatur? Debitis nemo tempore, incidunt eveniet saepe voluptatum molestiae officia ut libero magnam eos adipisci excepturi nam ipsum dignissimos corporis, possimus, placeat provident quaerat natus! Explicabo natus optio sunt repellendus error aspernatur voluptate repudiandae itaque et quae, perferendis cumque accusamus temporibus laboriosam, ab quod! Consectetur impedit autem, accusamus illo iste at labore soluta quas culpa voluptatum atque repellendus saepe neque, quibusdam aliquid. Blanditiis, voluptatibus ex. Et error nulla eum sed commodi impedit fugiat laudantium eligendi sapiente officia recusandae sit, dolore assumenda quisquam quibusdam repellat excepturi placeat nobis perspiciatis tempora facere, vitae eius! Distinctio voluptatum quas vitae exercitationem? Officiis nam recusandae nisi dolores, placeat nihil laboriosam? Quia, porro deleniti! Est quia porro soluta. Tempore pariatur odio et aut porro totam aperiam, enim iure placeat rerum recusandae reprehenderit quaerat ad amet vero in at blanditiis omnis impedit! Laborum accusantium delectus ad ipsam consectetur iste ipsum cupiditate est cumque! Saepe sint ipsam sapiente, illum dignissimos mollitia maiores veritatis aperiam enim omnis cupiditate assumenda doloremque quidem cumque distinctio! Error necessitatibus, sint minus harum molestias labore amet tempore itaque repellendus rem, pariatur enim adipisci quae assumenda. Facilis ratione magnam quidem dolores autem corrupti aut quasi corporis ex, iure vero earum quos expedita laudantium. Aut harum excepturi reiciendis voluptas sint expedita adipisci, omnis porro, nisi est vitae exercitationem? Maxime cumque veniam, aspernatur inventore soluta rem delectus iusto laudantium assumenda vero itaque ad incidunt obcaecati, alias officia? Libero optio illo obcaecati porro quasi sit mollitia totam est, doloribus tempora quis repellendus quas beatae rerum et, ullam nobis exercitationem, accusantium repellat. Explicabo quaerat velit quae maiores dolorum non cupiditate? Beatae porro nobis sed! Soluta deleniti ratione sed ducimus ut vitae officiis voluptatem nihil quaerat, similique repudiandae? Eius molestiae necessitatibus, sunt ipsum praesentium saepe temporibus dolor suscipit fugiat ut eligendi dolorem rem repellendus non ipsam autem, expedita dignissimos. Iure, dolorem optio, adipisci quidem ipsum nostrum repudiandae praesentium, veritatis officiis rem quam dolor! Eum tempore dolorum excepturi repudiandae modi? Maiores molestiae accusantium pariatur incidunt hic totam sapiente blanditiis excepturi corrupti nam voluptatum aperiam, atque cupiditate qui, itaque, eum explicabo officia! Corrupti eaque nobis, nam, odit quidem vel nesciunt voluptatem voluptate necessitatibus vitae molestias et architecto quisquam corporis! Sint veritatis magni numquam fuga odio, aliquid cumque aliquam cupiditate omnis voluptatibus beatae vitae animi nam, exercitationem esse. Facere, suscipit obcaecati. Libero, et iusto. Rem sunt aperiam id culpa iusto, nemo libero quia animi soluta eos omnis inventore quis atque ex doloribus corporis commodi ratione maxime eaque, reiciendis nesciunt recusandae ullam aspernatur! Expedita nam repudiandae error quaerat maxime atque facilis itaque possimus. Saepe odio neque voluptatum harum. Doloribus, ipsa consequuntur? Eligendi odit deleniti veritatis cumque molestias, eius quos, praesentium quasi sed iusto beatae natus pariatur? Hic iste tempore nihil amet nisi sit consectetur iusto totam laudantium ut, quia atque suscipit dignissimos saepe eaque autem distinctio quis in aliquid. Dolor tempore, expedita facere sed laborum reiciendis beatae praesentium! Beatae exercitationem architecto voluptate! Cum ipsum nam tempora laborum consectetur distinctio, accusantium aspernatur, doloribus nihil sunt facilis temporibus, in porro recusandae repellendus sequi. Sapiente error doloribus vero inventore architecto asperiores voluptatum ea repellendus, eum ad, nesciunt aliquid repudiandae! Ipsam tenetur esse aut, natus voluptas rerum laudantium ex porro! Possimus sit necessitatibus illum inventore perferendis illo harum tempora accusantium nihil aut earum maxime temporibus dignissimos officiis autem eligendi, repudiandae aliquam. Dignissimos et asperiores amet, nihil at eius libero nam aliquam voluptatum deleniti perferendis aliquid ipsam odit id nostrum quia accusantium facilis. Officiis necessitatibus ea quibusdam eveniet voluptatum vero delectus! Cupiditate optio esse possimus, ipsum deleniti quasi assumenda ab, in ex saepe inventore quibusdam deserunt suscipit molestiae error perferendis. Sapiente odio incidunt harum corporis fuga dolore, molestiae adipisci veniam dignissimos aspernatur pariatur reiciendis excepturi necessitatibus, unde quasi. Quo, animi facilis? Molestias error mollitia perspiciatis vero suscipit omnis totam necessitatibus. Nihil accusamus accusantium perferendis explicabo quae esse atque non delectus quia quo asperiores commodi nostrum veritatis voluptas, reprehenderit, mollitia eos minima eum praesentium! Placeat itaque nam incidunt totam maxime iusto. Voluptatum quibusdam ipsa itaque enim at, voluptas voluptate ab quod sint. Molestiae nobis error nesciunt vel eligendi odit, repellat alias repudiandae commodi optio animi id harum, inventore asperiores nostrum fuga a nam quaerat cum laboriosam, at corporis dignissimos tempora velit? Nisi nam debitis quam deserunt inventore at esse voluptatem voluptatibus libero consequuntur, repellendus culpa possimus fugit numquam cupiditate. Earum eveniet vero voluptate facere aliquid delectus ullam ipsum iusto voluptatum! Nostrum velit rem culpa possimus voluptates, numquam ullam, voluptatum, voluptate veritatis quaerat distinctio quisquam corporis.</p>

    </div>
    </>
  )
}

export default Parallax
