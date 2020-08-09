  
import React from 'react'
import Footer from '../parts/Footer'

function About() {
  return (
    <>
      <body>
        <section>
          <div style={{ padding: "10px", border: "1px solid #ccc" }}>
            <h1 style={{ textAlign: "center" }}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <ol>
              <li><strong style={{ width: "100px" }}>Nama: </strong>Gamalliel Sharon</li> 
              <li><strong style={{ width: "100px" }}>Email: </strong>sharongamalliel@gmail.com</li> 
              <li><strong style={{ width: "100px" }}>Sistem Operasi yang digunakan: </strong>Mac OS</li>
              <li><strong style={{ width: "100px" }}>Akun Github: </strong>https://github.com/Gamalliel19</li> 
              <li><strong style={{ width: "100px" }}>Akun Telegram: </strong>@gmllshrn</li> 
            </ol>
          </div>
        </section>
      </body>
      <Footer/>
    </>
  )
}
export default About