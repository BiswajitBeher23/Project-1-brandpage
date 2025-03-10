import React from 'react'

export const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BEST</p>
            
            <div className='hero-btn'>
                <button>shop now</button>
                <button className='secondary-btn'>Category</button>
            </div>

            <div className='shopping'>
                <p>Also available on</p>
                <div className='brand-icons'>
                    <img src="/images/amazone.png" alt="amazonelogo" height={42} width={42}/>
                    <img src="/images/flipkart.png" alt="flipkartlogo" height={42} width={42}/>

                </div>

            </div>
        </div>
        <div className='hero-image'>
        <img src="/images/shoes.png" alt="shoeslogo" height={400} />

        </div>

    </main>
  )
}
