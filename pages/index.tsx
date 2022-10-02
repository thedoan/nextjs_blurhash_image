import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from "../public/uploads/masahiro-miyagi-xk0YHAn3dzk-unsplash.jpg";
import images from "../public/images";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.body}>
        <h1>Using BlurDataUrl in Next.js</h1>
        <section className={styles.section}>
          {/*
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                layout="fill"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 1 is stored locally and does not use a placeholder.
            </figcaption>
          </figure>
          */}
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                placeholder="blur"
                layout="fill"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 2 is stored locally and uses a placeholder.
            </figcaption>
          </figure>
          {/*
          <figure>
            <div className={styles.imageWrapper}>
              <Image src={images[0].src} alt={image.src} layout="fill" />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 3 is stored remotely but does not use a placeholder.
            </figcaption>
          </figure>
          */}
          {images.map((image, index) => (
            <figure key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.src}
                  placeholder="blur"
                  blurDataURL={image.blurUrl}
                  layout="fill"
                />
              </div>
              <figcaption className={styles.imageCaption}>
                Image {index + 4} is stored remotely and uses a placeholder.
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home
