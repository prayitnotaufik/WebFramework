import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subheader from './subheader';
import Biodata from './biodata';
import "bootstrap/dist/css/bootstrap.min.css";
import foto from './foto.jpg';
import about from './img/about-img.jpg';
import education from './img/education.jpeg';
import skill from './img/skill-img.png';
import { Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div><h1>Hallo Polinema</h1></div>
    );
  }
}

class App extends Component {
  render() {
    return (

      // ABOUT
      <section>
        <div id="about" class="home-section bg-cloud">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2>About Me</h2>
                  <div class="heading-line"></div>
                  <p>Sedikit cerita tentang saya, pemuda ganteng stok terakhir yang lahir di ujung era 90 an.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 about-img">
                <img src={about} alt="about" />
              </div>

              <div class="col-md-6 content">
                <h2>Mengulas sedikit tentang saya, dari pemarah hingga menjadi periang</h2>
                <h3>Nama saya Muhammad Taufik Prayitno, pemuda keren yang lahir di akhir era 90-an</h3>
                <p>
                  Banyak sekali cerita yang mendasari perubahan saya yang terkenal <i>Troublemaker</i> menjadi seorang <i>Moodbooster</i>. Salah satu yang paling saya ingat adalah ketika saya mengacaukan sesuatu hingga membuat beberapa orang terdekat membenci saya dengan amat sangat, dan membuat saya berkaca melihat kesalahan saya,instropeksi dan membuahkan suatu prinsip yang saya bawa hingga sekarang adalah "<i>Membuat orang disekitar kita tertawa, adalah sesuatu yang sangat membahagiakan</i>" , anda tidak percaya? Cobalah.
                        </p>
              </div>
            </div>
          </div>
        </div>
        <div id="education" class="home-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2>Education</h2>
                  <div class="heading-line"></div>
                  <p>Riwayat pendidikan saya dari TK hingga sekarang di Perguruan Tinggi</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 education-img">
                <img src={education} alt="education" />
              </div>
              <div class="col-md-6 content">
                <h2>Riwayat pendidikan saya</h2>
                <p>
                  Saya memulai perjalanan pendidikan saya di TK KARTIKA V-77 (2003-2005) dan lulus dengan predikat default anak TK pada umumnya. Lalu melanjutkan pendidikan Sekolah Dasar di SD Kesatrian 1 (2005-2011) dan lulus dengan predikat yang sangat baik menurut saya yaitu peringkat 3 dari sekian ratus siswa dengan Nilai Ujian Nasional 28,55 dari 30,00. Bermodalkan nilai yang cukup baik saya melesat menuju salah satu SMP favorit di malang yaitu SMPN 5 Malang (2011-2014) dan lulus dengan Nilai Ujian Nasional 34,80 dari 40,00. Berbekal nilai yang cukup saya melanjutkan ke jenjang yang lebih tinggi di SMKN 4 Malang (2014-2017) mengambil jurusan Multimedia, dan lulus dengan Nilai Ujian Nasional 28,50 dari 40,00. Masih penasaran dengan pendidikan vokasi, saya melanjutkan ke Politeknik Negeri Malang mengambil D4 jurusan Teknik Informatika dan masih menempuh pendidikan sampai sekarang.
                        </p>
              </div>
            </div>
          </div>
        </div>
        <div id="skill" class="home-section bg-cloud">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2 >Skill</h2>
                  <div class="heading-line"></div>
                  <p>Beberapa kemampuan saya di bidang akademis dan non akademis</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="wrap">
                  <div class="content">
                    <h3>Graphic Design</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning graphic-design" role="progressbar"
                      aria-valuenow="20" aria-valuemin="70%" aria-valuemax="70%">70%</div>
                  </div>
                </div>
                <div class="wrap">
                  <div class="content">
                    <h3>Videography</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success videography" role="progressbar"
                       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                  </div>
                </div>
                <div class="wrap">
                  <div class="content">
                    <h3>Photography</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning photography" role="progressbar"
                       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                </div>
                <div class="wrap">
                  <div class="content">
                    <h3>Programming</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger programming" role="progressbar"
                       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                </div>
                <div class="wrap">
                  <div class="content">
                    <h3>Pro Gaming</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success progaming" role="progressbar"
                       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>
                </div>
                <div class="wrap">
                  <div class="content">
                    <h3>Menantu Idaman</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info menantu" role="progressbar"
                      aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>
                </div>
                <div class="wrap">
                  <div class="content">
                    <h3>Kekasih Idaman</h3>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning kekasih" role="progressbar"
                       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                  </div>
                </div>

              </div>
              <div class="col-md-6 skill-img">
                <img src={skill} alt="skill"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      // ABOUT
    )
  }
}

export default App;
