import React from "react";
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image";
import SidePost from "@/components/sidePost/SidePost";
import Newsletter from "@/components/newsletter/Newsletter";
import Suggest from "@/components/suggestions/Suggest";

const page = () => {
  return (
    <div className={`${styles.contentDetail} wrapper`}>
        <Link href="">{`Home >
          Aenean Eleifend >
          Rhoncus >
          Et Tellus Id Magnis Nisi Maecenas Eget Nam`}
        </Link>
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <Image
            width="1100"
            height="600"
            className={styles.postImage}
            src="/main-img.svg"
            alt=""
          />
          <div className={styles.onImg}>
            <div className={styles.onImgLeft}>
              <div className={styles.overlay}>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.overlay}>
                <p>Aliquam</p>
              </div>
            </div>
            <div className={styles.contentDesc}>
              <h1>5 Efficient Rules How to Organize Your Working Place</h1>
              <p>Relationship tips couples therapists are giving all the time</p>
              <span className={styles.contentDetails} >by Joanna Wellick
                2 minute read
                1.6K views
                1.2K shares</span>
            </div>
          </div>
          <div className={styles.blogDetail}>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur sunt cupiditate, dolor accusantium assumenda ducimus quos itaque. Eaque recusandae, quidem voluptatibus enim accusantium fugiat dignissimos eius ipsam consequatur quia! Error temporibus rerum eius. Et impedit ab ea possimus sint quia deserunt numquam vitae? Dolor perspiciatis sunt quis reprehenderit doloribus, neque optio obcaecati vero illo? Temporibus nobis unde impedit magnam, voluptates, dolorem consectetur delectus nulla nisi natus porro numquam obcaecati rem deserunt excepturi maiores? Beatae recusandae quas iusto, aliquam itaque velit nam ad cumque ipsa omnis doloribus aspernatur quae, suscipit reiciendis aut vel dignissimos explicabo sint perspiciatis voluptates, repellat eius quaerat corrupti consectetur! Adipisci, architecto. Eligendi odio fugit rem magni? Eum, qui. Quia cupiditate excepturi obcaecati odio illo labore id laborum sequi, inventore repellendus pariatur voluptatem maxime incidunt omnis ab, in asperiores libero, veniam soluta. Unde itaque mollitia assumenda laboriosam quis voluptatem expedita tempore. Cupiditate earum eligendi aliquid fugit iusto, beatae doloremque incidunt non deleniti. Mollitia, animi necessitatibus maxime sed autem, molestias, quos nostrum minima excepturi tenetur facere voluptatibus eos. Quia esse autem ratione eaque consequuntur voluptate animi. Consequuntur perspiciatis, quaerat, repellendus numquam est magnam iste ex, soluta possimus earum hic nisi ad error magni. Illum, nemo veritatis. Doloribus dolore voluptate, dolor et autem cum accusamus repellat sunt, quae omnis dolorem, iste eius saepe id tempora. Sapiente omnis dignissimos aliquid laboriosam, modi deserunt unde. Harum, totam similique! Dolore asperiores in earum quos, molestias hic nam non reiciendis? Natus suscipit, nam at cum sed, illo distinctio odit harum culpa rerum magnam consequatur, eius nesciunt nobis tenetur quis quas eos ducimus quos unde. Harum tempore libero explicabo quidem cum ab nam ad esse, ipsa pariatur optio aliquam, atque vero dolorum expedita est eos praesentium adipisci! Sint ab delectus illo error accusantium aspernatur veniam temporibus repellendus excepturi officiis recusandae earum, hic magnam voluptatem eaque voluptate, consequuntur esse alias! Porro atque similique vero magni ut numquam autem ratione unde praesentium natus, illo vitae voluptate libero fugit recusandae sed explicabo ipsam fugiat distinctio error. Quo eveniet quae iusto facilis incidunt atque, aliquid quam autem eos provident, natus hic aliquam ipsam. Accusantium placeat dolor doloribus, repellat impedit nisi, vitae ab id incidunt molestiae debitis cumque! Fuga laboriosam nobis hic qui ratione iste quae earum, nesciunt in! Odit ad eaque numquam ipsam cum sit explicabo. Deleniti consequuntur, nisi, libero obcaecati reiciendis nulla magni sit earum sunt reprehenderit quidem voluptatibus tempora ex. Architecto consequuntur quis ut voluptatem magnam officiis rerum labore? Alias, velit. Et, cupiditate? Et mollitia error quasi autem soluta, officiis, dolore distinctio accusantium deserunt quisquam, placeat eos quis. Nulla error harum voluptatibus hic quaerat id, provident dicta, iure tempore facilis ab sequi beatae eligendi non. Tempora possimus, obcaecati cumque consequuntur similique accusamus hic consectetur repellat consequatur esse repellendus magnam rem necessitatibus illum illo architecto voluptate! Cum, minima accusamus aspernatur deleniti iure velit magni. Veritatis beatae voluptatibus excepturi quaerat tempora, nam facilis autem nemo molestiae ipsum expedita labore sit tempore dolor dignissimos et velit, aspernatur ea animi enim. Nobis inventore in voluptatibus culpa facilis magni modi ea!
            </div>
            <div className={styles.shares}>
              <div className="">
                <p>10K</p>
                <span>Shares</span>
              </div>
              <div className="">
                <button>
                  <Image/>
                  <p>Shares 
                    <span>635</span>
                  </p>
                </button>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <SidePost/>
      </div>
      <Newsletter />
      <Suggest/>
    </div>
  );
};

export default page;
